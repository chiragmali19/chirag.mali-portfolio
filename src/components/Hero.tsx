import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.18,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 60, damping: 18 } },
};

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const elements = heroRef.current.querySelectorAll('.parallax-element');
        elements.forEach((element, index) => {
          const speed = (index + 1) * 0.02;
          const x = (e.clientX - window.innerWidth / 2) * speed;
          const y = (e.clientY - window.innerHeight / 2) * speed;
          (element as HTMLElement).style.transform = `translate3d(${x}px, ${y}px, 0) rotateZ(${x * 0.1}deg)`;
        });
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-slate-900 text-gray-900 dark:text-white" ref={heroRef}>
      <div className="absolute inset-0 -z-10 h-full w-full bg-white dark:bg-slate-900 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#334155_1px,transparent_1px)] [background-size:32px_32px]"></div>
      {/* Simplified Floating Elements */}
      <div className="absolute inset-0 -z-10 pointer-events-none">
        <div className="parallax-element absolute top-1/4 left-1/4 w-72 h-72 bg-purple-300/20 dark:bg-purple-500/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="parallax-element absolute bottom-1/4 right-1/4 w-72 h-72 bg-pink-300/20 dark:bg-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      </div>
      {/* Main Content with Framer Motion */}
      <motion.div
        className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pb-28"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div className="space-y-8" variants={containerVariants}>
          <motion.div className="space-y-6" variants={containerVariants}>
            <motion.div variants={itemVariants}>
              <h2 className="text-lg sm:text-xl text-purple-600 dark:text-purple-300 font-light tracking-widest uppercase">
                Flutter Developer
              </h2>
            </motion.div>
            <motion.div variants={itemVariants}>
              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent animate-gradient-x">
                  Chirag Mali
                </span>
              </h1>
            </motion.div>
            <motion.div variants={itemVariants}>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Crafting innovative digital experiences with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 font-semibold">
                  Flutter, Dart, and Firebase
                </span>
                <span className="inline-block w-3 h-6 bg-purple-600 dark:bg-purple-400 ml-2 animate-pulse"></span>
              </p>
            </motion.div>
          </motion.div>
          {/* Enhanced Stats */}
          <motion.div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12" variants={containerVariants}>
            {[
              { number: '1+', label: 'Years Learning' },
              { number: '10+', label: 'Projects Completed' },
              { number: '2', label: 'Mobile Apps Published' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                className="glass-panel p-4 rounded-xl hover:scale-105 transition-transform duration-300 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-200/20 dark:border-white/10"
                variants={itemVariants}
                whileHover={{ scale: 1.08 }}
                whileTap={{ scale: 0.97 }}
              >
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </motion.div>
          {/* Social Links */}
          <motion.div className="flex justify-center space-x-6" variants={containerVariants}>
            {[
              { icon: Mail, href: 'mailto:malichirag1369@gmail.com', label: 'Email' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chirag-mali-491b72278/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/chiragmali19', label: 'GitHub' }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/30 dark:border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                aria-label={social.label}
                variants={itemVariants}
                whileHover={{ scale: 1.13, rotate: -6 }}
                whileTap={{ scale: 0.97 }}
              >
                <social.icon size={24} className="text-purple-600 dark:text-purple-300 group-hover:text-purple-700 dark:group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 dark:from-purple-600/20 to-pink-600/10 dark:to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </motion.a>
            ))}
          </motion.div>
          {/* CTA Buttons */}
          <motion.div className="flex flex-col sm:flex-row gap-4 justify-center" variants={containerVariants}>
            <motion.button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                View My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
            <motion.a
              href="https://drive.google.com/file/d/17qG8mILPpbP55w-eCBSMoGuqhAOgc0mj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-gray-200/30 dark:border-purple-500/30 rounded-full font-semibold text-gray-900 dark:text-white hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10 flex items-center justify-center">
                <Download size={20} className="mr-2" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.a>
            <motion.button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-gray-200/30 dark:border-purple-500/30 rounded-full font-semibold text-gray-900 dark:text-white hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden"
              variants={itemVariants}
              whileHover={{ scale: 1.07 }}
              whileTap={{ scale: 0.97 }}
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 dark:from-purple-600/20 to-pink-600/10 dark:to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </motion.button>
          </motion.div>
        </motion.div>
        {/* Enhanced Scroll Indicator */}
        <motion.div
          className="absolute bottom-10 left-1/2 transform -translate-x-1/2"
          variants={itemVariants}
          initial="hidden"
          animate="visible"
        >
          <motion.button
            onClick={() => scrollToSection('about')}
            className="group p-3 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-gray-200/30 dark:border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300 animate-bounce hover:animate-none"
            whileHover={{ scale: 1.15, rotate: 8 }}
            whileTap={{ scale: 0.97 }}
          >
            <ArrowDown size={24} className="text-purple-600 dark:text-purple-300 group-hover:text-purple-700 dark:group-hover:text-white transition-colors duration-300" />
          </motion.button>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;