// Import the functions you need from the SDKs you need
import { FirebaseOptions, initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';
import { ENV } from '@core/Enviroment';
import { getFirestore } from 'firebase/firestore';
import { FirebaseStorage, getStorage } from 'firebase/storage';

export const firebaseConfig: FirebaseOptions = {
  apiKey: ENV.VITE_FB_API_KEY,
  authDomain: ENV.VITE_FB_AUTHD,
  projectId: ENV.VITE_FB_PID,
  storageBucket: ENV.VITE_FB_SBKT,
  messagingSenderId: ENV.VITE_FB_MSID,
  appId: ENV.VITE_FB_APPID,
  measurementId: ENV.VITE_FB_MID,
};
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
export const storage: FirebaseStorage = getStorage(app);

export function getFirebaseApp() {
  const analytics = getAnalytics(app);
  console.log(analytics);
  return app;
}
