import { collection, getDocs } from 'firebase/firestore';
import { db } from '@core/firebase/firebaseConfig';
import { Project } from '../types';

export async function useProjects() {
  const projectsCol = collection(db, 'projects');
  const projectSnapshot = await getDocs(projectsCol);
  const projectList = projectSnapshot.docs.map((doc) => doc.data() as Project);
  return projectList;
}
