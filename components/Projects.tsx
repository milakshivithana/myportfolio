import React, { useRef, useLayoutEffect } from 'react';
import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { PROJECTS } from '../data';

gsap.registerPlugin(ScrollTrigger);

const Projects: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // gsap.from(".project-card", {
      //   scrollTrigger: {
      //     trigger: containerRef.current,
      //     start: "top 80%", // Trigger slightly earlier
      //   },
      //   y: 50,
      //   opacity: 0,
      //   duration: 0.8,
      //   stagger: 0.2,
      // });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="projects" className="h-auto py-16 md:py-24 bg-white dark:bg-dark-bg transition-colors" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-12">Featured Projects</h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PROJECTS.map((project) => (
            <div key={project.id} className="project-card group relative bg-gray-50 dark:bg-[#1a1f2e] rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-300 flex flex-col h-full">

              {/* Image Section with Overlay */}
              <div className="relative h-64 overflow-hidden">
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent z-10" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />

                {/* Title and Year Overlay */}
                <div className="absolute bottom-0 left-0 p-6 z-20 w-full text-left">
                  <h3 className="text-2xl font-bold text-white mb-1 shadow-sm leading-tight drop-shadow-md">
                    {project.title}
                  </h3>
                  <span className="text-white/80 font-medium text-lg drop-shadow-md">
                    {project.year || "2024"}
                  </span>
                </div>
              </div>

              {/* Content Section */}
              <div className="p-6 pt-6 flex flex-col flex-grow bg-white dark:bg-[#151925] border-t border-gray-100 dark:border-gray-800/50">
                <p className="text-slate-600 dark:text-slate-400 text-sm leading-relaxed mb-6 line-clamp-3">
                  {project.description}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                  {project.techStack.map(tech => (
                    <span key={tech} className="text-xs font-medium px-3 py-1.5 bg-transparent text-slate-600 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-700 hover:border-brand-500 dark:hover:border-brand-400 transition-colors cursor-default">
                      {tech}
                    </span>
                  ))}
                </div>

                {/* View Project Button */}
                <a
                  href={project.repoLink || "#"}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full group/btn relative overflow-hidden rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 p-[1px] focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50"
                >
                  <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)] opacity-0 group-hover/btn:opacity-100 transition-opacity" />
                  <span className="relative flex h-full w-full items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-500 hover:to-indigo-500 px-4 py-3 text-sm font-semibold text-white transition-all">
                    <Github size={18} />
                    View Project
                  </span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;