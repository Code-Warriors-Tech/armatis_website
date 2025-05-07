import React from 'react';
import CustomParagraph from '../shared/custom-paragraph';
import CustomTinyTitle from '../shared/custom-tiny-title';

interface ServiceCardProps {
  image: string;
  icon: string;
  title: string;
  desc: string;
}

const ServiceCard = ({ image, icon, title, desc }: ServiceCardProps) => {
  return (
    <div className="relative">
      <img src={image} alt={title} className="rounded-lg w-full h-auto object-cover" />
      <div className="text-center mx-auto bg-white w-[90%] rounded-lg relative -top-10 shadow-md">
        <div className="relative h-12 -top-10">
          <div className="w-20 h-20 rounded-full mx-auto flex items-center justify-center bg-white shadow">
            <img src={icon} alt={title} className="w-12 h-12 object-contain" />
          </div>
        </div>
        <div className="px-5 pb-5">
          <CustomTinyTitle text={title} className="text-black font-medium"/>
          <CustomParagraph text={desc} className="text-sm" />
        </div>
        <div className="border-t border-gray-200 py-3">
          <a href="#" className="text-sm text-[#ED1969] font-medium">Read More</a>
        </div>
      </div>
    </div>
  );
};

export default ServiceCard;
