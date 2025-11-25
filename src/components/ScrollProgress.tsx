import React, { useEffect, useState } from 'react';

const ScrollProgress: React.FC = () => {
  const [scrollProgress, setScrollProgress] = useState(0);
 
  useEffect(() => {
    const updateScrollProgress = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = scrollTop / docHeight;
      setScrollProgress(progress);
    };

    window.addEventListener('scroll', updateScrollProgress);
    return () => window.removeEventListener('scroll', updateScrollProgress);
  }, []);

  return (
    <div className="fixed top-0 left-0 w-full h-1 z-50 bg-black/20">
      <div
        className="h-full bg-gradient-to-r from-teal-500 via-cyan-500 to-emerald-500 transition-all duration-300 ease-out"
        style={{
          width: `${scrollProgress * 100}%`,
          boxShadow: '0 0 10px rgba(20, 184, 166, 0.5)'
        }}
      />
    </div>
  );
};

export default ScrollProgress;