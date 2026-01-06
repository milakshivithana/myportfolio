import React, { useRef, useLayoutEffect } from 'react';
import { Award, CheckCircle } from 'lucide-react';
import { SKILLS, CERTIFICATES } from '../data';

const Skills: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    if (!window.gsap || !window.ScrollTrigger) return;
    const ctx = window.gsap.context(() => {
      window.gsap.from(".skill-card", {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top 80%",
        },
        y: 30,
        opacity: 0,
        duration: 0.6,
        stagger: 0.1,
      });
    }, containerRef);
    return () => ctx.revert();
  }, []);

  return (
    <section id="skills" className="h-auto py-16 md:py-24 bg-gray-50 dark:bg-dark-bg/50" ref={containerRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white mb-4">Certifications</h2>
          <p className="text-slate-600 dark:text-slate-400">Recognised achievements and verified credentials.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {CERTIFICATES.map((cert) => (
            <div key={cert.id} className="skill-card bg-white dark:bg-dark-card p-5 rounded-2xl shadow-sm border border-gray-100 dark:border-gray-800 flex items-start gap-4 hover:border-brand-200 dark:hover:border-brand-800 transition-colors">
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
    </section>
  );
};

export default Skills;