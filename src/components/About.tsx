import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Calendar, MapPin, Award } from 'lucide-react';

const About: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const experience = [
    {
      role: 'Software Developer (Full-time)',
      company: 'BOSC Tech Labs Pvt. Ltd.',
      date: 'Aug 2025 – Present',
      points: [
        'Currently working as a full-time Software Developer focusing on building scalable, high-performance applications.',
        'Contributing to new feature development, UI/UX optimization, and advanced API integration across live projects.',
        'Leading development of production-ready applications with clean architecture and scalable codebase.',
      ],
    },
    {
      role: 'Software Developer Intern (Full-time)',
      company: 'BOSC Tech Labs Pvt. Ltd.',
      date: 'Feb 2025 – July 2025',
      points: [
        'Built and optimized production-ready Flutter applications with scalable architecture and clean UI/UX.',
        'Gained hands-on experience with Firebase, REST APIs, and state management.',
        'Spin the Wheel – Developed from scratch with engaging animations and logic; app crossed 100K+ installs.',
        'LeafLens – Created complete cross-platform app with Firebase backend and local push notifications.',
        'FoundersMate – Handled end-to-end development including UI design, API integration, and deployment.',
      ],
    },
    {
      role: 'Android App Development Intern (Remote)',
      company: 'Corizo',
      date: 'Dec 2023 – Feb 2024',
      points: [
        'Developed user-friendly Android applications using Flutter.',
        'Applied real-world development practices and improved app performance.',
        'Worked remotely with mentor support and project delivery deadlines.',
      ],
    },
  ];

  const education = [
    {
      degree: 'Bachelor of Technology, Information Technology',
      institution: 'Indus University',
      details: 'GPA: 8.6 / 10 | Duration: 2021 – 2025',
    },
    {
      degree: 'Higher Secondary Education',
      institution: 'Sankalp Science School (GSEB)',
      details: 'Percentage: 74% | Year: 2020 - 2021',
    },
  ];

  return (
    <section id="about" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8 bg-gray-50/50 dark:bg-slate-800/50" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Summary */}
        <div className={`text-center mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <div className="inline-flex items-center space-x-2 px-6 py-3 rounded-full neo-panel mb-8">
            <Award size={20} className="text-teal-500" />
            <span className="text-sm font-semibold text-gray-700 dark:text-gray-300">
              About Me
            </span>
          </div>
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-8 bg-gradient-to-r from-teal-500 to-cyan-500 bg-clip-text text-transparent">
            Professional Summary
          </h2>
          <div className="neo-panel p-8 lg:p-10 max-w-5xl mx-auto">
            <p className="text-lg lg:text-xl leading-relaxed text-gray-700 dark:text-gray-300">
              Passionate and results-driven Software Developer with strong experience in building cross-platform mobile and web applications. Currently working full-time at{' '}
              <span className="font-bold text-blue-600 dark:text-blue-400">BOSC Tech Labs</span>, proficient in Dart, Firebase, and modern state management using GetX. Adept at crafting intuitive user interfaces, integrating APIs, and ensuring performance optimization. Developed several impactful apps with{' '}
              <span className="font-bold text-green-600 dark:text-green-400">100K+ installs</span>, including Spin the Wheel, LeafLens, FoundersMate, TaskMate, and AI Mood Detection project. Always eager to bring creative solutions and clean, scalable code to dynamic development teams.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Briefcase className="mr-4 text-teal-500" /> Experience
            </h3>
            <div className="relative border-l-2 border-teal-300 dark:border-teal-500/30 pl-8 space-y-12">
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[42px] top-1 w-4 h-4 bg-white dark:bg-slate-900 border-2 border-teal-500 rounded-full"></div>
                  <div className="neo-panel p-6 hover:scale-[1.02] transition-transform duration-300">
                    <p className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">{item.role}</p>
                    <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold mb-2">{item.company}</p>
                    <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center mb-4">
                      <Calendar size={14} className="mr-2" /> {item.date}
                    </p>
                    <ul className="list-disc pl-5 space-y-2 text-gray-700 dark:text-gray-300">
                      {item.points.map((point, i) => <li key={i} className="leading-relaxed">{point}</li>)}
                    </ul>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="mr-4 text-teal-500" /> Education
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="neo-panel p-6 lg:p-8 hover:scale-[1.02] transition-transform duration-300">
                  <p className="font-bold text-xl text-gray-800 dark:text-gray-200 mb-2">{item.degree}</p>
                  <p className="text-lg text-teal-600 dark:text-teal-400 font-semibold mb-3 flex items-center">
                    <MapPin size={16} className="mr-2" />
                    {item.institution}
                  </p>
                  <p className="text-base text-gray-600 dark:text-gray-400">{item.details}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;   