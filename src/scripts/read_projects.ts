
import { db } from '../lib/firebase.js';
import { collection, getDocs } from 'firebase/firestore';

async function readProjects() {
  try {
    const projectsRef = collection(db, 'projects');
    const snapshot = await getDocs(projectsRef);
    const projects = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
    console.log(JSON.stringify(projects, null, 2));
  } catch (error) {
    console.error('Error reading projects:', error);
  }
}

readProjects();
