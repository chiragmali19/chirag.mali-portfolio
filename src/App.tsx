import { useEffect, useState } from 'react';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import Navbar from './components/Navbar';
import AnimatedBackground from './components/AnimatedBackground';
import ScrollProgress from './components/ScrollProgress';
import ThemeToggle from './components/ThemeToggle';
import CursorFollower from './components/CursorFollower';
import { useTheme } from './hooks/useTheme';

function App() {
  const [isLoaded, setIsLoaded] = useState(false);
  const { theme } = useTheme();

  useEffect(() => {
    setIsLoaded(true);

    // Apply theme data attribute
    document.documentElement.setAttribute('data-theme', theme);

    // Smooth scrolling behavior
    document.documentElement.style.scrollBehavior = 'smooth';

    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, [theme]);

  return (
    <div
      className={`min-h-screen overflow-x-hidden transition-all duration-500 ${isLoaded ? 'opacity-100' : 'opacity-0'}`}
      style={{
        background: 'var(--bg-primary)',
        color: 'var(--text-primary)'
      }}
    >
      <CursorFollower />
      <ScrollProgress />
      <AnimatedBackground />
      <ThemeToggle />
      <Navbar />
      <main className="relative z-10">
        <Hero />
        <About />
        <Projects />
        <Skills />
        <Contact />
      </main>
    </div>
  );
}

export default App;