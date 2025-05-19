import React from 'react';
import CustomFormInput from '../shared/custom-input';
import CustomText from '../shared/custom-text';

interface ContactFormProps {
  formData: {
    name: string;
    email: string;
    subject?: string;
    contact?: string;
    message: string;
  };
  handleChange: (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const ContactForm: React.FC<ContactFormProps> = ({ formData, handleChange, handleSubmit }) => (
  <form onSubmit={handleSubmit} className="mt-5 space-y-5">
    <div className="flex flex-col md:flex-row items-center justify-between lg:gap-5">
      <div className="w-full">
        <CustomFormInput
          label="Name"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="Your full name"
        />
      </div>
      <div className="w-full">
        <CustomFormInput
          label="Email"
          name="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="your@email.com"
        />
      </div>
    </div>

    <div className="flex flex-col md:flex-row items-center justify-between lg:gap-5">
      <div className="w-full">
        <CustomFormInput
          label="Your Subject"
          name="subject"
          value={formData.subject || ''}
          onChange={handleChange}
          placeholder="Your subject here"
        />
      </div>
      <div className="w-full">
        <CustomFormInput
          label="Contact Number"
          name="contact"
          type="tel"
          value={formData.contact || ''}
          onChange={handleChange}
          placeholder="Your phone number"
        />
      </div>
    </div>

    <CustomFormInput
      label="Message"
      name="message"
      isTextArea
      value={formData.message}
      onChange={handleChange}
      placeholder="Write your message here..."
    />

    <button
      type="submit"
      className="mt-4 bg-[#ED1969] text-white px-6 py-2 rounded hover:bg-[#d3155c] transition"
    >
      <CustomText as="span" text="Send Message" className="text-sm"  />
    </button>
  </form>
);

export default ContactForm;
