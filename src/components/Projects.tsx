import React, { useState, useRef, useEffect } from 'react';
import { ExternalLink, Github, Smartphone, Code, Star, Calendar, Users, X, Filter, Grid, List } from 'lucide-react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import taskmatePng from '../assets/taskmate.png';
import project1Png from '../assets/project2.png';
import formatflowPng from '../assets/formatflow.webp';
import { StaggerContainer, StaggerItem, MagneticButton, ParallaxContainer } from './ScrollAnimations';

const Projects: React.FC = () => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [filter, setFilter] = useState<string>('all');
  const [viewMode, setViewMode] = useState<'grid' | 'list'>('grid');
  const sectionRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  const y = useTransform(scrollYProgress, [0, 1], [0, -100]);

  const projects = [
    {
      title: "FormatFlow - AI Repackager",
      description: "Transform your content once and publish everywhere with AI! Features content transformation for multiple social media platforms, 10 AI photo styles with live previews, crop/zoom, save/share functionality, templates, content history, and edited images gallery.",
      image: formatflowPng,
      tech: ["Flutter", "Firebase", "GetX", "AI Integration"],
      live: "https://play.google.com/store/apps/details?id=com.ckfuturetech.formatflow",
      category: "Mobile App",
      status: "Live",
      year: "2024",
      featured: true,
      stats: { downloads: "100+", rating: "4.5" },
      tags: ["AI", "Mobile", "Content"]
    },
    {
      title: "TaskMate",
      description: "A comprehensive todo & planner app with voice input, calendar sync, and vibrant themes. Features AI-powered task creation, cloud backup with offline-first support, clean responsive UI, and lightweight design. Upcoming: group collaboration and theme builder.",
      image: taskmatePng,
      tech: ["Flutter", "Firebase", "GetX", "AI Integration"],
      live: "https://play.google.com/store/apps/details?id=com.ckfuturetech.taskmate",
      category: "Mobile App",
      status: "Live",
      year: "2024",
      featured: true,
      stats: { downloads: "500+", rating: "4.7" },
      tags: ["Productivity", "Mobile", "AI"]
    },
    {
      title: "AI Mood Detector",
      description: "Final year project using Flutter, Dart, Firebase, and TensorFlow Lite. Developed a mood detection app that uses camera and mic to analyze user emotions, classifying them as happy, sad, angry, neutral.",
      image: project1Png,
      tech: ["Flutter", "Firebase", "Google ML Kit"],
      github: "https://github.com/chiragmali19",
      live: "https://developers.google.com/ml-kit/guides",
      liveButtonText: "View Tech",
      category: "Mobile App",
      status: "Completed",
      year: "2023",
      featured: false,
      stats: { accuracy: "92%", models: "4" },
      tags: ["AI", "ML", "Mobile"]
    }
  ];

  const categories = ['all', 'Mobile App', 'AI', 'Productivity'];

  const filteredProjects = projects.filter(project =>
    filter === 'all' || project.tags.includes(filter) || project.category === filter
  );

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
    <section id="projects" className="py-24 lg:py-32 px-4 sm:px-6 lg:px-8" ref={sectionRef}>
      <div className="max-w-7xl mx-auto">
        {/* Enhanced Header */}
        <ParallaxContainer speed={0.3}>
          <StaggerContainer className="text-center mb-20">
          <StaggerItem>
  <motion.div
    className="inline-flex items-center gap-3 rounded-full border border-white/10
               bg-black/70 px-6 py-3 mb-8 backdrop-blur-md
               shadow-[0_0_0_1px_rgba(148,163,184,0.18),0_18px_35px_rgba(88,28,135,0.55)]
               hover:shadow-[0_0_0_1px_rgba(148,163,184,0.3),0_22px_45px_rgba(124,58,237,0.8)]
               transition-all duration-300"
    whileHover={{ scale: 1.03 }}
  >
    {/* Icon bubble */}
    <div
      className="flex h-9 w-9 items-center justify-center rounded-full
                 bg-gradient-to-tr from-purple-500 via-fuchsia-500 to-pink-500
                 shadow-[0_6px_14px_rgba(236,72,153,0.7)]"
    >
      <Code size={18} className="text-white" />
    </div>

    {/* Text */}
    <div className="flex flex-col justify-center leading-snug">
      <span className="text-[10px] font-medium tracking-[0.22em] text-slate-400">
        HIGHLIGHT
      </span>
      <span className="text-sm font-semibold text-slate-50">
        Featured Work
      </span>
    </div>

    {/* Status */}
    <div className="ml-2 flex items-center gap-1">
      <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
      <span className="text-[11px] font-medium text-emerald-400">
        Live
      </span>
    </div>
  </motion.div>
