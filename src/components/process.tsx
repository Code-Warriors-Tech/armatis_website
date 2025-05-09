import WrapperLayout from '@/layout/wrapper-layout';
import React from 'react';
import TitleBadge from './shared/title-badge';
import CustomSubtitle from './shared/custom-subtitle';

interface ProcessCardProps {
  icon: string;
  title: string;
  index: number;
}

const ProcessCard: React.FC<ProcessCardProps> = ({ icon, title, index }) => {
  return (
    <div className="w-fit mx-auto">
      <div className="p-5 bg-white shadow-xl rounded-full relative flex items-center justify-center">
        <div className="absolute top-2 right-2 w-8 h-8 bg-[#ED1969] text-white text-sm font-semibold rounded-full flex items-center justify-center shadow">
          0{index}
        </div>
        <div className="flex items-center justify-center border border-gray-200 rounded-full p-8">
          <img src={icon} alt="icon" className="w-[60px]" />
        </div>
      </div>
      <h2 className="text-center text-xl font-bold mt-5">{title}</h2>
    </div>
  );
};

const Process: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <WrapperLayout>
        <div>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <TitleBadge text="WORK PROCESS" className="mx-auto" />
            <CustomSubtitle text="Our project exeution process" className="text-black" />
          </div>
        </div>
        <div className="lg:flex justify-center items-center gap-10">
          <ProcessCard icon="/icons/icon-15.png" title="Business Planning" index={1} />
          <img src="/icons/arrow.png" alt="icon" className="w-[60px] hidden lg:block" />
          <ProcessCard icon="/icons/icon-16.png" title="Information Collection" index={2} />
          <img src="/icons/arrow.png" alt="icon" className="w-[60px] hidden lg:block" />
          <ProcessCard icon="/icons/icon-17.png" title="Report Analysis" index={3} />
          <img src="/icons/arrow.png" alt="icon" className="w-[60px] hidden lg:block" />
          <ProcessCard icon="/icons/icon-18.png" title="Consultation Solution" index={4} />
        </div>
      </WrapperLayout>
    </div>
  );
};

export default Process;
