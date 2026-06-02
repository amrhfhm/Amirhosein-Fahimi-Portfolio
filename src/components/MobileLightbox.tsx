import { useState, useEffect, useRef, TouchEvent } from "react";

export function MobileLightbox() {
  const [isOpen, setIsOpen] = useState(false);
  const [src, setSrc] = useState("");
  const [caption, setCaption] = useState("");

  const [scale, setScale] = useState(1);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isDragging, setIsDragging] = useState(false);

  // Refs for tracking touch gestures
  const startDistance = useRef<number | null>(null);
  const startScale = useRef<number>(1);
  const touchStartPos = useRef<{ x: number; y: number }>({ x: 0, y: 0 });
  const imgPosRef = useRef<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    const handleImageClick = (e: MouseEvent) => {
      // Only target screens < 1024px (mobile / tablet view)
      if (window.innerWidth >= 1024) return;

      const target = e.target as HTMLElement;
      if (target.tagName === "IMG") {
        const img = target as HTMLImageElement;

        // Skip small layout icons or decor images if any
        if (img.classList.contains("no-lightbox") || img.naturalWidth < 120) {
          return;
        }

        // Search for nearest sibling caption text
        let foundCaption = img.alt || "";
        const parent = img.parentElement;
        if (parent) {
          // Look for any <span> or sibling representing caption text typical in these mockups
          const textSibling = parent.querySelector("span, p");
          if (textSibling && textSibling !== img && textSibling.textContent) {
            foundCaption = textSibling.textContent.trim();
          }
        }

        // Set state and show lightbox
        setSrc(img.src);
        setCaption(foundCaption);
        setIsOpen(true);
        setScale(1);
        setPosition({ x: 0, y: 0 });
      }
    };

    document.addEventListener("click", handleImageClick);
    return () => document.removeEventListener("click", handleImageClick);
  }, []);

  const handleTouchStart = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2) {
      // Initiate pinch zoom
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const dist = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
      startDistance.current = dist;
      startScale.current = scale;
    } else if (e.touches.length === 1 && scale > 1) {
      // Initiate drag/pan when zoomed
      setIsDragging(true);
      touchStartPos.current = { x: e.touches[0].clientX, y: e.touches[0].clientY };
      imgPosRef.current = { ...position };
    }
  };

  const handleTouchMove = (e: TouchEvent<HTMLDivElement>) => {
    if (e.touches.length === 2 && startDistance.current !== null) {
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const dist = Math.hypot(touch2.clientX - touch1.clientX, touch2.clientY - touch1.clientY);
      const factor = dist / startDistance.current;
      const newScale = Math.min(Math.max(startScale.current * factor, 1), 5);
      setScale(newScale);
    } else if (e.touches.length === 1 && isDragging && scale > 1) {
      const deltaX = e.touches[0].clientX - touchStartPos.current.x;
      const deltaY = e.touches[0].clientY - touchStartPos.current.y;
      
      // Keep boundaries relatively aligned
      setPosition({
        x: imgPosRef.current.x + deltaX,
        y: imgPosRef.current.y + deltaY
      });
    }
  };

  const handleTouchEnd = () => {
    startDistance.current = null;
    setIsDragging(false);
  };

  const handleDoubleTap = () => {
    if (scale > 1) {
      setScale(1);
      setPosition({ x: 0, y: 0 });
    } else {
      setScale(2.5);
    }
  };

  if (!isOpen) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex flex-col justify-between bg-black/95 text-white backdrop-blur-sm"
      style={{ touchAction: "none" }}
    >
      {/* Top bar with close button */}
      <div className="flex justify-end p-4 z-50">
        <button 
          onClick={() => setIsOpen(false)}
          className="p-3 text-white/80 hover:text-white bg-white/10 rounded-full active:bg-white/20 transition-all font-mono text-sm tracking-widest px-5 uppercase"
        >
          Close
        </button>
      </div>

      {/* Main Image Viewport */}
      <div 
        className="flex-grow flex items-center justify-center p-2 relative overflow-hidden"
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
        onDoubleClick={handleDoubleTap}
      >
        <img
          src={src}
          alt={caption}
          className="max-h-[75vh] max-w-full object-contain transition-transform duration-75 select-none"
          style={{
            transform: `translate(${position.x}px, ${position.y}px) scale(${scale})`,
            pointerEvents: "none"
          }}
          referrerPolicy="no-referrer"
        />
        
        {scale > 1 && (
          <button
            onClick={() => {
              setScale(1);
              setPosition({ x: 0, y: 0 });
            }}
            className="absolute bottom-4 right-4 bg-white/10 px-3 py-1.5 rounded text-xs select-none backdrop-blur-md"
          >
            Reset Zoom
          </button>
        )}
      </div>

      {/* Bottom bar with caption */}
      <div className="p-6 bg-gradient-to-t from-black to-black/80 text-center max-h-[25vh] overflow-y-auto safe-bottom z-50 pb-10">
        {caption ? (
          <span className="text-sm font-sans font-normal text-white/90 leading-relaxed block max-w-lg mx-auto">
            {caption}
          </span>
        ) : (
          <span className="text-xs font-sans font-light text-white/50 block">
            Tap twice or pinch to zoom
          </span>
        )}
      </div>
    </div>
  );
}
