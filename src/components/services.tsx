import React from 'react';
import WrapperLayout from '@/layout/wrapper-layout';
import ServiceCard from './service/service-card';
import TitleBadge from './shared/title-badge';
import CustomSubtitle from './shared/custom-subtitle';

const Services = () => {
  return (
    <div className="mt-10 lg:mt-20 px-0 lg:px-5">
      <div className="bg-[#14212B] p-6 lg:p-20 rounded-xl">
        <WrapperLayout>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <TitleBadge text="SERVICES" className="mx-auto" />
            <CustomSubtitle text="We are dedicated to serve you all time" className="text-white"/>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">
          <ServiceCard 
            image="/images/service-01.jpg" 
            icon="/icons/icon-02.png" 
            title="Information Technology and Systems Solutions" 
            desc="We help businesses unlock digital transformation through customized IT systems, software development, cloud integration, and infrastructure optimization. Our solutions are designed to enhance performance, reduce costs, and align technology with your business goals." 
          />

          <ServiceCard 
            image="/images/service-02.jpg" 
            icon="/icons/icon-03.png" 
            title="Technical and Scientific Event Management" 
            desc="We deliver full-spectrum management for conferences, seminars, and scientific exhibitions—handling logistics, technology, speaker coordination, and audience engagement. Our team ensures every event is professionally executed with precision and impact." 
          />

          <ServiceCard 
            image="/images/service-03.jpg" 
            icon="/icons/icon-04.png" 
            title="Business Planning" 
            desc="We provide strategic business consulting, market research, and operational planning to help companies launch, scale, and optimize. Our approach blends insight with innovation, guiding your business toward sustainable success in a competitive landscape." 
          />

          </div>
        </WrapperLayout>
      </div>
    </div>
  );
};

export default Services;
