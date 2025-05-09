'use client';
import React, { useState } from 'react';
import Partner from '@/components/partners';
import CustomPageBanner from '@/components/shared/custom-page-banner';
import CustomParagraph from '@/components/shared/custom-paragraph';
import CustomSubtitle from '@/components/shared/custom-subtitle';
import TitleBadge from '@/components/shared/title-badge';
import WrapperLayout from '@/layout/wrapper-layout';
import ContactForm from '@/components/contact/contact-form';
import ContactDetails from '@/components/contact/contact-details';

// Define the form data structure
interface FormData {
  name: string;
  email: string;
  subject: string;
  contact: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    contact: '',
    message: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log('Submitted:', formData);
    // handle submission logic
  };

  return (
    <div className="bg-white">
      <CustomPageBanner text="Contact Us" />
      <div className="mt-20">
        <WrapperLayout className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="w-full lg:w-[746px] border border-gray-200 rounded-lg p-5 lg:p-10">
            <TitleBadge text={'Contact Us'} />
            <CustomSubtitle text="Let's get in touch" className="text-black text-xl" />
            <CustomParagraph text="Let us know who you are and what you're looking for below, and we'll get back to you within 24 hours." />
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
            />
          </div>
          <ContactDetails />
        </WrapperLayout>
      </div>
      <Partner />
    </div>
  );
};

export default ContactPage;
