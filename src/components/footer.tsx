/* eslint-disable @typescript-eslint/no-explicit-any */
import WrapperLayout from '@/layout/wrapper-layout'
import React from 'react'
import { Facebook, Twitter, Instagram, Linkedin } from 'lucide-react'

const IconCard = ({ icon }: { icon: React.ReactNode }) => {
  return (
    <div className='bg-white text-black w-[40px] h-[40px] rounded-full flex items-center justify-center hover:bg-gray-200 transition'>
      {icon}
    </div>
  )
}

const ContectCard = ({ title, data }: { title: string; data: string }) => {
  return (
    <div className='flex items-center gap-3'>
      <span className='font-bold'>{title}:</span>
      <p className='text-[16px]'>{data}</p>
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
      <h1 className='mb-5 font-bold text-2xl text-white'>{title}</h1>
      <p className='text-[16px] text-white/80'>{paragraph}</p>
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
              <IconCard icon={<Facebook size={20}/>} />
              <IconCard icon={<Twitter size={20} />} />
              <IconCard icon={<Instagram size={20} />} />
              <IconCard icon={<Linkedin size={20} />} />
            </div>
          </FooterCard>

          <FooterCard title='Contact Us' paragraph=''>
            <div className='space-y-3'>
              <ContectCard title='Address' data='66 Guild Street 512B, Great North Town.' />
              <ContectCard title='Mail' data='addyour@email' />
              <ContectCard title='Phone' data='(+44) 123 456 789' />
              <ContectCard title='Fax Id' data='(+1) 523-567-987' />
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
