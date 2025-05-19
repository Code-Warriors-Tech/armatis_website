'use client';

import React, { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import CustomText from '../shared/custom-text';

interface AccordionProps {
  title: string;
  content: string;
}

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  const toggleAccordion = () => setIsOpen((prev) => !prev);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all">
      <div
        onClick={toggleAccordion}
        className={`flex justify-between items-center cursor-pointer p-4 transition-colors duration-300 ${
          isOpen ? 'bg-[#ED1969] text-white' : ''
        }`}
      >
        <CustomText as="h3" text={title} className={`text-lg font-medium ${isOpen ? 'text-white' : 'text-black'}`} />
        <span>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-[max-height] duration-500 ease-in-out"
      >
        <div className="p-4 text-gray-600">
          <CustomText as="p" text={content} className="text-sm" />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
