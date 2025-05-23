'use client'
import React from 'react';
import CountUp from 'react-countup';
import WrapperLayout from '@/layout/wrapper-layout';
import Accordion from './faq/acordions';
import TitleBadge from './shared/title-badge';
import { faqs } from '@/constant/data';
import CustomText from './shared/custom-text';

const FaqContent = () => {

  return (
    <div className="mt-10">
      <WrapperLayout className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Section */}
        <div>
          <TitleBadge text="Why Partner With Us" />
          <CustomText as="h1" text="Empowering Impact Through Strategy, Technology & Research" className='text-3xl md:text-5xl font-bold text-black' />

          <div className="flex items-center gap-5 mt-6">
            <img
              src="/images/about-02.jpg" // Replace with actual image if available
              alt="AMARITS Consulting"
              className="w-[100px] h-[100px] rounded-full object-cover"
            />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-[#ED1969] text-4xl font-bold">
                  <CountUp end={10} duration={2} />+
                </h3>
                <CustomText as="h4" text="Years of Expertise" className="text-black text-2xl font-bold" />
              </div>

              <div className="border-t pt-2 border-gray-200">
                <CustomText as="h1" text="Proven Track Record" className="text-black font-medium" />
                <CustomText as="p" text="Delivering results-driven solutions across Africa and beyond." className="text-sm"/>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: FAQs */}
        <div className="space-y-4">
          {faqs.map((item, index) => (
            <Accordion key={index} title={item.title} content={item.content} />
          ))}
        </div>
      </WrapperLayout>
    </div>
  );
};

export default FaqContent;
