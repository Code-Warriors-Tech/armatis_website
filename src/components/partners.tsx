'use client';
import React from 'react';
import WrapperLayout from '@/layout/wrapper-layout';
import { partnerLogos } from '@/constant/data';

const Partner = () => {
  return (
    <div className="py-10 lg:py-20 mt-20 bg-white">
      <WrapperLayout className="text-center">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-8 items-center justify-center">
          {partnerLogos.map((logo, index) => (
            <div key={index} className="w-full h-[60px] flex items-center justify-center">
              <img
                src={logo}
                alt={`partner-logo-${index}`}
                className="max-h-[40px] sm:max-h-[50px] lg:max-h-[60px] max-w-full object-contain grayscale hover:grayscale-0 transition duration-300"
              />
            </div>
          ))}
        </div>
      </WrapperLayout>
    </div>
  );
};

export default Partner;
