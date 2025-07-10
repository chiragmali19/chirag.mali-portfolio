import React, { useState, useEffect, useRef } from 'react';
import { Briefcase, GraduationCap, Calendar } from 'lucide-react';

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
      role: 'Flutter Developer Intern (Full-time)',
      company: 'BOSC Tech Labs Pvt. Ltd.',
      date: 'Feb 2025 – Current',
      points: [
        'Built scalable Flutter applications with production-level architecture.',
        'Worked on UI/UX improvements and API integration in multiple modules.',
        'Gained hands-on experience with Firebase, REST APIs, and state management.',
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
    <section id="about" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Summary */}
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
            Summary
          </h2>
          <p className="text-lg leading-relaxed text-gray-700 dark:text-gray-300 max-w-4xl mx-auto">
            Passionate and results-driven Flutter Developer with strong experience in building cross-platform mobile and web applications. Proficient in Dart, Firebase, and modern state management using GetX. Adept at crafting intuitive user interfaces, integrating APIs, and ensuring performance optimization. Developed several impactful apps, including a live productivity app (TaskMate) and a college final year AI Mood Detection project. Always eager to bring creative solutions and clean, scalable code to dynamic development teams.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`} style={{ transitionDelay: '200ms' }}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <Briefcase className="mr-4 text-purple-500" /> Experience
            </h3>
            <div className="relative border-l-2 border-purple-300 dark:border-purple-500/30 pl-8 space-y-12">
              {experience.map((item, index) => (
                <div key={index} className="relative">
                  <div className="absolute -left-[42px] top-1 w-4 h-4 bg-white dark:bg-slate-900 border-2 border-purple-500 rounded-full"></div>
                  <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">{item.role}</p>
                  <p className="text-md text-gray-600 dark:text-gray-400 mb-2">{item.company}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500 flex items-center mb-3">
                    <Calendar size={14} className="mr-2" /> {item.date}
                  </p>
                  <ul className="list-disc pl-5 space-y-1 text-gray-700 dark:text-gray-300">
                    {item.points.map((point, i) => <li key={i}>{point}</li>)}
                  </ul>
                </div>
              ))}
            </div>
          </div>

          {/* Education Section */}
          <div className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`} style={{ transitionDelay: '400ms' }}>
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-8 flex items-center">
              <GraduationCap className="mr-4 text-purple-500" /> Education
            </h3>
            <div className="space-y-8">
              {education.map((item, index) => (
                <div key={index} className="glass-panel p-6 rounded-lg">
                  <p className="font-semibold text-lg text-gray-800 dark:text-gray-200">{item.degree}</p>
                  <p className="text-md text-gray-600 dark:text-gray-400 mb-2">{item.institution}</p>
                  <p className="text-sm text-gray-500 dark:text-gray-500">{item.details}</p>
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