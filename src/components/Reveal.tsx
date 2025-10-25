import React, { useEffect, useRef, useState } from 'react';

type RevealProps = {
  children: React.ReactNode;
  className?: string;
  delayMs?: number;
  once?: boolean;
};

const Reveal: React.FC<RevealProps> = ({ children, className = '', delayMs = 0, once = true }) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            if (once && element) observer.unobserve(element);
          } else if (!once) {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    observer.observe(element);
    return () => observer.disconnect();
  }, [once]);

  return (
    <div
      ref={ref}
      className={`${className} ${isVisible ? 'animate-fadeInUp' : 'opacity-0'} will-change-transform`}
      style={{ animationDelay: `${delayMs}ms` }}
    >
      {children}
    </div>
  );
};

export default Reveal;


