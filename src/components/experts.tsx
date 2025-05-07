import WrapperLayout from '@/layout/wrapper-layout'
import React from 'react'
import TitleBadge from './shared/title-badge'
import CustomLinkButton from './shared/custom-link-button'
import CustomSubtitle from './shared/custom-subtitle'

const Experts = () => {
  return (
    <div className="mt-20 px-4 sm:px-6 lg:px-8">
      <div className="relative rounded-xl overflow-hidden">
        {/* Background Image */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{ backgroundImage: `url('/images/bg-01.jpg')` }}
        />

        {/* Dark Transparent Overlay */}
        <div className="absolute inset-0 bg-black opacity-75" />

        {/* Content */}
        <div className="relative py-16 px-4 sm:px-10 lg:px-20">
          <WrapperLayout>
            <div className="max-w-4xl mx-auto text-center space-y-6">
              <TitleBadge text="What We Are the Experts" className="mx-auto" />
              <CustomSubtitle text="Trusted by the world's fastest growing business" className="text-white" />

              <CustomLinkButton text='Get Started' />
            </div>
          </WrapperLayout>
        </div>
      </div>
    </div>
  )
}

export default Experts
