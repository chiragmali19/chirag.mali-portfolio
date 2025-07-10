import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Smartphone, Code, ChevronLeft, ChevronRight } from 'lucide-react';
import taskmatePng from '../assets/taskmate.png';
import project1Png from '../assets/project2.png';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  const projects = [
    {
      title: "TaskMate",
      description: "A simple and clean todo & planner app built with Flutter, Firebase, and GetX for state management. Supports task creation, completion tracking, and persistent storage.",
      image: taskmatePng,
      tech: ["Flutter", "Firebase", "GetX"],
      live: "https://play.google.com/store/apps/details?id=com.ckfuturetech.taskmate",
      category: "Mobile App",
    },
    {
      title: "AI Mood Detector",
      description: "Final year project using Flutter, Dart, Firebase, and TensorFlow Lite. Developed a mood detection app that uses camera and mic to analyze user emotions, classifying them as happy, sad, angry, neutral.",
      image: project1Png,
      tech: ["Flutter", "Firebase", "TensorFlow Lite"],
      github: "https://github.com/chiragmali19",
      live: "https://developers.google.com/ml-kit/guides",
      liveButtonText: "View Tech",
      category: "Mobile App",
    }
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        <div className={`text-center mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h2 className="text-4xl sm:text-5xl font-bold mb-6 bg-gradient-to-r from-purple-400 to-pink-400 bg-clip-text text-transparent">
            Projects
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto leading-relaxed">
            A showcase of my recent work demonstrating expertise in modern web and mobile development
          </p>
        </div>

        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-8 transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {projects.map((project, index) => (
            <div
              key={index}
              className="group relative"
              onMouseEnter={() => setHoveredProject(index)}
              onMouseLeave={() => setHoveredProject(null)}
            >
              <div className="glass-panel rounded-2xl overflow-hidden hover:shadow-2xl hover:shadow-purple-500/20 transition-all duration-500 hover:scale-[1.02] transform-gpu">
                {/* Project Image */}
                <div className="relative overflow-hidden h-64">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                  {/* Category Badge */}
                  <div className="absolute top-4 left-4">
                    <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-purple-100 dark:bg-purple-500/20 text-purple-800 dark:text-purple-300 border border-purple-200 dark:border-purple-500/30 backdrop-blur-sm">
                      {project.category === "Mobile App" ? <Smartphone size={12} className="mr-1" /> : <Code size={12} className="mr-1" />}
                      {project.category}
                    </span>
                  </div>

                  {/* Project Links - Visible on Hover */}
                  <div className={`absolute top-4 right-4 flex space-x-2 transition-all duration-300 ${hoveredProject === index ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-2'
                    }`}>
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-200"
                      >
                        <Github size={16} className="text-white" />
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-2 rounded-full bg-black/50 backdrop-blur-sm border border-purple-500/30 hover:bg-purple-500/20 transition-all duration-200"
                    >
                      <ExternalLink size={16} className="text-white" />
                    </a>
                  </div>
                </div>

                {/* Project Content */}
                <div className="p-6 space-y-4">
                  <div>
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
                      {project.title}
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 leading-relaxed group-hover:text-gray-700 dark:group-hover:text-gray-300 transition-colors duration-300">
                      {project.description}
                    </p>
                  </div>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech, techIndex) => (
                      <span
                        key={techIndex}
                        className="px-3 py-1 text-xs font-medium bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-500/20 hover:bg-purple-200 dark:hover:bg-purple-500/20 transition-colors duration-200"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Buttons */}
                  <div className="flex space-x-4 pt-2">
                    {project.github && (
                      <a
                        href={project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center px-4 py-2 text-sm font-medium text-purple-700 dark:text-purple-300 hover:text-purple-900 dark:hover:text-white border border-purple-300 dark:border-purple-500/30 rounded-lg hover:bg-purple-100 dark:hover:bg-purple-500/20 transition-all duration-200"
                      >
                        <Github size={16} className="mr-2" />
                        Code
                      </a>
                    )}
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center px-4 py-2 text-sm font-medium bg-gradient-to-r from-purple-600 to-pink-600 text-white rounded-lg hover:from-purple-700 hover:to-pink-700 transition-all duration-200"
                    >
                      <ExternalLink size={16} className="mr-2" />
                      {project.liveButtonText || (project.category === "Mobile App" ? "Play Store" : "Live Demo")}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;