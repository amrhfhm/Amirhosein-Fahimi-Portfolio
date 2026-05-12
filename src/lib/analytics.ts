import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export type EventType = "project_view" | "contact_click" | "page_view";

interface EventData {
  projectId?: string;
  projectTitle?: string;
  page?: string;
  [key: string]: any;
}

export const logEvent = async (type: EventType, data: EventData = {}) => {
  const device = /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop";
  
  try {
    await addDoc(collection(db, "analytics"), {
      type,
      ...data,
      device,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    // Silently fail for analytics to not disturb user experience
    console.error("Analytics Error:", error);
  }
};
