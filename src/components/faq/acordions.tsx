'use client';
import React, { useRef, useState } from 'react';
import { Plus, Minus } from 'lucide-react';
import CustomTinyTitle from '../shared/custom-tiny-title';
import CustomParagraph from '../shared/custom-paragraph';

type AccordionProps = {
  title: string;
  content: string;
};

const Accordion: React.FC<AccordionProps> = ({ title, content }) => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="border border-gray-200 rounded-xl overflow-hidden transition-all">
      <div
        onClick={() => setIsOpen(!isOpen)}
        className={`flex justify-between items-center cursor-pointer p-4 transition-colors duration-300 ${
          isOpen ? 'bg-[#ED1969] text-white' : ''
        }`}
      >
        <CustomTinyTitle text={title} className="text-black text-lg font-medium"/>
        <span className={`${isOpen ? 'text-white' : ''}`}>
          {isOpen ? <Minus size={20} /> : <Plus size={20} />}
        </span>
      </div>

      <div
        ref={contentRef}
        style={{
          maxHeight: isOpen ? contentRef.current?.scrollHeight : 0,
        }}
        className="overflow-hidden transition-max-height duration-500 ease-in-out"
      >
        <div className="p-4 text-gray-600">
          <CustomParagraph text={content} className="text-lg md:text-xl" />
        </div>
      </div>
    </div>
  );
};

export default Accordion;
