import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "./firebase";

export type EventType = "project_view" | "contact_click" | "page_view" | "cta_click" | "scroll_depth";

interface EventData {
  projectId?: string;
  projectTitle?: string;
  page?: string;
  [key: string]: any;
}

export const logEvent = async (type: EventType, data: EventData = {}) => {
  const device = /Mobi|Android/i.test(navigator.userAgent) ? "mobile" : "desktop";
  
  const eventDetails = { ...data };

  if (type === "page_view") {
    const ref = document.referrer;
    let referrer = "direct";
    if (ref.includes("linkedin.com")) referrer = "linkedin";
    else if (ref.includes("google.com")) referrer = "google";
    else if (ref) referrer = "other";
    eventDetails.referrer = referrer;
  }
  
  try {
    await addDoc(collection(db, "analytics"), {
      type,
      ...eventDetails,
      device,
      timestamp: serverTimestamp(),
    });
  } catch (error) {
    // Silently fail for analytics to not disturb user experience
    console.error("Analytics Error:", error instanceof Error ? error.message : String(error));
  }
};
