// components/EventsSection.tsx
'use client';

import { eventServices } from '@/constant/data';
import React from 'react';
import CustomLinkButton from '../shared/custom-link-button';
import CustomText from '../shared/custom-text';

const EventsSection = () => {
  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <CustomText as="h1" text={'Events at AMARITS Consulting'} className="text-3xl md:text-4xl font-bold mb-4"  />
          <CustomText as="p" text={'We specialize in managing and organizing technical and scientific events, delivering modern, seamless, and impactful experiences tailored to your goals.'} 
            className="text-gray-600 max-w-3xl mx-auto"  />
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 border border-gray-200 transition-all"
            >
              <CustomText as="h3" text={service.title} className="text-xl font-semibold mb-2"  />
              <CustomText as="p" text={service.desc} className="text-gray-600 text-sm"  />
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <CustomText as="p" text="📩 Contact us today to discuss how we can support your event needs!" className="text-gray-700 font-medium mb-3"  />
          <CustomLinkButton href="/contact" text="Contact Us" />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
