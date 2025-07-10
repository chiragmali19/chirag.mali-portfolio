import React, { useEffect, useRef } from 'react'; 

const AnimatedBackground: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const elementsRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const elements = elementsRef.current;
    let animationId: number;

    const animate = () => {
      elements.forEach((element, index) => {
        if (!element) return;
        
        const time = Date.now() * 0.001;
        const speed = 0.3 + index * 0.05;
        const amplitude = 20 + index * 5;
        
        const x = Math.sin(time * speed) * amplitude;
        const y = Math.cos(time * speed * 0.8) * amplitude;
        const rotation = time * speed * 10;
        
        element.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg)`;
      });
      
      animationId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      if (animationId) {
        cancelAnimationFrame(animationId);
      }
    };
  }, []);

  const addElementRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      elementsRef.current[index] = el;
    }
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Floating Code Blocks */}
      <div
        ref={(el) => addElementRef(el, 0)}
        className="absolute top-20 left-16 w-32 h-20 bg-gray-100/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200/10 dark:border-gray-700/10 rounded-lg"
      >
        <div className="p-3 space-y-1">
          <div className="h-2 bg-blue-400/30 rounded w-3/4"></div>
          <div className="h-2 bg-green-400/30 rounded w-1/2"></div>
          <div className="h-2 bg-purple-400/30 rounded w-2/3"></div>
        </div>
      </div>

      <div
        ref={(el) => addElementRef(el, 1)}
        className="absolute top-1/3 right-20 w-28 h-16 bg-gray-100/5 dark:bg-white/5 backdrop-blur-sm border border-gray-200/10 dark:border-gray-700/10 rounded-lg"
      >
        <div className="p-2 space-y-1">
          <div className="h-1.5 bg-red-400/30 rounded w-full"></div>
          <div className="h-1.5 bg-yellow-400/30 rounded w-3/4"></div>
          <div className="h-1.5 bg-cyan-400/30 rounded w-1/2"></div>
        </div>
      </div>

      {/* Geometric Shapes */}
      <div
        ref={(el) => addElementRef(el, 2)}
        className="absolute bottom-1/4 left-1/4 w-16 h-16 border-2 border-purple-400/20 dark:border-purple-300/20"
        style={{ 
          background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)'
        }}
      />

      <div
        ref={(el) => addElementRef(el, 3)}
        className="absolute top-1/2 left-1/2 w-12 h-12 border border-cyan-400/25 dark:border-cyan-300/25 rounded-full"
        style={{ 
          background: 'radial-gradient(circle, rgba(6, 182, 212, 0.2), transparent)'
        }}
      />

      {/* Stylized Leaves/Plants */}
      <div
        ref={(el) => addElementRef(el, 4)}
        className="absolute bottom-32 right-1/3 w-20 h-32"
      >
        <svg viewBox="0 0 80 128" className="w-full h-full opacity-20 dark:opacity-10">
          <path
            d="M40 10 C20 30, 20 60, 40 80 C60 60, 60 30, 40 10 Z"
            fill="currentColor"
            className="text-green-500"
          />
          <path
            d="M40 80 L40 120"
            stroke="currentColor"
            strokeWidth="2"
            className="text-green-600"
          />
          <path
            d="M30 50 Q40 45, 50 50"
            stroke="currentColor"
            strokeWidth="1"
            className="text-green-400"
            fill="none"
          />
        </svg>
      </div>

      <div
        ref={(el) => addElementRef(el, 5)}
        className="absolute top-3/4 left-20 w-16 h-24"
      >
        <svg viewBox="0 0 64 96" className="w-full h-full opacity-15 dark:opacity-8">
          <path
            d="M32 8 C18 20, 18 40, 32 52 C46 40, 46 20, 32 8 Z"
            fill="currentColor"
            className="text-emerald-500"
          />
          <path
            d="M32 52 L32 88"
            stroke="currentColor"
            strokeWidth="2"
            className="text-emerald-600"
          />
        </svg>
      </div>

      {/* Terminal Windows */}
      <div
        ref={(el) => addElementRef(el, 6)}
        className="absolute top-40 right-32 w-36 h-24 bg-gray-900/10 dark:bg-gray-100/5 backdrop-blur-sm border border-gray-200/10 dark:border-gray-700/10 rounded-lg"
      >
        <div className="flex items-center space-x-1 p-2 border-b border-gray-200/10 dark:border-gray-700/10">
          <div className="w-2 h-2 bg-red-400/50 rounded-full"></div>
          <div className="w-2 h-2 bg-yellow-400/50 rounded-full"></div>
          <div className="w-2 h-2 bg-green-400/50 rounded-full"></div>
        </div>
        <div className="p-2 space-y-1">
          <div className="h-1.5 bg-green-400/40 rounded w-1/3"></div>
          <div className="h-1.5 bg-blue-400/40 rounded w-2/3"></div>
        </div>
      </div>

      {/* Browser Windows */}
      <div
        ref={(el) => addElementRef(el, 7)}
        className="absolute bottom-40 left-32 w-40 h-28 bg-white/5 dark:bg-black/5 backdrop-blur-sm border border-gray-200/10 dark:border-gray-700/10 rounded-lg"
      >
        <div className="flex items-center justify-between p-2 border-b border-gray-200/10 dark:border-gray-700/10">
          <div className="flex space-x-1">
            <div className="w-2 h-2 bg-red-400/50 rounded-full"></div>
            <div className="w-2 h-2 bg-yellow-400/50 rounded-full"></div>
            <div className="w-2 h-2 bg-green-400/50 rounded-full"></div>
          </div>
          <div className="h-1.5 bg-gray-400/30 rounded w-16"></div>
        </div>
        <div className="p-2 space-y-1">
          <div className="h-2 bg-purple-400/30 rounded w-full"></div>
          <div className="h-1.5 bg-gray-400/20 rounded w-3/4"></div>
          <div className="h-1.5 bg-gray-400/20 rounded w-1/2"></div>
        </div>
      </div>

      {/* Abstract Shapes */}
      <div
        ref={(el) => addElementRef(el, 8)}
        className="absolute top-60 left-1/3 w-8 h-8 border border-pink-400/30 dark:border-pink-300/30 rounded-lg rotate-45"
        style={{ 
          background: 'linear-gradient(135deg, rgba(236, 72, 153, 0.1), transparent)'
        }}
      />

      <div
        ref={(el) => addElementRef(el, 9)}
        className="absolute bottom-60 right-1/4 w-6 h-6 bg-gradient-to-br from-violet-400/20 to-indigo-400/20 rounded-full"
      />
    </div>
  );
};

export default AnimatedBackground;