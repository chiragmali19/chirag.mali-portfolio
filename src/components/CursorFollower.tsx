import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CursorFollower: React.FC = () => {
    const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
    const [isHovering, setIsHovering] = useState(false);
    const [isClicking, setIsClicking] = useState(false);

    useEffect(() => {
        const updateMousePosition = (e: MouseEvent) => {
            setMousePosition({ x: e.clientX, y: e.clientY });
        };

        const handleMouseDown = () => setIsClicking(true);
        const handleMouseUp = () => setIsClicking(false);

        const handleMouseEnter = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches('button, a, [role="button"], .magnetic-area')) {
                setIsHovering(true);
            }
        };

        const handleMouseLeave = (e: MouseEvent) => {
            const target = e.target as HTMLElement;
            if (target.matches('button, a, [role="button"], .magnetic-area')) {
                setIsHovering(false);
            }
        };

        document.addEventListener('mousemove', updateMousePosition);
        document.addEventListener('mousedown', handleMouseDown);
        document.addEventListener('mouseup', handleMouseUp);
        document.addEventListener('mouseenter', handleMouseEnter, true);
        document.addEventListener('mouseleave', handleMouseLeave, true);

        return () => {
            document.removeEventListener('mousemove', updateMousePosition);
            document.removeEventListener('mousedown', handleMouseDown);
            document.removeEventListener('mouseup', handleMouseUp);
            document.removeEventListener('mouseenter', handleMouseEnter, true);
            document.removeEventListener('mouseleave', handleMouseLeave, true);
        };
    }, []);

    return (
        <>
            {/* Main Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-4 h-4 pointer-events-none z-[9999] mix-blend-difference"
                animate={{
                    x: mousePosition.x - 8,
                    y: mousePosition.y - 8,
                    scale: isClicking ? 0.8 : isHovering ? 1.5 : 1,
                }}
                transition={{
                    type: "spring",
                    stiffness: 500,
                    damping: 28,
                    mass: 0.5,
                }}
            >
                <div className="w-full h-full bg-white rounded-full" />
            </motion.div>

            {/* Trailing Cursor */}
            <motion.div
                className="fixed top-0 left-0 w-8 h-8 pointer-events-none z-[9998] border-2 border-white mix-blend-difference rounded-full"
                animate={{
                    x: mousePosition.x - 16,
                    y: mousePosition.y - 16,
                    scale: isHovering ? 2 : 1,
                    opacity: isClicking ? 0.5 : 0.3,
                }}
                transition={{
                    type: "spring",
                    stiffness: 150,
                    damping: 15,
                    mass: 0.8,
                }}
            />
        </>
    );
};

export default CursorFollower;
