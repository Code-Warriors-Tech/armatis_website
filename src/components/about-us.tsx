'use client';
import WrapperLayout from "@/layout/wrapper-layout";
import React, { useState } from 'react';
import TitleBadge from "./shared/title-badge";
import CustomSubtitle from "./shared/custom-subtitle";
import CustomParagraph from "./shared/custom-paragraph";
import CustomTinyTitle from "./shared/custom-tiny-title";

const tabs = [
  {
    text: 'DISCOVER',
    desc: 'We see our clients as strategic partners. This means in close cooperation. We see our clients as strategic partners. This means in close cooperation.'
  },
  {
    text: 'PLANNING',
    desc: 'We see our clients as strategic partners. This means in close cooperation. We see our clients as strategic partners. This means in close.'
  },
  {
    text: 'MARKETING',
    desc: 'We see our clients as strategic partners. This means in close cooperation. We see our clients as strategic partners. This means in close.'
  }
];

const AboutUs = () => {
  const [active, setActive] = useState('DISCOVER');
  const activeDesc = tabs.find((item) => item.text === active);

  return (
    <div className="py-10 lg:py-20">
      <WrapperLayout className="mx-auto grid lg:grid-cols-2 items-center gap-16">
        
        {/* Image Section */}
        <div className="relative h-[560px] flex items-center gap-5 justify-center">
          <div className="w-[40%] h-full rounded-lg overflow-hidden hidden lg:block">
            <img src="/images/about-01.jpg" alt="about-01" className="w-full h-full object-cover" />
          </div>
          <div className="w-full lg:w-[60%] h-full rounded-lg overflow-hidden">
            <img src="/images/about-02.jpg" alt="about-02" className="w-full h-full object-cover" />
          </div>

          {/* Experience Card */}
          <div className="absolute -bottom-9 md:-bottom-5 left-1/2 transform -translate-x-1/2 bg-white shadow-lg flex flex-col sm:flex-row items-center gap-5 rounded-lg w-[80%] sm:w-[400px] max-w-[450px] overflow-hidden">
            <img src="/images/service-03.jpg" alt="experience" className="w-[130px] h-[100px] object-cover hidden sm:block" />
            <div className="flex items-center gap-4">
              <img src="/icons/icon-01.png" alt="icon" className="w-[50px]" />
              <div className="py-6 md:py-0">
                <CustomTinyTitle text="42 years" className="text-lg font-semibold text-black"/>
                <CustomParagraph text="Working Experience" className="text-sm " />
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <TitleBadge text="ABOUT US" />
          <CustomSubtitle text=" Your partner in corporate strategy" />

          {/* Tabs */}
          <div className="flex flex-wrap gap-6 my-4">
            {tabs.map((item, index) => (
              <p
                key={index}
                className={`cursor-pointer text-sm font-semibold ${
                  active === item.text ? 'text-[#ED1969] underline' : ''
                }`}
                onClick={() => setActive(item.text)}
              >
                {item.text}
              </p>
            ))}
          </div>

          {/* Description */}
           <CustomParagraph text={activeDesc?.desc} />

          {/* Progress Example */}
          <div className="mb-8 max-w-[550px]">
            <div className="flex justify-between text-sm font-semibold">
              <span>Business Strategy</span>
              <span>50%</span>
            </div>
            <div className="w-full bg-gray-200 h-2 rounded-full mt-2">
              <div className="w-[50%] h-full bg-[#ED1969] rounded-full"></div>
            </div>
          </div>

          {/* Team Lead */}
          <div className="flex items-center gap-3">
            <img
              src="/images/service-01.jpg"
              alt="team"
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div>
              <CustomTinyTitle text="Young Savage" className="text-black font-medium"/>
              <CustomParagraph text='Head of Corporate' className="text-sm" />
            </div>
          </div>
        </div>
      </WrapperLayout>
    </div>
  );
};

export default AboutUs;
