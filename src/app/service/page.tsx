import Business from '@/components/business'
import Partner from '@/components/partners'
import Services from '@/components/services'
import CustomPageBanner from '@/components/shared/custom-page-banner'
import SlidingService from '@/components/sliding-service'
import React from 'react'

const ServicePage = () => {
  return (
    <div className='bg-white'>
        <CustomPageBanner
            text="Our Services"
        />
        <Business />
        <Services />
        <SlidingService />
        <Partner />
    </div>
  )
}

export default ServicePage