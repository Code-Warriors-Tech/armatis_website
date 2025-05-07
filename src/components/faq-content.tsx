'use client'
import React from 'react';
import CountUp from 'react-countup';
import WrapperLayout from '@/layout/wrapper-layout';
import Accordion from './faq/acordions';
import TitleBadge from './shared/title-badge';
import CustomSubtitle from './shared/custom-subtitle';
import CustomTinyTitle from './shared/custom-tiny-title';
import CustomParagraph from './shared/custom-paragraph';

const FaqContent = () => {
  const faqs = [
    {
      title: 'Why We Are the Best Company',
      content:
        'Tempora incidunt ut labore et dolore exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    },
    {
      title: 'What Services Do We Offer?',
      content:
        'We provide strategic consulting, digital marketing, and tailored business solutions to boost your growth.',
    },
    {
      title: 'How Can You Reach Us?',
      content:
        'You can contact us through our support page, email, or phone number listed in the contact section.',
    },
  ];

  return (
    <div className="mt-10">
      <WrapperLayout className="grid grid-cols-1 lg:grid-cols-2 items-center gap-10">
        {/* Left Section */}
        <div>
          <TitleBadge text="Why Choose Us" />
          <CustomSubtitle text="We provide advanced business solutions" />


          <div className="flex items-center gap-5">
            <img
              src="/images/about-02.jpg"
              alt="Business Planning"
              className="w-[100px] h-[100px] rounded-full object-cover"
            />

            <div>
              <div className="flex items-center gap-2 mb-2">
                <h3 className="text-[#ED1969] text-4xl font-bold">
                  <CountUp end={22} duration={2} />+
                </h3>
                <h4 className="text-black text-2xl font-bold">Awards Winner</h4>
              </div>

              <div className="border-t pt-2 border-gray-200">
                <CustomTinyTitle text='Business Planning' className="text-black font-medium"/>
                <CustomParagraph text='We always try to provide you our best business consulting service.' className="text-sm" />
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
