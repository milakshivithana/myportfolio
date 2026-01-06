import React, { useRef, useLayoutEffect } from 'react';
import { PERSONAL_INFO } from '../data';

declare global {
  interface Window {
    gsap: any;
    ScrollTrigger: any;
  }
}

const About: React.FC = () => {
  const compRef = useRef<HTMLDivElement>(null);

  useLayoutEffect(() => {
    // Check if GSAP is loaded
    if (!window.gsap || !window.ScrollTrigger) return;

    const ctx = window.gsap.context(() => {
      window.gsap.from(".about-reveal", {
        scrollTrigger: {
          trigger: ".about-container",
          start: "top 80%",
        },
        y: 50,
        opacity: 0,
        duration: 0.8,
        stagger: 0.2,
        ease: "power3.out"
      });
    }, compRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="about" className="h-auto py-16 md:py-24 bg-white dark:bg-dark-bg transition-colors" ref={compRef}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 about-container">
        <div className="mb-12 about-reveal">
          <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white relative inline-block">
            About Me
            <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-brand-500 rounded-full"></span>
          </h2>
        </div>

        <div className="grid md:grid-cols-12 gap-12 items-start">
          <div className="md:col-span-4 about-reveal">
            <div className="relative group">
              <div className="absolute inset-0 bg-brand-500 rounded-2xl opacity-20 transition-transform duration-300"></div>
              <img
                src="/profile-updated.jpg"
                alt="Milakshi Vithana"
                className="relative rounded-2xl shadow-xl w-full max-w-sm object-cover aspect-[3/4] transition-transform duration-300"
              />
            </div>
          </div>

          <div className="md:col-span-8 space-y-6 text-lg text-slate-600 dark:text-slate-300 about-reveal">
            <p className="leading-relaxed">
              {PERSONAL_INFO.summary}
            </p>

          </div>
        </div>
      </div>
    </section>
  );
};

export default About;