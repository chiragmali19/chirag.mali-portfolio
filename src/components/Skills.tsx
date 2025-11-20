import React, { useEffect, useState, useRef } from 'react';

const Skills: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const skillCategories = [
    {
      category: 'Languages',
      skills: ['Dart']
    },
    {
      category: 'Frameworks',
      skills: ['Flutter']
    },
    {
      category: 'State Management',
      skills: ['GetX, BloC, Provider']
    },
    {
      category: 'Cloud/Database',
      skills: ['Firebase, Supabase']
    }
  ];

  const categories = {
    Frontend: "from-blue-500 to-cyan-500",
    Backend: "from-green-500 to-emerald-500",
    Database: "from-orange-500 to-red-500",
    Mobile: "from-purple-500 to-pink-500",
    Tools: "from-yellow-500 to-orange-500",
    Cloud: "from-indigo-500 to-purple-500"
  };

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !isVisible) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [isVisible]);

  return (
    <section id="skills" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Skills & Technologies
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Technologies and tools I use to bring innovative ideas to life
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {skillCategories.map((category, index) => (
            <div
              key={index}
              className={`glass-panel p-6 rounded-2xl transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
              style={{ transitionDelay: `${index * 200}ms` }}
            >
              <h3 className="text-xl font-bold mb-4 text-purple-400">
                {category.category}
              </h3>
              <div className="flex flex-wrap gap-3">
                {category.skills.map((skill, skillIndex) => (
                  <span
                    key={skillIndex}
                    className="px-4 py-2 bg-gray-200 dark:bg-white/10 text-gray-800 dark:text-white rounded-full text-sm font-medium border border-gray-300 dark:border-white/20 hover:bg-gray-300 dark:hover:bg-white/20 transition-all duration-300"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Enhanced Stats */}
        <div className={`mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {[
            { icon: "📚", number: "1+", label: "Years Learning", color: "from-blue-500 to-cyan-500" },
            { icon: "🚀", number: "10+", label: "Projects Completed", color: "from-purple-500 to-pink-500" },
            { icon: "📱", number: "5+", label: "Mobile Apps Published", color: "from-orange-500 to-red-500" },
          ].map((stat, index) => (
            <div
              key={index}
              className="text-center glass-panel p-6 rounded-2xl hover:scale-105 transition-all duration-300 group"
            >
              <div className="text-4xl mb-2">{stat.icon}</div>
              <div className={`text-3xl font-bold bg-gradient-to-r ${stat.color} bg-clip-text text-transparent mb-2`}>
                {stat.number}
              </div>
              <div className="text-gray-600 dark:text-gray-300 group-hover:text-gray-800 dark:group-hover:text-white transition-colors duration-300">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;