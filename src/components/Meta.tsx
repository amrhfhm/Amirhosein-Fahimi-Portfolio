import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Meta() {
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "settings", "seo"), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (data.title) document.title = data.title;
        
        // Update description meta tag
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
        }
        if (data.description) metaDesc.setAttribute('content', data.description);

        // Update favicon if provided
        if (data.favicon) {
           let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
           if (!link) {
              link = document.createElement('link');
              link.rel = 'icon';
              document.head.appendChild(link);
           }
           link.href = data.favicon;
        }
      }
    });

    return () => unsub();
  }, []);

  return null;
}
