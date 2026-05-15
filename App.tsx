
import React, { useState, useEffect, useRef } from 'react';
import { HashRouter, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import HomePage from './pages/HomePage';
import TeamPage from './pages/TeamPage';
import AboutHackathonPage from './pages/AboutHackathonPage';
import ProjectPage from './pages/ProjectPage';
import CommunicationPage from './pages/CommunicationPage';
import JournalPage from './pages/JournalPage';
import GlossaryPage from './pages/GlossaryPage';
import TutorialPage from './pages/TutorialPage';
import CommandPalette from './components/CommandPalette';
import BackToTopButton from './components/BackToTopButton';
import { teamMembers, projects } from './data';
import { motion, AnimatePresence } from 'framer-motion';

const LivingConstellationBackground: React.FC = () => {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const mouse = useRef({ x: window.innerWidth / 2, y: window.innerHeight / 2, isMoving: false });
    let timeoutId: number;

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;
        const ctx = canvas.getContext('2d');
        if (!ctx) return;

        let animationFrameId: number;
        let driftingStars: any[] = [];
        let particles: any[] = [];
        const numDriftingStars = 100;
        const numParticles = 200;

        class Particle {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;
            opacity: number;
            opacitySpeed: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1 + 0.2;
                this.speedX = (Math.random() - 0.5) * 0.05;
                this.speedY = (Math.random() - 0.5) * 0.05;
                this.opacity = Math.random() * 0.5;
                this.opacitySpeed = (Math.random() - 0.5) * 0.01;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;
                this.opacity += this.opacitySpeed;

                if (this.opacity <= 0 || this.opacity >= 0.5) {
                    this.opacitySpeed *= -1;
                }

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(180, 200, 240, ${this.opacity})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }
        
        class DriftingStar {
            x: number;
            y: number;
            size: number;
            speedX: number;
            speedY: number;

            constructor() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.5;
                this.speedX = (Math.random() - 0.5) * 0.1;
                this.speedY = (Math.random() - 0.5) * 0.1;
            }

            update() {
                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x < 0) this.x = canvas.width;
                if (this.x > canvas.width) this.x = 0;
                if (this.y < 0) this.y = canvas.height;
                if (this.y > canvas.height) this.y = 0;
            }

            draw() {
                if (!ctx) return;
                ctx.fillStyle = `rgba(200, 220, 255, ${this.size * 0.3})`;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        function createParticles() {
            particles = [];
            for (let i = 0; i < numParticles; i++) {
                particles.push(new Particle());
            }
        }
        
        function createDriftingStars() {
            driftingStars = [];
            for (let i = 0; i < numDriftingStars; i++) {
                driftingStars.push(new DriftingStar());
            }
        }
        
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
            createDriftingStars();
            createParticles();
        };

        const handleMouseMove = (event: MouseEvent) => {
            mouse.current.x = event.clientX;
            mouse.current.y = event.clientY;
            mouse.current.isMoving = true;
            clearTimeout(timeoutId);
            timeoutId = window.setTimeout(() => {
                mouse.current.isMoving = false;
            }, 100);
        };

        window.addEventListener('resize', resizeCanvas);
        window.addEventListener('mousemove', handleMouseMove);
        resizeCanvas();

        const animate = () => {
            if (!ctx || !canvas) return;
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Calculate parallax shift (from -0.5 to 0.5)
            const parallaxX = (mouse.current.x - canvas.width / 2) / canvas.width;
            const parallaxY = (mouse.current.y - canvas.height / 2) / canvas.height;
            
            // 0. Draw deep particles with smallest parallax
            const particlesParallaxFactor = 20;
            ctx.save();
            ctx.translate(parallaxX * particlesParallaxFactor, parallaxY * particlesParallaxFactor);
            particles.forEach(p => {
                p.update();
                p.draw();
            });
            ctx.restore();

            // 1. Draw drifting stars with a small parallax effect
            const starsParallaxFactor = 40;
            ctx.save();
            ctx.translate(parallaxX * starsParallaxFactor, parallaxY * starsParallaxFactor);
            driftingStars.forEach(star => {
                star.update();
                star.draw();
            });
            ctx.restore();
            
            animationFrameId = requestAnimationFrame(animate);
        };
        
        animate();

        return () => {
            window.removeEventListener('resize', resizeCanvas);
            window.removeEventListener('mousemove', handleMouseMove);
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return <canvas ref={canvasRef} id="background-canvas" />;
};

const AppContent: React.FC = () => {
  const [isCommandPaletteOpen, setCommandPaletteOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    document.documentElement.classList.add('dark');
  }, []);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.documentElement.style.setProperty('--cursor-x', `${e.clientX}px`);
      document.documentElement.style.setProperty('--cursor-y', `${e.clientY}px`);
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const handler = (e: KeyboardEvent) => {
      if ((e.key === 'k' && (e.metaKey || e.ctrlKey))) {
        e.preventDefault();
        setCommandPaletteOpen(open => !open);
      }
    };
    window.addEventListener('keydown', handler);
    return () => window.removeEventListener('keydown', handler);
  }, []);

  return (
    <div className="flex flex-col min-h-screen bg-transparent text-gray-200 transition-colors duration-300">
      <LivingConstellationBackground />
      <CommandPalette isOpen={isCommandPaletteOpen} setIsOpen={setCommandPaletteOpen} />
      <Header setCommandPaletteOpen={setCommandPaletteOpen} isScrolled={isScrolled} />
      <main className={`flex-grow transition-all duration-300 ease-in-out ${isScrolled ? 'pt-16' : 'pt-20'}`}>
         <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname}
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <Routes>
                <Route path="/" element={<HomePage />} />
                <Route path="/team" element={<TeamPage members={teamMembers} />} />
                <Route path="/about-hackathon" element={<AboutHackathonPage />} />
                <Route path="/project1" element={<ProjectPage project={projects[0]} />} />
                <Route path="/project2" element={<ProjectPage project={projects[1]} />} />
                <Route path="/project3" element={<ProjectPage project={projects[2]} />} />
                <Route path="/communication" element={<CommunicationPage />} />
                <Route path="/journal" element={<JournalPage />} />
                <Route path="/glossary" element={<GlossaryPage />} />
                <Route path="/tutorial" element={<TutorialPage />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
      </main>
      <BackToTopButton />
      <Footer />
    </div>
  );
};

const App: React.FC = () => (
  <HashRouter>
    <AppContent />
  </HashRouter>
);

export default App;
