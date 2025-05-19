'use client';
import WrapperLayout from "@/layout/wrapper-layout";
import React, { useState } from 'react';
import TitleBadge from "./shared/title-badge";
import CountUp from "react-countup";
import { tabs } from "@/constant/data";
import CustomText from "./shared/custom-text";


const AboutUs = () => {
  const [active, setActive] = useState('TECH & SYSTEMS');
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
                <h3 className="text-lg font-semibold text-black flex items-center gap-2">
                  <CountUp end={10} duration={2} /> <CustomText as="p" text="years" className="text-lg" />
                </h3>

                <CustomText as="p" text="Working Experience" className="text-sm" />
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <TitleBadge text="ABOUT US" />
          <CustomText as="h1" text="Modern consulting for digital innovation" className="text-3xl md:text-5xl font-bold " />

          {/* Tabs */}
          <div className="flex flex-wrap gap-6 my-4">
            {tabs.map((item, index) => (
              <div key={index} onClick={() => setActive(item.text)}>
                <CustomText 
                  as="p" 
                  text={item.text}
                  className={`cursor-pointer text-sm font-semibold ${
                    active === item.text ? 'text-[#ED1969] underline' : ''
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Description */}
          <CustomText as="p" text={activeDesc?.desc || ''} className="text-md md:text-lg" />

          {/* Expertise Summary */}
          <div className="my-8">
            
            <CustomText as="p" text="Values" className="font-semibold mb-2 text-lg text-black" />
            <CustomText as="p" text="
              At AMARITS Consulting, our values define who we are and guide our actions in every project, partnership, and engagement. We are committed to upholding the highest standards of integrity, innovation, and excellence in everything we do.
              We are committed to delivering high-quality, tailored solutions that empower organizations, researchers, and professionals to achieve their goals with efficiency, integrity, and excellence." 
              className="text-md md:text-lg" 
            />
          </div>

          {/* Team Lead */}
          <div className="flex items-center gap-3">
            <img
              src="/images/partners/alvaro.jpg"
              alt="team"
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div>
              <CustomText as="p" text="Álvaro Rocha " className="text-black font-medium" />
              <CustomText as="h4" text="Chairman, AMARITS Consulting" className="text-lg md:text-xl" />
            </div>
          </div>
        </div>
        
      </WrapperLayout>
    </div>
  );
};

export default AboutUs;
