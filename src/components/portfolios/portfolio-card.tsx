'use client';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import React from 'react';
import CustomText from '../shared/custom-text';

interface PortfolioCardProps {
  image: string;
  tag: string;
  title: string;
}

const PortfolioCard: React.FC<PortfolioCardProps> = ({ image, tag, title }) => {
  return (
    <div className="relative w-full h-[400px] rounded-lg overflow-hidden group">
      {/* Background Image */}
      <img src={image} alt="portfolio" className="absolute w-full h-full object-cover top-0 left-0" />

      {/* Dark Overlay - stays full until mouse leaves */}
      <div className="absolute w-full h-full top-0 left-0 bg-black opacity-50 transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-in-out z-10" />

      {/* Card Content - slides in from bottom on hover */}
      <div className="relative z-20 h-full flex items-end">
        {/* Left Side Content */}
        <div className="bg-white w-[90%] mx-auto py-5 px-8 rounded-xl transform transition-transform duration-500 ease-in-out mb-5 flex justify-between items-center gap-4">
          <div>
            <CustomText as="h3" text={tag} className="uppercase font-semibold text-lg text-[#ED1969]"  />
            <CustomText as="p" text={title} className="text-black font-medium text-lg"  />
          </div>

          {/* Right Side Icon Button */}
          <Link
            href="/portfolio-details"
            className="bg-[#ED1969] text-white p-3 rounded-lg hover:bg-[#d0175f] transition"
          >
            <ArrowUpRight size={20} />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PortfolioCard;
