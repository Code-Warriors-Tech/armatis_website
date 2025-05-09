'use client';
import WrapperLayout from "@/layout/wrapper-layout";
import React, { useState } from 'react';
import TitleBadge from "./shared/title-badge";
import CustomSubtitle from "./shared/custom-subtitle";
import CustomParagraph from "./shared/custom-paragraph";
import CustomTinyTitle from "./shared/custom-tiny-title";
import CountUp from "react-countup";

const tabs = [
  {
    text: 'Mission',
    desc: 'At AMARITS Consulting, we provide innovative Information Systems and Technology solutions to drive digital transformation and business success. We also specialize in the organization and management of technical and scientific events, fostering knowledge exchange and collaboration. Our mission is to deliver tailored, high-quality solutions that empower organizations, researchers, and professionals to achieve their goals with efficiency, integrity, and excellence.',
  },
  {
    text: 'Vision',
    desc: 'Our vision is to be a trusted leader in Information Systems and Technology consulting, driving innovation and digital transformation. We strive to set the standard in technical and scientific event management, fostering collaboration and knowledge exchange. Through cutting-edge solutions and ethical excellence, we aim to shape the future of organizations, research, and technology.',
  },
  {
    text: 'STRATEGIC PARTNER',
    desc: 'We work side-by-side with businesses, institutions, and research bodies to align vision with execution, offering tailored, innovative strategies for sustainable success.',
  },
];

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
          <CustomParagraph text={activeDesc?.desc} className="text-lg md:text-xl" />

          {/* Expertise Summary */}
          <div className="my-8">
            <p className="font-semibold mb-2 text-lg text-black">Values</p>
            <p className="text-md text-gray-700 mb-4">
              At AMARITS Consulting, our values define who we are and guide our actions in every project, partnership, and engagement. We are committed to upholding the highest standards of integrity, innovation, and excellence in everything we do.
              We are committed to delivering high-quality, tailored solutions that empower organizations, researchers, and professionals to achieve their goals with efficiency, integrity, and excellence.
            </p>
          </div>

          {/* Team Lead */}
          <div className="flex items-center gap-3">
            <img
              src="/images/partners/alvaro.jpg"
              alt="team"
              className="w-[60px] h-[60px] rounded-full object-cover"
            />
            <div>
              <CustomTinyTitle text="Álvaro Rocha " className="text-black font-medium"/>
              <CustomParagraph text="Chairman, AMARITS Consulting" className="text-lg md:text-xl" />
            </div>
          </div>
        </div>
        
      </WrapperLayout>

      {/* Values Section */}
      <div className="py-10 lg:py-20">
        <WrapperLayout className="mx-auto items-center gap-16">
          <ul className="list-disc ml-5 text-lg text-gray-700 space-y-1">
              <li>Innovation & Excellence – We embrace cutting-edge technologies and best practices to deliver high-quality, forward-thinking solutions in Information Systems and Technology consulting and event management.</li>
              <li>Integrity & Ethics – We uphold the highest ethical standards, ensuring transparency, trust, and responsibility in all our interactions, from consulting engagements to organizing technical and scientific events.</li>
              <li>Client-Centric Approach – Our clients’ success is our priority. We tailor our solutions to their unique needs, providing personalized strategies that drive measurable impact and long-term value.</li>
              <li>Continuous Learning & Adaptability – In a rapidly evolving technological landscape, we champion lifelong learning and adaptability, staying ahead of emerging trends to offer cutting-edge solutions and ensure knowledge-driven event experiences.</li>
              <li>Sustainability & Social Responsibility – We are committed to sustainable digital transformation and responsible event management, ensuring that our solutions and initiatives contribute positively to society and the environment.</li>
              <li>Integrity & Ethics – We uphold the highest ethical standards, ensuring transparency, trust, and responsibility in all our interactions, from consulting engagements to organizing technical and scientific events.</li>
              <li>Continuous Learning & Adaptability – In a rapidly evolving technological landscape, we champion lifelong learning and adaptability, staying ahead of emerging trends to offer cutting-edge solutions and ensure knowledge-driven event experiences.</li>
              <li>Collaboration & Partnership – We believe in the power of collaboration. By working closely with our clients, partners, and stakeholders, we foster a culture of knowledge exchange and innovation that drives success.</li>
            </ul>
            <p className="text-lg text-gray-700">By staying true to these values, AMARITS Consulting strives to be a trusted and transformative force in Information Systems, Technology Consulting, and Scientific Event Management worldwide.</p>
        </WrapperLayout>
      </div>
    </div>
  );
};

export default AboutUs;
