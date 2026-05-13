import { initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import { initializeFirestore, doc, getDocFromServer, setLogLevel } from 'firebase/firestore';
import { getStorage } from 'firebase/storage';
import firebaseConfig from '../../firebase-applet-config.json';

// Set log level to debug to help diagnose connection issues in the environment
setLogLevel('debug');

const app = initializeApp(firebaseConfig);

// Initialize Firestore with settings to handle potential network issues in the preview environment
export const db = initializeFirestore(app, {
  experimentalForceLongPolling: true,
  host: 'firestore.googleapis.com',
  ssl: true,
}, firebaseConfig.firestoreDatabaseId);

export const auth = getAuth(app);
export const storage = getStorage(app, "gs://gen-lang-client-0033443463.firebasestorage.app");

async function testConnection() {
  try {
    await getDocFromServer(doc(db, 'test', 'connection'));
  } catch (error) {
    const err = error as any;
    if (err.code === 'unavailable' || (err.message && err.message.includes('backend'))) {
      console.warn("Firestore connection check failed: Backend unreachable. Using offline mode.");
    }
  }
}

testConnection();
