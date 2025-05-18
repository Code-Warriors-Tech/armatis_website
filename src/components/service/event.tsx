// components/EventsSection.tsx
'use client';

import { eventServices } from '@/constant/data';
import React from 'react';
import CustomLinkButton from '../shared/custom-link-button';

const EventsSection = () => {
  return (
    <section className=" bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        <div className="max-w-6xl mx-auto text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Events at AMARITS Consulting</h2>
          <p className="text-gray-600 max-w-3xl mx-auto">
            We specialize in managing and organizing technical and scientific events, delivering modern,
            seamless, and impactful experiences tailored to your goals.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {eventServices.map((service, idx) => (
            <div
              key={idx}
              className="bg-white shadow-md hover:shadow-lg rounded-xl p-6 border border-gray-200 transition-all"
            >
              <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-gray-700 font-medium mb-3">
            📩 Contact us today to discuss how we can support your event needs!
          </p>
          <CustomLinkButton href="/contact" text="Contact Us" />
        </div>
      </div>
    </section>
  );
};

export default EventsSection;
