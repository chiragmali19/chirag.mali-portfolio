import React, { useEffect, useRef, useState } from 'react';
import { ArrowDown, Github, Linkedin, Mail, Download } from 'lucide-react';

const Hero: React.FC = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const mouseRef = useRef({ x: 0, y: 0 });
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);

    const handleMouseMove = (e: MouseEvent) => {
      mouseRef.current.x = e.clientX;
      mouseRef.current.y = e.clientY;

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
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-50 to-white dark:from-slate-900 dark:via-purple-900 dark:to-slate-900 text-gray-900 dark:text-white" ref={heroRef}>
      {/* Enhanced Floating Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="parallax-element absolute top-20 left-20 w-32 h-32 bg-gradient-to-br from-purple-500/10 dark:from-purple-500/20 to-pink-500/10 dark:to-pink-500/20 rounded-full blur-xl animate-pulse">
          <div className="w-full h-full bg-gradient-to-tr from-cyan-400/20 dark:from-cyan-400/30 to-purple-600/20 dark:to-purple-600/30 rounded-full animate-spin-slow"></div>
        </div>
        <div className="parallax-element absolute top-1/3 right-20 w-40 h-40 bg-gradient-to-br from-pink-500/15 to-violet-500/15 rounded-full blur-2xl animate-pulse delay-1000">
          <div className="w-full h-full bg-gradient-to-bl from-rose-400/25 to-indigo-600/25 rounded-full animate-spin-reverse"></div>
        </div>
        <div className="parallax-element absolute bottom-1/4 left-1/4 w-24 h-24 bg-gradient-to-br from-cyan-500/20 to-blue-500/20 rounded-full blur-xl animate-pulse delay-2000">
          <div className="w-full h-full bg-gradient-to-tl from-teal-400/30 to-blue-600/30 rounded-full animate-spin-slow"></div>
        </div>
        <div className="parallax-element absolute top-1/2 left-1/2 w-28 h-28 bg-gradient-to-br from-emerald-500/15 to-teal-500/15 rounded-full blur-xl animate-pulse delay-500">
          <div className="w-full h-full bg-gradient-to-br from-green-400/25 to-cyan-600/25 rounded-full animate-spin-reverse"></div>
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 text-center max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`space-y-8 transition-all duration-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="space-y-6">
            <div className={`transition-all duration-1000 delay-200 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
              <h2 className="text-lg sm:text-xl text-purple-600 dark:text-purple-300 font-light tracking-widest uppercase">
                Flutter Developer
              </h2>
            </div>

            <div className={`transition-all duration-1000 delay-400 ${isLoaded ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
              <h1 className="text-5xl sm:text-7xl lg:text-9xl font-bold leading-tight">
                <span className="bg-gradient-to-r from-gray-900 via-purple-600 to-pink-600 dark:from-white dark:via-purple-200 dark:to-pink-200 bg-clip-text text-transparent animate-gradient-x">
                  Chirag Mali
                </span>
              </h1>
            </div>

            <div className={`relative transition-all duration-1000 delay-600 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
              <p className="text-xl sm:text-2xl text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                Crafting innovative digital experiences with{' '}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600 dark:from-purple-400 dark:to-pink-400 font-semibold">
                  Flutter, Dart, and Firebase
                </span>
                <span className="inline-block w-3 h-6 bg-purple-600 dark:bg-purple-400 ml-2 animate-pulse"></span>
              </p>
            </div>
          </div>

          {/* Enhanced Stats */}
          <div className={`grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 transition-all duration-1000 delay-800 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { number: '1+', label: 'Years Learning' },
              { number: '10+', label: 'Projects Completed' },
              { number: '2', label: 'Mobile Apps Published' }
            ].map((stat, index) => (
              <div key={index} className="glass-panel p-4 rounded-xl hover:scale-105 transition-transform duration-300 bg-white/10 dark:bg-white/5 backdrop-blur-md border border-gray-200/20 dark:border-white/10">
                <div className="text-2xl font-bold text-purple-600 dark:text-purple-400">{stat.number}</div>
                <div className="text-sm text-gray-600 dark:text-gray-300">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Social Links */}
          <div className={`flex justify-center space-x-6 transition-all duration-1000 delay-1000 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            {[
              { icon: Mail, href: 'mailto:malichirag1369@gmail.com', label: 'Email' },
              { icon: Linkedin, href: 'https://www.linkedin.com/in/chirag-mali-491b72278/', label: 'LinkedIn' },
              { icon: Github, href: 'https://github.com/chiragmali19', label: 'GitHub' }
            ].map((social, index) => (
              <a
                key={index}
                href={social.href}
                target={social.href.startsWith('mailto:') ? '_self' : '_blank'}
                rel="noopener noreferrer"
                className="group relative p-4 rounded-full bg-white/10 dark:bg-white/5 backdrop-blur-sm border border-gray-200/30 dark:border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300 hover:scale-110 hover:shadow-lg hover:shadow-purple-500/25"
                aria-label={social.label}
              >
                <social.icon size={24} className="text-purple-600 dark:text-purple-300 group-hover:text-purple-700 dark:group-hover:text-white transition-colors duration-300" />
                <div className="absolute inset-0 rounded-full bg-gradient-to-r from-purple-600/10 dark:from-purple-600/20 to-pink-600/10 dark:to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              </a>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className={`flex flex-col sm:flex-row gap-4 justify-center transition-all duration-1000 delay-1200 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
            <button
              onClick={() => scrollToSection('projects')}
              className="group relative px-8 py-4 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full font-semibold text-white hover:from-purple-700 hover:to-pink-700 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                View My Work
                <span className="inline-block ml-2 group-hover:translate-x-1 transition-transform duration-300">→</span>
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-400 to-pink-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>

            <a
              href="https://drive.google.com/file/d/17qG8mILPpbP55w-eCBSMoGuqhAOgc0mj/view?usp=drive_link"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-gray-200/30 dark:border-purple-500/30 rounded-full font-semibold text-gray-900 dark:text-white hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center">
                <Download size={20} className="mr-2" />
                Download Resume
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/20 to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </a>

            <button
              onClick={() => scrollToSection('contact')}
              className="group relative px-8 py-4 bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-gray-200/30 dark:border-purple-500/30 rounded-full font-semibold text-gray-900 dark:text-white hover:bg-purple-500/20 transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/25 overflow-hidden"
            >
              <span className="relative z-10">Get In Touch</span>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-600/10 dark:from-purple-600/20 to-pink-600/10 dark:to-pink-600/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
          </div>
        </div>

        {/* Enhanced Scroll Indicator */}
        <div className={`absolute bottom-10 left-1/2 transform -translate-x-1/2 transition-all duration-1000 delay-1400 ${isLoaded ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}`}>
          <button
            onClick={() => scrollToSection('about')}
            className="group p-3 rounded-full bg-white/20 dark:bg-white/10 backdrop-blur-sm border border-gray-200/30 dark:border-purple-500/30 hover:bg-purple-500/20 transition-all duration-300 animate-bounce hover:animate-none"
          >
            <ArrowDown size={24} className="text-purple-600 dark:text-purple-300 group-hover:text-purple-700 dark:group-hover:text-white transition-colors duration-300" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;