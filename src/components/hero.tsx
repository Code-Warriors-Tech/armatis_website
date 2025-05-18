'use client';
import { useEffect, useState } from 'react';
import CustomLinkButton from './shared/custom-link-button';
import { slides } from '@/constant/data';

const HeroProfessional = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [fade, setFade] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentIndex((prev) => (prev + 1) % slides.length);
        setFade(true);
      }, 300); // fade-out duration
    }, 5000); // change every 5s

    return () => clearInterval(interval);
  }, []);

  const { image, heading, subtext } = slides[currentIndex];

  return (
    <section className="w-full h-[100vh] grid grid-cols-1 md:grid-cols-2 bg-[#14212B] text-white overflow-hidden relative">
      {/* Left: Content */}
      <div className="flex flex-col justify-center px-8 md:px-16 z-20 transition-opacity duration-500" style={{ opacity: fade ? 1 : 0 }}>
        <div className="max-w-xl space-y-6">
          <p className="text-sm uppercase font-medium tracking-widest">
            IT Strategy • Research • Innovation
          </p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            {heading}
          </h1>
          <p className="text-lg">{subtext}</p>
          <div className="pt-4">
            <CustomLinkButton href="/contact" text="Request a Consultation" />
          </div>
        </div>
      </div>

      {/* Right: Background Image */}
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 z-10" />
        <img
          key={image}
          src={image}
          alt={heading}
          className={`w-full h-full object-cover absolute inset-0 transition-opacity duration-1000 ease-in-out z-0 ${fade ? 'opacity-100' : 'opacity-0'}`}
        />
      </div>
    </section>
  );
};

export default HeroProfessional;
