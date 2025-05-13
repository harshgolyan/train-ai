'use client';

import { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

export default function CursorFollower() {
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const [hovering, setHovering] = useState(false);

  const springConfig = { damping: 25, stiffness: 300 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  useEffect(() => {
    const isTouchDevice = 'ontouchstart' in window;
    if (isTouchDevice) return;

    const moveCursor = (e: MouseEvent) => {
      const { clientX, clientY } = e;
      x.set(clientX);
      y.set(clientY);
    };

    const handleHoverStart = () => setHovering(true);
    const handleHoverEnd = () => setHovering(false);

    window.addEventListener('mousemove', moveCursor);
    document.querySelectorAll('a, button').forEach((el) => {
      el.addEventListener('mouseenter', handleHoverStart);
      el.addEventListener('mouseleave', handleHoverEnd);
    });

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      document.querySelectorAll('a, button').forEach((el) => {
        el.removeEventListener('mouseenter', handleHoverStart);
        el.removeEventListener('mouseleave', handleHoverEnd);
      });
    };
  }, [x, y]);

  return (
    <motion.div
      className="fixed top-0 left-0 pointer-events-none z-[9999] rounded-full transition-all duration-300 ease-out"
      style={{
        x: springX,
        y: springY,
        width: hovering ? '2.5rem' : '5rem', 
        height: hovering ? '2.5rem' : '5rem',
        backgroundColor: hovering ? 'white' : 'transparent',
        boxShadow: hovering
          ? '0 0 10px 5px rgba(255, 165, 0, 0.7)'
          : '0 0 20px 0px rgba(255, 165, 0, 0.4)',
        backgroundSize: '100% 100%',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        borderRadius: '50%',
      }}
    />
  );
}
