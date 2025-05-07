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
              title="Business Strategy" 
              desc="We focus on the best practices for IT solutions and services." 
            />
            <ServiceCard 
              image="/images/service-02.jpg" 
              icon="/icons/icon-03.png" 
              title="Business Planning" 
              desc="We focus on the best practices for IT solutions and services." 
            />
            <ServiceCard 
              image="/images/service-03.jpg" 
              icon="/icons/icon-04.png" 
              title="Finances Guidance" 
              desc="We focus on the best practices for IT solutions and services." 
            />
          </div>
        </WrapperLayout>
      </div>
    </div>
  );
};

export default Services;
