import React, { useRef, useLayoutEffect } from 'react';
import { EDUCATION } from '../data';
import { GraduationCap, Calendar } from 'lucide-react';

const Education: React.FC = () => {
    const compRef = useRef<HTMLDivElement>(null);

    useLayoutEffect(() => {
        if (!window.gsap || !window.ScrollTrigger) return;

        const ctx = window.gsap.context(() => {
            window.gsap.from(".edu-reveal", {
                scrollTrigger: {
                    trigger: ".edu-container",
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
        <section id="education" className="h-auto py-16 md:py-24 bg-gray-50 dark:bg-dark-card transition-colors" ref={compRef}>
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 edu-container">
                <div className="mb-12 edu-reveal">
                    <h2 className="text-3xl font-display font-bold text-slate-900 dark:text-white relative inline-block">
                        Education
                        <span className="absolute -bottom-2 left-0 w-1/3 h-1 bg-brand-500 rounded-full"></span>
                    </h2>
                </div>

                <div className="space-y-8">
                    {EDUCATION.map((edu, index) => (
                        <div
                            key={index}
                            className="bg-white dark:bg-dark-bg p-8 rounded-2xl shadow-sm border border-slate-100 dark:border-slate-800 edu-reveal hover:shadow-md transition-shadow"
                        >
                            <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                <div>
                                    <h3 className="text-xl font-bold text-slate-900 dark:text-white flex items-center gap-2">
                                        <GraduationCap className="text-brand-500" size={24} />
                                        {edu.degree}
                                    </h3>
                                    <p className="text-lg text-slate-700 dark:text-slate-300 mt-1">{edu.institution}</p>
                                </div>
                                <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 px-4 py-1 rounded-full text-sm font-medium w-fit">
                                    <Calendar size={16} />
                                    {edu.years}
                                </div>
                            </div>

                            <p className="text-slate-600 dark:text-slate-400 leading-relaxed mb-6">
                                {edu.description}
                            </p>


                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Education;
