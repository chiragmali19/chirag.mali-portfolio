import React, { useEffect, useRef, useState } from 'react';
import {
  ArrowDown, Github, Linkedin, Mail, Download
} from 'lucide-react';
import { motion, useScroll, useTransform, useSpring } from 'framer-motion';
import { MagneticButton } from './ScrollAnimations';
import profile from '../assets/profile.jpeg';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const { scrollYProgress } = useScroll({ target: heroRef, offset: ["start start", "end start"] });
  const smoothProgress = useSpring(scrollYProgress, { stiffness: 100, damping: 30, restDelta: 0.001 });
  const y = useTransform(smoothProgress, [0, 1], [0, -200]);
  const opacity = useTransform(smoothProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(smoothProgress, [0, 1], [1, 0.8]);

  const width = window.innerWidth;
  console.log(width, 11111);


  useEffect(() => {
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

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-auto transform-3d bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:via-teal-900/20 dark:to-slate-900 text-gray-900 dark:text-white
    px-2 pt-6 pb-8 sm:pt-12 sm:pb-16"
      ref={heroRef}
    >
      {/* Mesh & Grid Backgrounds */}
      <div className="absolute inset-0 mesh-bg-animated opacity-30 dark:opacity-20"></div>
      <div className="absolute inset-0 bg-[linear-gradient(rgba(139,92,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(139,92,246,0.05)_1px,transparent_1px)] bg-[size:60px_60px] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_110%)]"></div>

      {/* Floating Elements */}
      <div className="absolute inset-0 pointer-events-none z-0">
        {/* {floatingElements.map((element, index) => (
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
              <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">{element.label}</span>
            </div>
          </motion.div>
        ))} */}

        {/* Geometric shapes */}
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
          style={{ transform: `translate(${mousePosition.x * 20}px, ${mousePosition.y * 20}px)` }}
        >
          <div className="w-full h-full bg-gradient-to-r from-teal-400/20 to-cyan-400/20 rounded-3xl backdrop-blur-sm border border-teal-300/30 animate-morphing"></div>
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
          style={{ transform: `translate(${mousePosition.x * -15}px, ${mousePosition.y * -15}px)` }}
        >
          <div className="w-full h-full bg-gradient-to-r from-blue-400/20 to-cyan-400/20 clip-hexagon backdrop-blur-sm"></div>
        </motion.div>
      </div>

      {/* Main Content with Profile Image & Responsive Layout */}
      <motion.div
        className="relative z-10 max-w-4xl mx-auto px-4 sm:px-8 py-2"
        style={{ y, opacity, scale }}
      >
        {/* Profile image above name on mobile, left on desktop */}
        <div className="flex flex-col sm:flex-row items-center sm:items-start justify-center gap-7 lg:gap-10 mb-4 mt-5">
          {/* Profile Image */}
          <motion.img
            src={profile}
            alt="Chirag Mali Profile"
            className="w-28 h-28 lg:w-36 lg:h-36 rounded-full object-cover shadow-lg border-4 border-teal-400 bg-white"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.2, delay: 0.2 }}
            style={{ zIndex: 5 }}
          />
          {/* Name, Tagline, Description */}
          <div className="flex flex-col items-center sm:items-start gap-1 sm:gap-3">
            <div className="pb-4">
              <h1 
                className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold gradient-text mb-1 text-center sm:text-left overflow-visible"
                style={{ lineHeight: 1.2, paddingBottom: '0.1em' }}
              >
                Chirag Mali
              </h1>
            </div>

            <div className="text-base sm:text-lg lg:text-xl xl:text-2xl font-semibold text-gray-600 dark:text-gray-300 mb-1 text-center sm:text-left">
              Software Developer &{' '}
              <span className="text-gray-600 dark:text-gray-300 font-bold ml-2">
                AI Enthusiast
              </span>
            </div>
            <p className="text-xs lg:text-sm text-gray-500 dark:text-gray-400 mt-3 text-center sm:text-left">
              Professional Software Developer,
              crafting scalable mobile experiences with{' '}
              <span className="font-bold text-orange-600 dark:text-orange-400">Firebase</span>,{' '}
              <span className="font-bold text-green-600 dark:text-green-400">GetX</span>, and{' '}
              <span className="font-bold text-teal-600 dark:text-teal-400">AI Integration</span>.<br />
              Building production-ready apps with 100K+ installs ✨
            </p>
          </div>
        </div>

        {/* Stats Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-5 mb-6"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.6 }}
        >
          {[
            { number: '1+', label: 'Years Experience', icon: '💼', color: 'from-blue-500 to-cyan-500' },
            { number: '15+', label: 'Projects Built', icon: '🚀', color: 'from-teal-500 to-cyan-500' },
            { number: '5+', label: 'Apps Published', icon: '📱', color: 'from-green-500 to-emerald-500' }
          ].map((stat, index) => (
            <motion.div
              key={index}
              className="neo-panel p-3 lg:p-4 glass-panel text-center group cursor-pointer transform-3d min-h-[100px] lg:min-h-[120px] flex flex-col justify-center"
              whileHover={{ scale: 1.05, rotateY: 3, rotateX: 3 }}
              whileTap={{ scale: 0.98 }}
              initial={{ opacity: 0, y: 30, rotateX: -15 }}
              animate={{ opacity: 1, y: 0, rotateX: 0 }}
              transition={{ duration: 0.6, delay: 1.8 + index * 0.1 }}
            >
              <div className="text-xl lg:text-2xl mb-1 group-hover:scale-110">{stat.icon}</div>
              <div className={`text-lg lg:text-xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-1`}>
                {stat.number}
              </div>
              <div className="text-xs text-gray-600 dark:text-gray-400 font-semibold">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>

        {/* Social Links */}
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

        {/* CTA Buttons */}
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
              href="https://docs.google.com/document/d/1s4aPSXXngcah5egCKMdnUgu9ly-ZfLjXsUTIhsxMBts/edit?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center"
            >
              <Download size={22} className="mr-3 group-hover:translate-y-1 transition-transform duration-300" />
              Download Resume
            </a>
          </MagneticButton>
        </motion.div>

        {/* Scroll Indicator */}
        {width >= 500 && (<motion.div
          className="absolute top-[110%] left-[50%] transform -translate-x-1/2 -translate-y-1/2"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
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
              <ArrowDown size={24} className="text-teal-600 dark:text-teal-300 group-hover:text-teal-700 dark:group-hover:text-white transition-colors duration-300" />
            </motion.div>
          </MagneticButton>
        </motion.div>)}
      </motion.div>
    </section>
  );
};

export default Hero;
