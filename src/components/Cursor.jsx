
import React, { useEffect, useState, useRef } from 'react';
import cursorIcon from '../assets/cursor.svg';

const Cursor = () => {
  const cursorRef = useRef(null);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    const cursor = cursorRef.current;
    
    // Check if device is touch-enabled, if so, don't show custom cursor
    if (window.matchMedia("(pointer: coarse)").matches) {
      if(cursor) cursor.style.display = 'none';
      return;
    }

    const moveCursor = (e) => {
      const { clientX, clientY } = e;
      if (cursor) {
        // Direct transform update for performance
        // Note: We're not offsetting by half here because the SVG usually "points" with its top-left corner.
        // If the SVG is centered (like a circle), we might want to offset.
        // For a pointer/arrow, top-left (0,0) is usually the hotspot.
        // Let's assume the user's SVG might be an arrow. If it's a shape, we might need centering.
        // I'll add a small adjustment or just default to 0,0 for now.
        // Actually, for the previous 'emoji' we centered it. For a pure custom cursor, usually the tip is top-left.
        // Let's stick to (clientX, clientY) directly for the wrapper top-left.
        cursor.style.transform = `translate3d(${clientX}px, ${clientY}px, 0)`;
      }
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      // Check if target is clickable/interactive
      if (
        target.tagName.toLowerCase() === 'a' ||
        target.tagName.toLowerCase() === 'button' ||
        target.closest('a') ||
        target.closest('button') ||
        target.classList.contains('clickable') ||
        window.getComputedStyle(target).cursor === 'pointer'
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <div ref={cursorRef} className="custom-cursor-wrapper">
      <img 
        src={cursorIcon} 
        alt="Custom Cursor" 
        className={`custom-cursor-img ${isHovering ? 'hover' : ''}`}
      />
    </div>
  );
};

export default Cursor;
