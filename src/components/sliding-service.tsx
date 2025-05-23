import React from 'react';
import CustomText from './shared/custom-text';

const SlidingService = () => {
  return (
    <div className="relative overflow-hidden pt-5">
      <div className="animate-marquee-infinite flex whitespace-nowrap">
        <CustomText as="h1" text="IT Strategy • Research Support • Project Implementation • Data Analytics • Event Management • Digital Transformation • Capacity Building • Monitoring & Evaluation • Technical Consulting • Public & Private Sector Solutions" 
          className="text-[24px] sm:text-[32px] lg:text-[48px] xl:text-[80px] font-bold text-black mx-10" 
        />
        <CustomText as="h1" text="IT Strategy • Research Support • Project Implementation • Data Analytics • Event Management • Digital Transformation • Capacity Building • Monitoring & Evaluation • Technical Consulting • Public & Private Sector Solutions" 
          className="text-[24px] sm:text-[32px] lg:text-[48px] xl:text-[80px] font-bold text-black mx-10"
        />
      </div>
    </div>
  );
};

export default SlidingService;
