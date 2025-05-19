import { Mail, Phone, MapPin } from 'lucide-react';
import CustomText from '../shared/custom-text';

const iconStyle =
  'w-20 h-20 flex items-center justify-center rounded-full bg-white text-[#ED1969] mx-auto';
const sectionStyle = 'text-center space-y-2';

const ContactDetails = () => (
  <div className="border border-gray-200 rounded-lg p-10 w-full md:w-[526px] space-y-8 bg-[#FFF1F5]">
    
    {/* Email Section */}
    <div className={sectionStyle}>
      <div className={iconStyle}>
        <Mail size={30} />
      </div>
      
      <CustomText as="h3" text="Email" className="text-black font-semibold text-lg" />
      <a
        href="E-mail: amarits.consulting@gmail.com"
        className="text-blue-600 hover:underline"
      >
        amarits.consulting@gmail.com
      </a>
    </div>

    {/* Phone Section */}
    <div className={`${sectionStyle} border-y border-gray-200 py-8`}>
      <div className={iconStyle}>
        <Phone size={30} />
      </div>
      <CustomText as="h3" text="Phone" className="text-black font-semibold text-lg" />
      <CustomText as="p" text="+351 961539027" className='text-sm text-gray-500' />
    </div>

    {/* Office Location Section */}
    <div className={sectionStyle}>
      <div className={iconStyle}>
        <MapPin size={30} />
      </div>
      <CustomText as="h3" text="Worldwide:" className="text-black font-semibold text-lg" />
      <CustomText as="p" text=" Pc. 9 de Abril, 26, 4200-422 Porto, Portugal" className='text-sm text-gray-500' />
    </div>
    
  </div>
);

export default ContactDetails;
