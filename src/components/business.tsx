import WrapperLayout from '@/layout/wrapper-layout'
import React from 'react'
import TitleBadge from './shared/title-badge'
import CustomLinkButton from './shared/custom-link-button'
import { Check } from 'lucide-react'  // Import Check icon from Lucide
import Link from 'next/link'
import CustomText from './shared/custom-text'

const Business = () => {
  return (
    <div className="mt-10">
      <WrapperLayout className="mx-auto grid lg:grid-cols-2 gap-10 px-4 md:px-0">
        <div className="max-w-xl">
          <TitleBadge text="ABOUT Amarits Business" />
          <CustomText as="h1" text="Empowering businesses with innovative solutions" className='text-3xl md:text-5xl font-bold text-black' />
          <div>
            {/* First Check icon section */}
            <div className="flex items-center space-x-3 mt-4">
                <div className="flex items-center justify-center w-12 aspect-square border-2 border-green-500 rounded-full bg-white">
                    <Check className="text-green-500" size={24} />
                </div>
                <CustomText as="p" text="Our strategy is focused on delivering results through cutting-edge business solutions." className="text-lg md:text-xl" />
            </div>
            
            {/* Second Check icon section */}
            <div className="flex items-center space-x-3 mt-4">
              <div className="flex items-center justify-center w-12 aspect-square border-2 border-green-500 rounded-full bg-white">
                <Check className="text-green-500" size={24} />
              </div>
              <CustomText as="p" text="A broad range of satisfied clients rely on our services to successfully achieve their business goals" className="text-lg md:text-xl" />
            </div>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <CustomLinkButton href="/about" text="ABOUT OUR COMPANY" />
            <Link href="#" className="text-black underline hover:text-[#ED1969]">
              <CustomText as="span" text="DISCOVER HOW WE WORK" className="text-sm font-light" />
            </Link>
          </div>
        </div>

        <div className="flex justify-center">
          <img src="/images/business.jpg" alt="Business Image" className="rounded-lg w-full max-w-lg object-cover" />
        </div>
      </WrapperLayout>
    </div>
  )
}

export default Business
