import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, doc, getDocFromServer, setLogLevel } from 'firebase/firestore';
import firebaseConfig from '../../firebase-applet-config.json';

// Set log level to debug to help diagnose connection issues in the environment
// setLogLevel('debug');

const app = initializeApp(firebaseConfig);

// Initialize Firestore with settings to handle potential network issues in the preview environment
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  host: 'firestore.googleapis.com',
  ssl: true,
}, firebaseConfig.firestoreDatabaseId);

export const auth = getAuth(app);
