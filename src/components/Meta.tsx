import { useEffect } from "react";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../lib/firebase";

export default function Meta() {
  useEffect(() => {
    const unsub = onSnapshot(doc(db, "settings", "site"), (snap) => {
      if (snap.exists()) {
        const data = snap.data();
        if (data.siteTitle) {
          document.title = data.siteTitle;
        } else {
          document.title = "Amirhosein Fahimi Portfolio";
        }
        
        // Update description meta tag
        let metaDesc = document.querySelector('meta[name="description"]');
        if (!metaDesc) {
          metaDesc = document.createElement('meta');
          metaDesc.setAttribute('name', 'description');
          document.head.appendChild(metaDesc);
        }
        if (data.metaDescription) metaDesc.setAttribute('content', data.metaDescription);

        // Favicon override disabled per user request
        /*
        if (data.favicon) {
           let link: HTMLLinkElement | null = document.querySelector("link[rel*='icon']");
           if (!link) {
              link = document.createElement('link');
              link.rel = 'icon';
              document.head.appendChild(link);
           }
           link.href = data.favicon;
        }
        */
      }
    });

    return () => unsub();
  }, []);

  return null;
}
