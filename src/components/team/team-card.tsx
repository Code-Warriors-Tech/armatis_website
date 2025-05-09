import React from 'react';

// You can import your icons from a library like `react-icons` or use custom icons.
import { Facebook, Twitter, Linkedin } from 'lucide-react'

// Interface for team member
interface TeamCardProps {
  image: string;
  name: string;
  position: string;
  socialMedia: {
    facebook: string;
    twitter: string;
    linkedin: string;
  };
}

const TeamCard: React.FC<TeamCardProps> = ({ image, name, position, socialMedia }) => {
  return (
    <div className="px-5 py-10 bg-white border border-gray-200 rounded-lg hover:shadow-lg transition-shadow duration-300 ease-in-out">
      <div className="flex flex-col items-center">
        <div className="w-42 h-42 mb-4 overflow-hidden rounded-full">
          <img src={image} alt={name} className="w-full h-full object-cover" />
        </div>

        <h3 className="text-2xl font-semibold text-gray-800">{name}</h3>
        <p className="text-[#ED1969] mb-4 uppercase font-semi">{position}</p>

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
