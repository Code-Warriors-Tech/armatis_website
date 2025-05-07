/* eslint-disable @typescript-eslint/no-explicit-any */
import CustomFormInput from "../shared/custom-input";

const ContactForm = ({ formData, handleChange, handleSubmit }: any) => (
    <form onSubmit={handleSubmit} className="mt-5">
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
            placeholder="Your Subject Here"
          />
        </div>
        <div className="w-full">
          <CustomFormInput
            label="Contact Number"
            name="contact"
            type="tel"
            value={formData.contact || ''}
            onChange={handleChange}
            placeholder="Your Phone Number"
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
        className="mt-4 bg-[#ED1969] text-white px-6 py-2 rounded hover:bg-[#ED1969] transition"
      >
        Send Message
      </button>
    </form>
  );

  export default ContactForm