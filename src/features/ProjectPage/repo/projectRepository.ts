// projectFunctions.ts
import { db, storage } from '@core/firebase/firebaseConfig';
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getDocs,
  updateDoc,
} from 'firebase/firestore';
import {
  deleteObject,
  getDownloadURL,
  ref,
  uploadBytes,
} from 'firebase/storage';
import { Project } from '../types';

const projectCollectionRef = collection(db, 'projects');

export const createProject = async (
  projectData: Omit<Project, 'id'>,
  file?: File
): Promise<Project> => {
  const docRef = await addDoc(projectCollectionRef, projectData);
  let imageUrl = '';
  if (file) {
    const imageRef = ref(storage, `projects/${docRef.id}`);
    await uploadBytes(imageRef, file);
    imageUrl = await getDownloadURL(imageRef);
    await updateDoc(docRef, { imageUrl });
  }
  return { id: docRef.id, ...projectData, imageUrl };
};

export const getProjects = async (): Promise<Project[]> => {
  const snapshot = await getDocs(projectCollectionRef);
  return snapshot.docs.map(
    (document) => ({ id: document.id, ...document.data() }) as Project
  );
};

export const updateProject = async (
  projectId: string,
  projectData: Partial<Project>
): Promise<void> => {
  const docRef = doc(db, 'projects', projectId);
  await updateDoc(docRef, projectData);
};

export const deleteProject = async (projectId: string): Promise<void> => {
  const docRef = doc(db, 'projects', projectId);
  await deleteDoc(docRef);
  const imageRef = ref(storage, `projects/${projectId}`);
  await deleteObject(imageRef);
};
