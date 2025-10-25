import React, { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';

interface ScrollAnimationProps {
    children: React.ReactNode;
    className?: string;
    animation?: 'fadeUp' | 'slideLeft' | 'slideRight' | 'scale' | 'rotate' | 'parallax';
    delay?: number;
    duration?: number;
    offset?: number;
}

const ScrollAnimation: React.FC<ScrollAnimationProps> = ({
    children,
    className = '',
    animation = 'fadeUp',
    delay = 0,
    duration = 0.8,
    offset = 0.1
}) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: [`start end`, `end start`]
    });

    const smoothProgress = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    const getAnimationProps = () => {
        switch (animation) {
            case 'fadeUp':
                return {
                    y: useTransform(smoothProgress, [0, 1], [100, -100]),
                    opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
                };
            case 'slideLeft':
                return {
                    x: useTransform(smoothProgress, [0, 1], [100, -100]),
                    opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
                };
            case 'slideRight':
                return {
                    x: useTransform(smoothProgress, [0, 1], [-100, 100]),
                    opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
                };
            case 'scale':
                return {
                    scale: useTransform(smoothProgress, [0, 0.5, 1], [0.8, 1.1, 0.8]),
                    opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
                };
            case 'rotate':
                return {
                    rotate: useTransform(smoothProgress, [0, 1], [0, 360]),
                    opacity: useTransform(smoothProgress, [0, 0.3, 0.7, 1], [0, 1, 1, 0])
                };
            case 'parallax':
                return {
                    y: useTransform(smoothProgress, [0, 1], [0, -200]),
                };
            default:
                return {};
        }
    };

    return (
        <motion.div
            ref={ref}
            className={className}
            style={getAnimationProps()}
            initial={{ opacity: animation === 'parallax' ? 1 : 0 }}
            transition={{
                duration,
                delay,
                ease: [0.4, 0, 0.2, 1]
            }}
        >
            {children}
        </motion.div>
    );
};

// Parallax Container Component
export const ParallaxContainer: React.FC<{
    children: React.ReactNode;
    className?: string;
    speed?: number;
}> = ({ children, className = '', speed = 0.5 }) => {
    const ref = useRef<HTMLDivElement>(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [0, -100 * speed]);

    return (
        <div ref={ref} className={`parallax-container ${className}`}>
            <motion.div style={{ y }} className="parallax-element">
                {children}
            </motion.div>
        </div>
    );
};

// Magnetic Button Component
export const MagneticButton: React.FC<{
    children: React.ReactNode;
    className?: string;
    strength?: number;
    onClick?: () => void;
}> = ({ children, className = '', strength = 0.3, onClick }) => {
    const ref = useRef<HTMLButtonElement>(null);

    useEffect(() => {
        const button = ref.current;
        if (!button) return;

        const handleMouseMove = (e: MouseEvent) => {
            const rect = button.getBoundingClientRect();
            const x = e.clientX - rect.left - rect.width / 2;
            const y = e.clientY - rect.top - rect.height / 2;

            button.style.transform = `translate(${x * strength}px, ${y * strength}px)`;
        };

        const handleMouseLeave = () => {
            button.style.transform = 'translate(0px, 0px)';
        };

        button.addEventListener('mousemove', handleMouseMove);
        button.addEventListener('mouseleave', handleMouseLeave);

        return () => {
            button.removeEventListener('mousemove', handleMouseMove);
            button.removeEventListener('mouseleave', handleMouseLeave);
        };
    }, [strength]);

    return (
        <button
            ref={ref}
            className={`magnetic-area transition-transform duration-200 ease-out ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

// Text Reveal Animation
export const TextReveal: React.FC<{
    children: string;
    className?: string;
    delay?: number;
}> = ({ children, className = '', delay = 0 }) => {
    const words = children.split(' ');

    return (
        <div className={className}>
            {words.map((word, index) => (
                <motion.span
                    key={index}
                    className="inline-block mr-2"
                    initial={{ opacity: 0, y: 50 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{
                        duration: 0.6,
                        delay: delay + index * 0.1,
                        ease: [0.4, 0, 0.2, 1]
                    }}
                >
                    {word}
                </motion.span>
            ))}
        </div>
    );
};

// Stagger Container
export const StaggerContainer: React.FC<{
    children: React.ReactNode;
    className?: string;
    staggerDelay?: number;
}> = ({ children, className = '', staggerDelay = 0.1 }) => {
    return (
        <motion.div
            className={className}
            initial="hidden"
            animate="visible"
            variants={{
                hidden: { opacity: 0 },
                visible: {
                    opacity: 1,
                    transition: {
                        staggerChildren: staggerDelay,
                        delayChildren: 0.2
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
};

// Stagger Item
export const StaggerItem: React.FC<{
    children: React.ReactNode;
    className?: string;
}> = ({ children, className = '' }) => {
    return (
        <motion.div
            className={className}
            variants={{
                hidden: { opacity: 0, y: 30 },
                visible: {
                    opacity: 1,
                    y: 0,
                    transition: {
                        type: 'spring',
                        stiffness: 100,
                        damping: 20
                    }
                }
            }}
        >
            {children}
        </motion.div>
    );
};

export default ScrollAnimation;
