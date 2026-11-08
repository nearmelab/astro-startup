import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

interface HeroProps {
    lang: 'en' | 'ar';
    title: string;
    subtitle: string;
    cta: string;
}

const Hero: React.FC<HeroProps> = ({ lang, title, subtitle, cta }) => {
    const heroRef = useRef(null);

    useEffect(() => {
        const tl = gsap.timeline();
        tl.fromTo('.hero-title', { y: -50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' })
          .fromTo('.hero-subtitle', { y: 50, opacity: 0 }, { y: 0, opacity: 1, duration: 1, ease: 'power3.out' }, "-=0.8")
          .fromTo('.hero-cta', { scale: 0, opacity: 0 }, { scale: 1, opacity: 1, duration: 0.5, ease: 'back.out(1.7)' }, "-=0.5");
    }, []);

    return (
        <section ref={heroRef} className="py-20 bg-gray-100 dark:bg-gray-900 text-center">
            <div className="container mx-auto px-6">
                <h1 className="hero-title text-4xl md:text-6xl font-bold text-gray-800 dark:text-white">{title}</h1>
                <p className="hero-subtitle mt-4 text-lg md:text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
                <div className="hero-cta mt-8">
                    <a href={`/${lang}/contact`} className="px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition-colors duration-300">{cta}</a>
                </div>
            </div>
        </section>
    );
};

export default Hero;
