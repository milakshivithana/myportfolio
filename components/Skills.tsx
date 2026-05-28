import React, { useRef, useLayoutEffect } from 'react';
import { Award, CheckCircle, Code2, Layout, Database } from 'lucide-react';
import { SKILLS, CERTIFICATES } from '../data';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!window.gsap) return;
    const ctx = window.gsap.context(() => {
      // Staggered mount animation for Technical Stack
      window.gsap.from(".skill-reveal", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
        ease: "power2.out"
      });

      // Staggered mount animation for Certifications
      window.gsap.from(".cert-reveal", {
        y: 25,
        opacity: 0,
        duration: 0.6,
        stagger: 0.05,
        ease: "power2.out",
        delay: 0.2
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "Languages":
        return <Code2 size={22} className="text-cyan-500" />;
      case "Frontend":
        return <Layout size={22} className="text-purple-500" />;
      case "Backend & Tools":
        return <Database size={22} className="text-sky-500" />;
      default:
        return <Code2 size={22} className="text-brand-500" />;
    }
  };

  return (
    <section id="skills" className="relative h-auto py-16 md:py-24 bg-gray-50 dark:bg-dark-bg transition-colors" ref={containerRef}>
      {/* Background ambient glowing light */}
      <div className="absolute top-1/3 right-10 ambient-glow-purple hidden dark:block"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Technical Skills Section */}
        <div className="mb-20">
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
              Technical Stack
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-brand-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">Core programming languages, front-end libraries, database architectures, and engineering tools.</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {SKILLS.map((skillCat, idx) => (
              <div 
                key={idx} 
                className="skill-reveal bg-white dark:bg-dark-card p-6 rounded-2xl border border-gray-100 dark:border-gray-800 shadow-sm hover:border-brand-400 dark:hover:border-brand-500 transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center gap-3 mb-6 pb-4 border-b border-gray-100 dark:border-gray-800/40">
                    <div className="p-2 bg-gray-100 dark:bg-slate-800/60 rounded-xl">
                      {getCategoryIcon(skillCat.category)}
                    </div>
                    <h3 className="font-bold text-lg text-slate-900 dark:text-white font-display">{skillCat.category}</h3>
                  </div>
                  
                  <div className="flex flex-wrap gap-2.5">
                    {skillCat.items.map((skill) => (
                      <span 
                        key={skill} 
                        className="text-xs font-semibold px-3 py-1.5 bg-gray-50 dark:bg-slate-900/60 text-slate-700 dark:text-slate-300 rounded-full border border-slate-200 dark:border-slate-800 hover:border-brand-500 dark:hover:border-brand-500 transition-all cursor-default"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Certifications Section */}
        <div>
          <div className="mb-10 text-left">
            <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4 relative inline-block">
              Certifications
              <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-brand-500 rounded-full"></span>
            </h2>
            <p className="text-slate-600 dark:text-slate-400">Recognised academic achievements and verified industry credentials.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {CERTIFICATES.map((cert) => (
              <div 
                key={cert.id} 
                className="cert-reveal bg-white dark:bg-dark-card p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-start gap-4 hover:border-brand-200 dark:hover:border-brand-800 transition-colors"
              >
                <div className="flex-shrink-0 w-12 h-12 bg-gray-100 dark:bg-gray-800 rounded-full flex items-center justify-center">
                  <Award size={24} className="text-brand-600" />
                </div>
                <div>
                  <h4 className="font-semibold text-slate-900 dark:text-white leading-tight">
                    <a
                      href={cert.badgeUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-brand-600 dark:hover:text-brand-400 transition-colors hover:underline decoration-brand-500/30 underline-offset-4"
                    >
                      {cert.title}
                    </a>
                  </h4>
                  <p className="text-sm text-slate-500 dark:text-slate-400 mt-1">{cert.issuer}</p>
                  <div className="flex items-center gap-1 mt-2 text-xs text-brand-600 dark:text-brand-400">
                    <CheckCircle size={12} />
                    <span>Verified</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};

export default Skills;