import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download, Sparkles, Code2, Smartphone, Zap, Cpu, Palette } from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { TextReveal, MagneticButton } from './ScrollAnimations';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  const y = useTransform(smoothProgress, [0, 1], [0, -200]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.8]);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePosition({
          x: (e.clientX - rect.left - rect.width / 2) / rect.width,
          y: (e.clientY - rect.top - rect.height / 2) / rect.height,
        });
      }
    };

    const heroElement = heroRef.current;
    if (heroElement) {
      heroElement.addEventListener('mousemove', handleMouseMove);
      return () => heroElement.removeEventListener('mousemove', handleMouseMove);
    }
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const floatingElements = [
    { icon: Code2, label: 'Flutter Dev', color: 'text-blue-500', delay: 0 },
    { icon: Smartphone, label: '5+ Apps Live', color: 'text-green-500', delay: 0.2 },
    { icon: Sparkles, label: 'AI Integration', color: 'text-purple-500', delay: 0.4 },
    { icon: Zap, label: 'Fast Performance', color: 'text-yellow-500', delay: 0.6 },
    { icon: Cpu, label: 'Modern Tech', color: 'text-red-500', delay: 0.8 },
    { icon: Palette, label: 'UI/UX Design', color: 'text-pink-500', delay: 1.0 },
  ];

  return (
    <section
      id="hero"
      className="relative h-screen flex items-center justify-center overflow-hidden transform-3d"
      ref={heroRef}
    >
      {/* Animated Mesh Background */}
      <div className="absolute inset-0 mesh-bg-animated opacity-30 dark:opacity-20"></div>

      {/* Dynamic Grid Background */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* 3D Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        {floatingElements.map((element, index) => (
          <motion.div
            key={index}
            className="absolute neo-panel p-4 rounded-2xl transform-3d"
            initial={{ opacity: 0, scale: 0.8, rotateX: -15, rotateY: -15 }}
            animate={{
              opacity: 1,
              scale: 1,
              rotateX: 0,
              rotateY: 0,
              y: [0, -20, 0],
              rotateZ: [0, 5, -5, 0]
            }}
            transition={{
              duration: 0.8,
              delay: element.delay,
              y: {
                duration: 4 + index,
                repeat: Infinity,
                ease: "easeInOut"
              },
              rotateZ: {
                duration: 6 + index,
                repeat: Infinity,
                ease: "easeInOut"
              }
            }}
            style={{
              top: `${15 + (index % 3) * 20}%`,
              left: `${5 + (index % 2) * 80 + Math.sin(index) * 8}%`,
              transform: `translate(${mousePosition.x * (8 + index * 1.5)}px, ${mousePosition.y * (8 + index * 1.5)}px) rotateX(${mousePosition.y * 8}deg) rotateY(${mousePosition.x * 8}deg)`,
              zIndex: 1
            }}
          >
            <div className="flex items-center space-x-3">
              <element.icon size={24} className={element.color} />
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
                {element.label}
              </span>
            </div>
          </motion.div>
        ))}

        {/* 3D Geometric Shapes */}
        <motion.div
          className="absolute top-1/4 right-1/4 w-32 h-32 transform-3d"
          animate={{
            rotateX: [0, 360],
            rotateY: [0, 180],
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{
            transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)`
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-3xl backdrop-blur-sm border border-purple-300/30 animate-morphing"></div>
        </motion.div>

        <motion.div
          className="absolute bottom-1/4 left-1/3 w-24 h-24 transform-3d"
          animate={{
            rotateZ: [0, 360],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut"
          }}
          style={{
            transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)`
          }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 clip-hexagon backdrop-blur-sm"></div>
        </motion.div>
      </div>

      {/* Main Content */}
      <motion.div
        className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-2"
        style={{ y, opacity, scale }}
      >
        <div className="space-y-2 lg:space-y-3">
          {/* Status Badge */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative z-20"
          >
            {/* <div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full neo-panel mb-2 shadow-lg">
              <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-base font-semibold text-gray-700 dark:text-gray-300"> */}
                {/* Available for new opportunities */}
              {/* </span>
              <div className="w-2 h-2 bg-purple-500 rounded-full animate-pulse delay-500"></div>
            </div> */}
          </motion.div>

          {/* Main Heading with Advanced Animation */}
          <div className="space-y-1 lg:space-y-2">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 0.4 }}
              className="relative z-10"
            >
              <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold leading-[1] tracking-tight gradient-text mb-1">
                Chirag Mali
              </h1>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.2 }}
              className="relative z-10"
            >
              <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold leading-tight text-gray-600 dark:text-gray-300 mb-1">
                Flutter Developer &
                <motion.span
                  className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 font-bold ml-2"
                  animate={{ backgroundPosition: ['0%', '100%', '0%'] }}
                  transition={{ duration: 3, repeat: Infinity }}
                >
                  AI Enthusiast
                </motion.span>
              </div>
            </motion.div>
          </div>

          {/* Enhanced Description */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.4 }}
          >
            <p className="text-sm lg:text-base text-gray-600 dark:text-gray-300 max-w-2xl mx-auto leading-relaxed mb-1">
              Professional Flutter Developer at{' '}
              <span className="font-bold text-blue-600 dark:text-blue-400">BOSC Tech Labs</span>, crafting scalable mobile experiences with{' '}
              <span className="font-bold text-orange-600 dark:text-orange-400">Firebase</span>,{' '}
              <span className="font-bold text-green-600 dark:text-green-400">GetX</span>, and{' '}
              <span className="font-bold text-purple-600 dark:text-purple-400">AI Integration</span>.
            </p>
            <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400">
              Building production-ready apps with 100K+ installs ✨
            </p>
          </motion.div>

          {/* Enhanced Stats Grid */}
          <motion.div
            className="grid grid-cols-1 sm:grid-cols-3 gap-2 lg:gap-3 mt-2 lg:mt-3 max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 1.6 }}
          >
            {[
              { number: '1+', label: 'Years Experience', icon: '💼', color: 'from-blue-500 to-cyan-500' },
              { number: '15+', label: 'Projects Built', icon: '🚀', color: 'from-purple-500 to-pink-500' },
              { number: '5+', label: 'Apps Published', icon: '📱', color: 'from-green-500 to-emerald-500' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="neo-panel p-3 lg:p-4 text-center group cursor-pointer transform-3d min-h-[100px] lg:min-h-[120px] flex flex-col justify-center"
                whileHover={{
                  scale: 1.05,
                  rotateY: 3,
                  rotateX: 3,
                }}
                whileTap={{ scale: 0.98 }}
                initial={{ opacity: 0, y: 30, rotateX: -15 }}
                animate={{ opacity: 1, y: 0, rotateX: 0 }}
                transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
              >
                <div className="text-xl lg:text-2xl mb-1 group-hover:scale-110 transition-transform duration-300">{stat.icon}</div>
                <div className={`text-lg lg:text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                  {stat.number}
                </div>
                <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </motion.div>

          {/* Enhanced Social Links */}
          <motion.div
            className="flex justify-center space-x-2 lg:space-x-3 mt-2 lg:mt-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.0 }}
          >
            {[
              { icon: Mail, href: 'mailto:malichirag1369@gmail.com', label: 'Email', color: 'hover:text-red-500' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chirag-mali-491b72278/', label: 'LinkedIn', color: 'hover:text-blue-500' },
              { icon: Github, href: 'https://github.com/chiragmali19', label: 'GitHub', color: 'hover:text-gray-700 dark:hover:text-gray-300' }
            ].map((social, index) => (
              <MagneticButton
                key={index}
                className="neo-panel p-2 lg:p-3 rounded-2xl group transform-3d"
                strength={0.2}
              >
                <a
                  href={social.href}
                  target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                  rel="noopener noreferrer"
                  className={`block transition-all duration-300 ${social.color}`}
                  aria-label={social.label}
                >
                  <social.icon size={18} className="group-hover:scale-110 transition-transform duration-300" />
                </a>
              </MagneticButton>
            ))}
          </motion.div>

          {/* Enhanced CTA Buttons */}
          <motion.div
            className="flex flex-col sm:flex-row gap-2 lg:gap-3 justify-center items-center mt-2 lg:mt-3"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.2 }}
          >
            <MagneticButton
              className="btn-primary group transform-3d px-4 py-2 text-xs lg:text-sm font-semibold"
              onClick={() => scrollToSection('projects')}
              strength={0.1}
            >
              <span className="flex items-center justify-center">
                View My Work
                <ArrowDown size={22} className="ml-3 group-hover:translate-y-1 transition-transform duration-300" />
              </span>
            </MagneticButton>

            <MagneticButton
              className="btn-secondary group transform-3d px-4 py-2 text-xs lg:text-sm font-semibold"
              strength={0.1}
            >
              <a
                href="https://drive.google.com/file/d/17qG8mILPpbP55w-eCBSMoGuqhAOgc0mj/view?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center"
              >
                <Download size={22} className="mr-3 group-hover:translate-y-1 transition-transform duration-300" />
                Download Resume
              </a>
            </MagneticButton>
          </motion.div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 transform -translate-x-1/2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.5, duration: 0.8 }}
        >
          <MagneticButton
            className="neo-panel p-4 rounded-full group transform-3d"
            onClick={() => scrollToSection('about')}
            strength={0.15}
          >
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
            >
              <ArrowDown size={24} className="text-purple-600 dark:text-purple-300 group-hover:text-purple-700 dark:group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </MagneticButton>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;