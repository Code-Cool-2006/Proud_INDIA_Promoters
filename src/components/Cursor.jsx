
import React, { useEffect, useState, useRef } from 'react';

// You can change this emoji to whatever you like!
// Examples: 🏗️, 👷, 🧱, 🛠️
const CURSOR_EMOJI = '🪄'; 

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
    <div ref={cursorRef} className="emoji-cursor-wrapper">
      <span className={`emoji-cursor-inner ${isHovering ? 'hover' : ''}`}>
        {CURSOR_EMOJI}
      </span>
    </div>
  );
};

export default Cursor;
