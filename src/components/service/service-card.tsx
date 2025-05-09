import React from 'react';
import CustomParagraph from '../shared/custom-paragraph';
import CustomTinyTitle from '../shared/custom-tiny-title';
import Link from 'next/link';

interface ServiceCardProps {
  image: string;
  icon: string;
  title: string;
  desc: string;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ image, icon, title, desc }) => {
  return (
    <div className="relative">
      {/* Image container with fixed height */}
      <div className="w-full h-[250px] overflow-hidden rounded-lg">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>

      <div className="mx-auto bg-white w-[85%] rounded-lg relative -top-10 flex shadow-md pt-5">
        <div className="relative -left-5 w-[65px]">
          <div className="w-20 h-20 mx-auto flex items-center justify-center bg-[#ED1969] shadow">
            <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          </div>
        </div>
        <div className="px-5">
          <CustomTinyTitle text={title} className="text-black font-semibold text-2xl"/>
          <CustomParagraph text={desc} className="py-3 text-lg" />
          <div className="mb-3">
            <Link href="#" className="text-black underline hover:text-[#ED1969] text-sm">EXPLORE MORE</Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