</StaggerItem>





            <StaggerItem>
              <h2 className="text-heading gradient-text mb-8 bottom-20">
                Projects
              </h2>
            </StaggerItem>

            <StaggerItem>
              <p className="text-body-large text-gray-600 dark:text-gray-300 max-w-4xl mx-auto leading-relaxed">
                A showcase of my recent work demonstrating expertise in modern mobile development,
                AI integration, and user-centered design. Each project represents a unique challenge
                and innovative solution.
              </p>
            </StaggerItem>
          </StaggerContainer>
        </ParallaxContainer>

        {/* Advanced Filter and View Controls */}
        <StaggerContainer className="flex flex-col sm:flex-row justify-between items-center mb-12 gap-6">
          <StaggerItem>
            <div className="flex items-center space-x-2">
              <Filter size={20} className="text-gray-600 dark:text-gray-400" />
              <div className="flex flex-wrap gap-2">
                {categories.map((category) => (
                  <MagneticButton
                    key={category}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${filter === category
                      ? 'bg-gradient-to-r from-purple-600 to-pink-600 text-white shadow-lg'
                      : 'neo-panel text-gray-600 dark:text-gray-300 hover:text-purple-600'
                      }`}
                    onClick={() => setFilter(category)}
                    strength={0.1}
                  >
                    {category === 'all' ? 'All Projects' : category}
                  </MagneticButton>
                ))}
              </div>
            </div>
          </StaggerItem>

          <StaggerItem>
            <div className="flex items-center space-x-2 neo-panel p-2 rounded-full">
              <button
                onClick={() => setViewMode('grid')}
                className={`p-2 rounded-full transition-all duration-300 ${viewMode === 'grid' ? 'bg-purple-600 text-white' : 'text-gray-600 dark:text-gray-400'
                  }`}
              >
                <Grid size={18} />
              </button>
              <button
                onClick={() => setViewMode('list')}
                className={`p-2 rounded-full transition-all duration-300 ${viewMode === 'list' ? 'bg-purple-600 text-white' : 'text-gray-600 dark:text-gray-400'
                  }`}
              >
                <List size={18} />
              </button>
            </div>
          </StaggerItem>
        </StaggerContainer>

        {/* Advanced Projects Grid */}
        <motion.div style={{ y }}>
          <AnimatePresence mode="wait">
            <motion.div
              key={filter + viewMode}
              className={`${viewMode === 'grid'
                ? 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 lg:gap-10'
                : 'space-y-8'
                }`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  className={`isotope-item ${viewMode === 'list' ? 'w-full' : ''}`}
                  initial={{ opacity: 0, scale: 0.9, y: 50 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  exit={{ opacity: 0, scale: 0.9, y: -50 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.1,
                    type: "spring",
                    stiffness: 100,
                    damping: 20
                  }}
                  layout
                >
                  <ProjectCard
                    project={project}
                    index={index}
                    viewMode={viewMode}
                    hoveredProject={hoveredProject}
                    setHoveredProject={setHoveredProject}
                    selectedProject={selectedProject}
                    setSelectedProject={setSelectedProject}
                  />
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </motion.div>

        {/* Enhanced CTA */}
        <StaggerContainer className="text-center mt-20">
          <StaggerItem>
            <MagneticButton
              className="btn-secondary group transform-3d"
              strength={0.1}
            >
              <span className="flex items-center justify-center">
                View All Projects
                <ExternalLink size={18} className="ml-3 group-hover:translate-x-1 transition-transform duration-300" />
              </span>
            </MagneticButton>
          </StaggerItem>
        </StaggerContainer>
      </div>

      {/* Enhanced Project Modal */}
      <AnimatePresence>
        {selectedProject !== null && (
          <ProjectModal
            project={projects[selectedProject]}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </AnimatePresence>
    </section>
  );
};

// Enhanced Project Card Component
const ProjectCard: React.FC<{
  project: any;
  index: number;
  viewMode: 'grid' | 'list';
  hoveredProject: number | null;
  setHoveredProject: (index: number | null) => void;
  selectedProject: number | null;
  setSelectedProject: (index: number | null) => void;
}> = ({ project, index, viewMode, hoveredProject, setHoveredProject, selectedProject, setSelectedProject }) => {
  return (
    <motion.div
      className={`group relative transform-3d ${viewMode === 'grid' ? 'h-full min-h-[600px]' : 'flex items-center space-x-8 p-8'
        }`}
      onMouseEnter={() => setHoveredProject(index)}
      onMouseLeave={() => setHoveredProject(null)}
      whileHover={{
        scale: viewMode === 'grid' ? 1.02 : 1.01,
        rotateY: viewMode === 'grid' ? 2 : 0,
        rotateX: viewMode === 'grid' ? 2 : 0,
      }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className={`neo-panel overflow-hidden ${viewMode === 'grid' ? 'h-full flex flex-col rounded-3xl' : 'rounded-2xl w-full'
        }`}>
        {/* Project Image */}
        <div className={`relative overflow-hidden ${viewMode === 'grid' ? 'h-72 lg:h-80' : 'w-64 h-48 flex-shrink-0'
          }`}>
          <motion.img
            src={project.image}
            alt={project.title}
            className="w-full h-full object-cover"
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.6 }}
          />

          {/* Enhanced Overlay */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

          {/* Status Badge */}
          <div className="absolute top-4 left-4">
            <motion.span
              className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold backdrop-blur-sm border ${project.status === 'Live'
                ? 'bg-green-100/90 dark:bg-green-500/20 text-green-800 dark:text-green-300 border-green-200 dark:border-green-500/30'
                : 'bg-blue-100/90 dark:bg-blue-500/20 text-blue-800 dark:text-blue-300 border-blue-200 dark:border-blue-500/30'
                }`}
              whileHover={{ scale: 1.05 }}
            >
              {project.category === "Mobile App" ? <Smartphone size={12} className="mr-1" /> : <Code size={12} className="mr-1" />}
              {project.status}
            </motion.span>
          </div>

          {/* Year Badge */}
          <div className="absolute top-4 right-4">
            <motion.span
              className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-black/30 text-white backdrop-blur-sm border border-white/30"
              whileHover={{ scale: 1.05 }}
            >
              <Calendar size={12} className="mr-1" />
              {project.year}
            </motion.span>
          </div>

          {/* Hover Actions */}
          <motion.div
            className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500"
            initial={{ scale: 0.8 }}
            whileHover={{ scale: 1 }}
          >
            <div className="flex space-x-4">
              {project.github && (
                <MagneticButton
                  className="neo-panel p-4 rounded-full text-white backdrop-blur-sm"
                  strength={0.2}
                >
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Github size={20} />
                  </a>
                </MagneticButton>
              )}
              <MagneticButton
                className="neo-panel p-4 rounded-full text-white backdrop-blur-sm"
                strength={0.2}
              >
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <ExternalLink size={20} />
                </a>
              </MagneticButton>
            </div>
          </motion.div>
        </div>

        {/* Project Content */}
        <div className={`p-6 lg:p-8 ${viewMode === 'grid' ? 'flex flex-col flex-1' : 'flex-1'}`}>
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-4 group-hover:text-purple-600 dark:group-hover:text-purple-300 transition-colors duration-300">
              {project.title}
            </h3>

            <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
              {viewMode === 'grid'
                ? project.description.substring(0, 150) + '...'
                : project.description
              }
            </p>

            {/* Enhanced Stats */}
            {project.stats && (
              <div className="flex items-center space-x-6 mb-6">
                {Object.entries(project.stats).map(([key, value]: [string, any]) => (
                  <div key={key} className="flex items-center space-x-2 text-sm text-gray-500 dark:text-gray-400">
                    {key === 'downloads' && <Users size={16} className="text-green-500" />}
                    {key === 'rating' && <Star size={16} className="text-yellow-500" />}
                    {key === 'accuracy' && <Star size={16} className="text-blue-500" />}
                    <span className="capitalize font-medium">{key}:</span>
                    <span className="font-bold text-gray-700 dark:text-gray-300">{value}</span>
                  </div>
                ))}
              </div>
            )}

            {/* Enhanced Tech Stack */}
            <div className="flex flex-wrap gap-2 mb-6">
              {project.tech.map((tech: string, techIndex: number) => (
                <motion.span
                  key={techIndex}
                  className="px-3 py-1 text-xs font-semibold bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-500/20"
                  whileHover={{ scale: 1.05, y: -2 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                >
                  {tech}
                </motion.span>
              ))}
            </div>
          </div>

          {/* Enhanced Action Buttons */}
          <div className="flex space-x-4 mt-auto">
            {project.github && (
              <MagneticButton
                className="flex-1 btn-secondary group"
                strength={0.05}
              >
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center w-full"
                >
                  <Github size={18} className="mr-2" />
                  Code
                </a>
              </MagneticButton>
            )}
            <MagneticButton
              className="flex-1 btn-primary group"
              strength={0.05}
            >
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center w-full"
              >
                <ExternalLink size={18} className="mr-2" />
                {project.liveButtonText || (project.category === "Mobile App" ? "Play Store" : "Live Demo")}
              </a>
            </MagneticButton>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

// Enhanced Project Modal Component
const ProjectModal: React.FC<{
  project: any;
  onClose: () => void;
}> = ({ project, onClose }) => {
  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      />

      <motion.div
        className="relative max-w-6xl w-full max-h-[90vh] overflow-y-auto neo-panel p-8 rounded-3xl"
        initial={{ scale: 0.9, opacity: 0, rotateX: -15 }}
        animate={{ scale: 1, opacity: 1, rotateX: 0 }}
        exit={{ scale: 0.9, opacity: 0, rotateX: 15 }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      >
        <MagneticButton
          className="absolute top-6 right-6 p-3 rounded-full neo-panel"
          onClick={onClose}
          strength={0.1}
        >
          <X size={24} />
        </MagneticButton>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <img
              src={project.image}
              alt={project.title}
              className="w-full h-80 object-cover rounded-2xl"
            />
          </div>

          <div>
            <h3 className="text-4xl font-bold gradient-text mb-6">{project.title}</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-8 leading-relaxed">{project.description}</p>

            <div className="flex flex-wrap gap-3 mb-8">
              {project.tech.map((tech: string, index: number) => (
                <span
                  key={index}
                  className="px-4 py-2 text-sm font-semibold bg-purple-100 dark:bg-purple-500/10 text-purple-800 dark:text-purple-300 rounded-full border border-purple-200 dark:border-purple-500/20"
                >
                  {tech}
                </span>
              ))}
            </div>

            <div className="flex space-x-4">
              {project.github && (
                <MagneticButton className="btn-secondary" strength={0.1}>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center"
                  >
                    <Github size={20} className="mr-2" />
                    View Code
                  </a>
                </MagneticButton>
              )}
              <MagneticButton className="btn-primary" strength={0.1}>
                <a
                  href={project.live}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center"
                >
                  <ExternalLink size={20} className="mr-2" />
                  {project.liveButtonText || "Live Demo"}
                </a>
              </MagneticButton>
            </div>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default Projects;