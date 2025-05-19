import React from 'react';
import CustomText from './custom-text';

interface CustomFormInputProps {
  label: string;
  name: string;
  type?: string;
  isTextArea?: boolean;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  placeholder?: string;
}

const CustomFormInput: React.FC<CustomFormInputProps> = ({
  label,
  name,
  type = 'text',
  isTextArea = false,
  value,
  onChange,
  placeholder,
}) => {
  return (
    <div className="mb-6">
      <CustomText as="label" text={label} className="block text-sm font-bold text-black mb-2" />
      {isTextArea ? (
        <textarea
          id={name}
          name={name}
          value={value}
          onChange={onChange}
          rows={5}
          placeholder={placeholder}
          className="w-full border border-gray-300 text-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ED1969]"
        />
      ) : (
        <input
          id={name}
          name={name}
          type={type}
          value={value}
          onChange={onChange}
          placeholder={placeholder}
          className="w-full border border-gray-300 text-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#ED1969]"
        />
      )}
    </div>
  );
};

export default CustomFormInput;
