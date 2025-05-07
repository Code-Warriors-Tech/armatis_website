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
              desc="We build custom IT systems to enhance performance, lower costs, and align technology with business objectives." 
            />

            <ServiceCard 
              image="/images/service-02.jpg" 
              icon="/icons/icon-03.png" 
              title="Technical and Scientific Event Management" 
              desc="We manage scientific events with expert planning, logistics, and tech support to ensure smooth execution." 
            />

            <ServiceCard 
              image="/images/service-03.jpg" 
              icon="/icons/icon-04.png" 
              title="Business Planning" 
              desc="We provide market-driven consulting and planning services to help businesses scale, innovate, and thrive." 
            />
          </div>
        </WrapperLayout>
      </div>
    </div>
  );
};

export default Services;
