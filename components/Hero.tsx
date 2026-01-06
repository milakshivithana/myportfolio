import React, { useEffect, useRef } from 'react';
import { ArrowRight, Github, Linkedin, Mail, Download } from 'lucide-react';
import { DecryptedText } from './DecryptedText';
import { PERSONAL_INFO } from '../data';

// Using global GSAP from CDN for XML limitation, or standard import if build env allows
// In a real environment: import gsap from 'gsap';

const Hero: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Parallax background effect
    const handleMouseMove = (e: MouseEvent) => {
      if (!containerRef.current) return;
      const { clientX, clientY } = e;
      const moveX = (clientX - window.innerWidth / 2) * 0.01;
      const moveY = (clientY - window.innerHeight / 2) * 0.01;

      const blobs = containerRef.current.querySelectorAll('.bg-blob');
      blobs.forEach((blob, i) => {
        const factor = i % 2 === 0 ? 1 : -1;
        (blob as HTMLElement).style.transform = `translate(${moveX * factor * 20}px, ${moveY * factor * 20}px)`;
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative min-h-screen flex items-center pt-16 overflow-hidden"
    >
      {/* Animated Background Noise/Blobs */}
      <div className="absolute inset-0 z-0 overflow-hidden opacity-30 dark:opacity-20 pointer-events-none">
        <div className="absolute top-[-10%] left-[-10%] w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob bg-blob"></div>
        <div className="absolute top-[-10%] right-[-10%] w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-2000 bg-blob"></div>
        <div className="absolute bottom-[-10%] left-[20%] w-96 h-96 bg-pink-500 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-blob animation-delay-4000 bg-blob"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="max-w-3xl">
          <p className="text-brand-600 dark:text-brand-400 font-medium mb-4 tracking-wide uppercase text-sm">
            Hello, I'm
          </p>

          <h1 className="text-5xl md:text-7xl font-display font-bold text-slate-900 dark:text-white mb-6 leading-tight">
            <DecryptedText
              text={PERSONAL_INFO.name}
              className="text-slate-900 dark:text-white"
            />
            <span className="text-slate-400 dark:text-slate-600">.</span>
            <br />
            <span className="text-3xl md:text-5xl text-slate-600 dark:text-slate-400">
              {PERSONAL_INFO.role}
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-600 dark:text-slate-300 mb-8 max-w-2xl leading-relaxed">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex flex-wrap gap-4">
            <a
              href="#projects"
              className="group flex items-center gap-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 px-6 py-3 rounded-full font-semibold hover:scale-105 transition-transform duration-200"
            >
              View Projects
              <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
            </a>

            <a
              href="#contact"
              className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              Contact Me
            </a>

            <a
              href="/cv%20(1).pdf"
              download="Milakshi_Vithana_CV.pdf"
              className="flex items-center gap-2 bg-white dark:bg-slate-800 text-slate-900 dark:text-white border border-slate-200 dark:border-slate-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 dark:hover:bg-slate-700 transition-colors"
            >
              <Download size={18} />
              Download CV
            </a>
          </div>

          <div className="mt-12 flex gap-6 text-slate-500 dark:text-slate-400">
            <a href={PERSONAL_INFO.linkedin} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" aria-label="LinkedIn">
              <Linkedin size={24} />
            </a>
            <a href={PERSONAL_INFO.github} target="_blank" rel="noopener noreferrer" className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" aria-label="GitHub">
              <Github size={24} />
            </a>
            <a href={`mailto:${PERSONAL_INFO.email}`} className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors" aria-label="Email">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;