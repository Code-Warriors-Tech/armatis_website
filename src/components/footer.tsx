/* eslint-disable @typescript-eslint/no-explicit-any */
import WrapperLayout from '@/layout/wrapper-layout'
import React from 'react'
import { Facebook, Instagram, Linkedin, Youtube } from 'lucide-react'
import CustomText from './shared/custom-text'

const IconCard = ({ icon, link }: { icon: React.ReactNode, link: string }) => {
  return (
    <a href={link} className='bg-white text-black w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-gray-200 transition'>
      {icon}
    </a>
  )
}

const ContectCard = ({ title, data }: { title: string; data: string }) => {
  return (
    <div className='flex items-start gap-3'>
      <CustomText as="span" text={`${title}:`} className='font-bold'  />
      <CustomText as="p" text={data} className='text-[16px]'  />
    </div>
  )
}

const FooterCard = ({
  title,
  paragraph,
  children,
}: {
  title: string
  paragraph: string
  children: React.ReactNode
}) => {
  return (
    <div>
      <CustomText as="h1" text={title} className="mb-5 font-bold text-2xl text-white"  />
      <CustomText as="p" text={paragraph} className="text-lg md:text-xl text-white"  />
      <div className='mt-5'>{children}</div>
    </div>
  )
}

const Footer = () => {
  return (
    <div className='bg-[#14212B] text-white'>
      <WrapperLayout className='mx-auto py-20'>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
          <FooterCard
            title='About Amarits'
            paragraph='We strive to business solutions ideal for small & large projects with customized project requirements.'
          >
            <div className='mt-3 flex items-center gap-3'>
              <IconCard link="https://www.facebook.com/profile.php?id=61573456057874" icon={<Facebook size={20}/>} />
              <IconCard link="https://amarits.com/team/#" icon={<Youtube size={20} />} />
              <IconCard link='https://amarits.com/team/#' icon={<Instagram size={20} />} />
              <IconCard link="https://www.linkedin.com/company/amarits-consulting" icon={<Linkedin size={20} />} />
            </div>
          </FooterCard>

          <FooterCard title='Contact Us' paragraph=''>
            <div className='space-y-3'>
              <ContectCard title='Address' data='Pc. 9 de Abril, 26, 4200-422 Porto Portugal' />
              <ContectCard title='Mail' data='amarits.consulting@gmail.com' />
              <ContectCard title='Phone/WhatsApp/Telegram' data='+351 961539027' />
            </div>
          </FooterCard>

          <FooterCard title='Our Newsletter' paragraph=''>
            <div className='space-y-3'>
              <div className='bg-white rounded-full px-10 py-4'>
                <input
                  type='text'
                  className='w-full text-black text-sm outline-0'
                  placeholder='Subscribe With Us'
                />
              </div>
              <button className='bg-[#ED1969] rounded-full px-10 py-5 transition font-bold'>
                Subscribe Now
              </button>
            </div>
          </FooterCard>
        </div>
        <div className='mt-10 border-t border-white/10 pt-5 text-center text-white/60 text-sm'>
          &copy; {new Date().getFullYear()} Amarits. All rights reserved.
        </div>
      </WrapperLayout>
    </div>
  )
}

export default Footer
