import React from 'react';
import WrapperLayout from '@/layout/wrapper-layout';
import TitleBadge from './shared/title-badge';
import CustomLinkButton from './shared/custom-link-button';
import { reasonData } from '@/constant/data';
import CustomText from './shared/custom-text';

// Interface for ReasonCard props
interface ReasonCardProps {
  icon: string;
  title: string;
  desc: string;
}

const ReasonCard: React.FC<ReasonCardProps> = ({ icon, title, desc }) => {
  return (
    <div className="flex items-start gap-5">
      <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-full flex items-center justify-center bg-[#ED1969] shadow-md shrink-0">
        <img src={icon} alt="icon" className="w-8 h-8 sm:w-10 sm:h-10 object-contain" />
      </div>
      <div>
        <CustomText as="h3" text={title} className="text-black font-medium text-lg" />
        <CustomText as="p" text={desc} className="text-sm" />
      </div>
    </div>
  );
};

const ChoseUs: React.FC = () => {
  return (
    <div className="mt-10 lg:mt-20 px-4 sm:px-6 lg:px-8">
      <WrapperLayout>
        {/* Intro Section */}
        <div className="grid gap-10 lg:grid-cols-2 items-center">
          <div className="lg:hidden">
            <img src="/images/about-10.jpg" className='w-full h-full' />
          </div>
          <div className="space-y-5">
            <TitleBadge text="Why Choose Us" />
            <CustomText as="h1" text="Why choose our business solutions?" className='text-3xl md:text-5xl font-bold text-black' />
            <CustomText as="p" text="Our team is a diverse network of consultants and industry professionals with a global mindset and a collaborative culture. We work to understand your issues and are driven to ask better questions."
              className="text-lg md:text-xl"
            />

            <CustomLinkButton href="/about" text='More About Us' />
          </div>

            <div className='hidden lg:block'>
              <img src="/images/about-10.jpg" className='w-full h-full' />
            </div>
          <div /> 
        </div>

        {/* Reason Cards Section */}
        <div className="grid gap-6 lg:mt-12 md:grid-cols-2 lg:grid-cols-3">
          {reasonData.map((item, index) => (
            <ReasonCard key={index} icon={item.icon} title={item.title} desc={item.desc} />
          ))}
        </div>
      </WrapperLayout>
    </div>
  );
};

export default ChoseUs;
