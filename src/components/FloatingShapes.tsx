import React, { useEffect, useRef } from 'react';

const FloatingShapes: React.FC = () => { 
  const containerRef = useRef<HTMLDivElement>(null);
  const shapesRef = useRef<HTMLDivElement[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const shapes = shapesRef.current;
    let animationId: number;

    const animate = () => {
      shapes.forEach((shape, index) => {
        if (!shape) return;
        
        const time = Date.now() * 0.001;
        const speed = 0.5 + index * 0.1;
        const amplitude = 30 + index * 10;
        
        const x = Math.sin(time * speed) * amplitude;
        const y = Math.cos(time * speed * 0.7) * amplitude;
        const rotation = time * speed * 20;
        const scale = 1 + Math.sin(time * speed * 2) * 0.1;
        
        shape.style.transform = `translate(${x}px, ${y}px) rotate(${rotation}deg) scale(${scale})`;
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

  const addShapeRef = (el: HTMLDivElement | null, index: number) => {
    if (el) {
      shapesRef.current[index] = el;
    }
  };

  return (
    <div ref={containerRef} className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
      {/* Geometric shapes */}
      <div
        ref={(el) => addShapeRef(el, 0)}
        className="absolute top-20 left-10 w-20 h-20 border-2 border-purple-400/20 rotate-45"
        style={{ 
          background: 'linear-gradient(45deg, rgba(139, 92, 246, 0.1), rgba(236, 72, 153, 0.1))',
          filter: 'blur(0.5px)'
        }}
      />
      
      <div
        ref={(el) => addShapeRef(el, 1)}
        className="absolute top-1/3 right-16 w-16 h-16 rounded-full border border-pink-400/30"
        style={{ 
          background: 'radial-gradient(circle, rgba(236, 72, 153, 0.2), transparent)',
          filter: 'blur(1px)'
        }}
      />
      
      <div
        ref={(el) => addShapeRef(el, 2)}
        className="absolute bottom-1/4 left-1/4 w-12 h-24 border border-cyan-400/25"
        style={{ 
          background: 'linear-gradient(180deg, rgba(6, 182, 212, 0.1), transparent)',
          clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
          filter: 'blur(0.5px)'
        }}
      />
      
      <div
        ref={(el) => addShapeRef(el, 3)}
        className="absolute top-1/2 left-1/2 w-8 h-8 border border-purple-300/30"
        style={{ 
          background: 'conic-gradient(from 45deg, rgba(139, 92, 246, 0.2), rgba(236, 72, 153, 0.2), rgba(139, 92, 246, 0.2))',
          borderRadius: '30%',
          filter: 'blur(0.5px)'
        }}
      />
      
      <div
        ref={(el) => addShapeRef(el, 4)}
        className="absolute bottom-32 right-1/3 w-14 h-14 border border-violet-400/25"
        style={{ 
          background: 'linear-gradient(225deg, rgba(124, 58, 237, 0.15), transparent)',
          clipPath: 'polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)',
          filter: 'blur(0.5px)'
        }}
      />
      
      <div
        ref={(el) => addShapeRef(el, 5)}
        className="absolute top-3/4 left-16 w-10 h-10 border border-emerald-400/30 rounded-lg"
        style={{ 
          background: 'linear-gradient(135deg, rgba(16, 185, 129, 0.1), transparent)',
          filter: 'blur(0.5px)'
        }}
      />
    </div>
  );
};

export default FloatingShapes;