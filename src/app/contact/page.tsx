/* eslint-disable @typescript-eslint/no-explicit-any */
'use client';
import React, { useState } from 'react';
import Partner from '@/components/partners';
import CustomPageBanner from '@/components/shared/custom-page-banner';
import TitleBadge from '@/components/shared/title-badge';
import WrapperLayout from '@/layout/wrapper-layout';
import ContactForm from '@/components/contact/contact-form';
import ContactDetails from '@/components/contact/contact-details';
import CustomText from '@/components/shared/custom-text';
import { toast } from 'react-toastify';
import { sendMessageApi } from '@/services/contact.service';

// Define the form data structure
interface FormData {
  name: string;
  email: string;
  subject: string;
  contact: string;
  message: string;
}

const ContactPage: React.FC = () => {
  const [loading, setLoading] = useState(false);
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

  const validateEmail = (email: string) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // Basic validation
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast.error("Please fill in all required fields (Name, Email, Message).");
      return;
    }

    if (!validateEmail(formData.email)) {
      toast.error("Please enter a valid email address.");
      return;
    }

    setLoading(true);
    try {
      const response = await sendMessageApi(formData);
      toast.success(response.message);
      setFormData({ name: '', email: '', subject: '', contact: '', message: '' }); // clear form
    } catch (error: any) {
      toast.error(error?.response?.data?.message || "An error occurred. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white">
      <CustomPageBanner text="Contact Us" />
      <div className="mt-20">
        <WrapperLayout className="flex flex-col lg:flex-row items-start justify-between gap-10">
          <div className="w-full lg:w-[746px] border border-gray-200 rounded-lg p-5 lg:p-10">
            <TitleBadge text={'Contact Us'} />
            <CustomText as="h1" text="Let's get in touch" className="text-black text-xl"  />
            <CustomText as="p" text="Let us know who you are and what you're looking for below, and we'll get back to you within 24 hours." className="text-sm text-gray-500"  />
            <ContactForm
              formData={formData}
              handleChange={handleChange}
              handleSubmit={handleSubmit}
              loading={loading}
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
