import { doc, writeBatch, collection, getDocs } from 'firebase/firestore';
import { db } from './firebase';
import { CASE_STUDIES } from '../constants/projects';

export async function migrateData() {
  const projectsSnap = await getDocs(collection(db, 'projects'));
  if (!projectsSnap.empty) {
    console.log('Data already exists, skipping migration.');
    return;
  }

  console.log('Migrating data...');
  const batch = writeBatch(db);

  // Projects & Case Studies
  Object.values(CASE_STUDIES).forEach((project, index) => {
    const projectRef = doc(db, 'projects', project.id);
    batch.set(projectRef, {
      ...project,
      status: 'Published',
      order: index,
      updatedAt: new Date().toISOString()
    });
  });

  // Testimonials (from Testimonials.tsx data)
  const testimonials = [
    {
      name: "Kamran Kaviani",
      role: "Chief Product Officer",
      extra: "Managed Amirhosein directly at Bit24",
      text: "AmirHossein is a gifted and dedicated UX Researcher with a talent for uncovering valuable user insights. His expertise in conducting deep user interviews, usability tests, and heuristic evaluations has been instrumental in enhancing our product's user experience. AmirHossein’s ability to translate complex research findings into actionable recommendations makes him a valuable asset to any design team.",
      avatar: "/Kamran.png",
      order: 0
    },
    {
      name: "Melika Mirazizi",
      role: "Product Manager",
      extra: "Managed Amirhosein directly at FEEL",
      text: "I worked with him on several occasion, like FEEL AmirHosein is an incredibly disciplined product designer who approaches every task with a positive attitude and a strong sense of ownership. He is highly adaptive and flexible, able to seamlessly adjust to changing circumstances and requirements. He has a keen understanding of user-centric design principles and always strives to achieve the best possible results for both the end user and the team.",
      avatar: "/Melika.png",
      order: 1
    },
    {
      name: "Yasaman Zarezadeh",
      role: "Scrum Master",
      extra: "Worked with Amirhosein on different teams",
      text: "Amirhossein was one of my most passionate and highly skilled colleagues in Espad. With a deep under-standing of UX and his UI skills in Figma, he was able to design many brilliant frames for our website and application which were innovative. He had to design tricky frames for a complicated business, yet he was successful in creating simple and user-friendly frames for a very pleasant user experience.",
      avatar: "/Yasaman.png",
      order: 2
    },
    {
      name: "Hadis Hosseini",
      role: "Product Designer",
      extra: "Worked with Amirhosein on the same team",
      text: "Amirhossein is a very supportive, empathetic, and encouraging team leader who truly comprehends his colleagues' work circumstances. He strives to maintain a work environment free from anxiety and tension. In addition to emphasizing the importance of meetings' organization, he pays attention to all the details and aspects. All of these factors have led me to learn from and enjoy working alongside him.",
      avatar: "/Hadis.png",
      order: 3
    },
    {
      name: "Yalda Nasirian",
      role: "UX/UI Designer",
      extra: "Reported to Amirhosein directly",
      text: "Amirhosein is a leader who helps others around his grow. He mentored me during our time together by having an open feedback loop for our projects. I've learned so much from working with him; he helped me to become a better professional. He was always reliable and professional, and at stressful times he was a positive influence on all of us.",
      avatar: "/Yalda.png",
      order: 4
    }
  ];
  testimonials.forEach((t, i) => {
    const tRef = doc(collection(db, 'testimonials'));
    batch.set(tRef, t);
  });

  // Settings
  const settingsRef = doc(db, 'settings', 'site');
  batch.set(settingsRef, {
    siteTitle: "Amirhosein Fahimi — Product Designer",
    metaDescription: "Self-taught Product Designer focused on creating premium digital experiences for the next generation of users.",
    keywords: "Product Design, UX Research, Portfolio, Fintech Design",
    ogImage: ""
  });

  await batch.commit();
  console.log('Migration complete.');
}
