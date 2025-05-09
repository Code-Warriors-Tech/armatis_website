'use client';
import WrapperLayout from "@/layout/wrapper-layout";
import React, { useState } from 'react';
import TitleBadge from "./shared/title-badge";
import CustomSubtitle from "./shared/custom-subtitle";
import CustomParagraph from "./shared/custom-paragraph";
import CustomTinyTitle from "./shared/custom-tiny-title";
import CountUp from "react-countup";
import { tabs } from "@/constant/data";


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
                <h3 className="text-lg font-semibold text-black">
                  <CountUp end={10} duration={2} /> years
                </h3>

                <CustomParagraph text="Working Experience" className="text-sm " />
              </div>
            </div>
          </div>
        </div>

        {/* Text Section */}
        <div>
          <TitleBadge text="ABOUT US" />
          <CustomSubtitle text="Modern consulting for digital innovation" />

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
          <CustomParagraph text={activeDesc?.desc || ''} className="text-lg md:text-xl" />

          {/* Expertise Summary */}
          <div className="my-8">
            <p className="font-semibold mb-2 text-lg text-black">Our Core Expertise:</p>
            <ul className="list-disc ml-5 text-lg text-gray-700 space-y-1">
              <li>Digital transformation through IT strategy & AI integration</li>
              <li>Comprehensive technical and scientific event management</li>
              <li>Cybersecurity, system architecture, and optimization</li>
            </ul>
          </div>

          {/* Team Lead */}
          <div className="flex items-center gap-3">
            <img
              src="/images/service-01.jpg"
              alt="team"
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div>
              <CustomTinyTitle text="Dr. Amara Ekwe" className="text-black font-medium"/>
              <CustomParagraph text="Principal Consultant, AMARITS Consulting" className="text-lg md:text-xl" />
            </div>
          </div>
        </div>

      </WrapperLayout>
    </div>
  );
};

export default AboutUs;
