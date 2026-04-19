'use client';

import React, { useEffect, useState } from 'react';

const ReadingProgress: React.FC = () => {
  const [progress, setProgress] = useState(0);

  useEffect((): (() => void) => {
    const updateProgress = (): void => {
      const scrollTop = window.scrollY;
      const docHeight = document.body.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };

    window.addEventListener('scroll', updateProgress, { passive: true });
    return () => window.removeEventListener('scroll', updateProgress);
  }, []);

  return (
    <div
      className="fixed top-0 left-0 h-[2px] z-50 pointer-events-none"
      style={{
        width: `${progress}%`,
        background: '#00ff99',
        transition: 'width 0.1s linear',
      }}
    />
  );
};

export default ReadingProgress;
