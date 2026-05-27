import {StrictMode} from 'react';
import {createRoot} from 'react-dom/client';
import App from './App.tsx';
import './index.css';

// Suppression of expected environment notices
if (typeof window !== 'undefined') {
  // Safety JSON.stringify override to prevent circular structure serialization crashes
  (function() {
    const originalStringify = JSON.stringify;
    JSON.stringify = function(value: any, replacer?: any, space?: any) {
      const seen = new WeakSet();
      let safeReplacer = function(this: any, key: string, val: any): any {
        if (typeof val === 'object' && val !== null) {
          if (seen.has(val)) {
            return "[Circular]";
          }
          seen.add(val);
        }
        if (typeof replacer === 'function') {
          return replacer.call(this, key, val);
        }
        return val;
      };

      if (Array.isArray(replacer)) {
        const whitelist = replacer;
        safeReplacer = function(this: any, key: string, val: any): any {
          if (typeof val === 'object' && val !== null) {
            if (seen.has(val)) {
              return "[Circular]";
            }
            seen.add(val);
          }
          if (key !== "" && whitelist.indexOf(key) === -1) {
            return undefined;
          }
          return val;
        };
      }

      try {
        return originalStringify(value, safeReplacer, space);
      } catch (err) {
        return "[Circular/Error]";
      }
    };
  })();

  window.addEventListener('unhandledrejection', (event) => {
    if (event.reason && (
      event.reason.message?.includes('WebSocket') || 
      event.reason.message?.includes('vite')
    )) {
      event.preventDefault();
      return;
    }

    // Safety check against circular error structures (e.g. from FirestoreError)
    if (event.reason && typeof event.reason === 'object') {
      try {
        JSON.stringify(event.reason);
      } catch (e) {
        event.preventDefault();
        const safeError = {
          message: event.reason.message || String(event.reason),
          name: event.reason.name || "Error",
          code: event.reason.code,
          stack: event.reason.stack
        };
        console.error("Unhandled Rejection (Safe Log):", safeError);
      }
    }
  });

  window.addEventListener('error', (event) => {
    if (event.error && typeof event.error === 'object') {
      try {
        JSON.stringify(event.error);
      } catch (e) {
        event.preventDefault();
        const safeError = {
          message: event.error.message || event.message || String(event.error),
          name: event.error.name || "Error",
          code: event.error.code,
          stack: event.error.stack
        };
        console.error("Unhandled Error (Safe Log):", safeError);
      }
    }
  });
}


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
);
