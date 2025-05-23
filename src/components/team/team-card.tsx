import React from 'react';
import CustomText from "../shared/custom-text";

// You can import your icons from a library like `react-icons` or use custom icons.
import { Facebook, Twitter, Linkedin } from 'lucide-react'

// Interface for team member
interface TeamCardProps {
  image: string;
  name: string;
  position: string;
  desc: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, position, socialMedia, desc }) => {
  return (
    <div className="px-5 py-10 group bg-white shadow rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out relative overflow-hidden">
      <div className="absolute left-0 top-0 w-full h-full bg-white -translate-x-100 ease-in-out duration-300 group-hover:translate-x-0 p-5">
        <CustomText as="h3" text={name} className="text-2xl font-semibold text-gray-800"  />
        <CustomText as="p" text={position} className="text-[#ED1969] mb-4 uppercase font-semibold"  />
        <div className='h-[190px] line-clamp-5'> 
          <CustomText as="span" text={desc} className="text-sm"  />       
        </div>
        <div className="flex items-center justify-center mt-5 gap-6 ">
          <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className='bg-gray-100 rounded-full p-3'>
            <Facebook size={20}/>
          </a>
          <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className='bg-gray-100 rounded-full p-3'>
            <Twitter size={20} />
          </a>
          <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className='bg-gray-100 rounded-full p-3'>
            <Linkedin size={20} />
          </a>
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="w-42 h-42 mb-4 overflow-hidden rounded-full">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <CustomText as="h3" text={name} className="text-2xl font-semibold text-gray-800"  />
        <CustomText as="p" text={position} className="text-[#ED1969] mb-4 uppercase font-semi"  />

        <div className="flex gap-6">
          <a href={socialMedia.facebook} target="_blank" rel="noopener noreferrer" className='bg-gray-100 rounded-full p-3'>
            <Facebook size={20}/>
          </a>
          <a href={socialMedia.twitter} target="_blank" rel="noopener noreferrer" className='bg-gray-100 rounded-full p-3'>
            <Twitter size={20} />
          </a>
          <a href={socialMedia.linkedin} target="_blank" rel="noopener noreferrer" className='bg-gray-100 rounded-full p-3'>
            <Linkedin size={20} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default TeamCard;
