import Business from '@/components/business'
import Partner from '@/components/partners'
import Process from '@/components/process'
import DomainTabs from '@/components/service/domain-tab'
import EventsSection from '@/components/service/event'
import CustomPageBanner from '@/components/shared/custom-page-banner'
import SlidingService from '@/components/sliding-service'
import React from 'react'

const ServicePage = () => {
  return (
    <div className='bg-white text-black'>
        <CustomPageBanner
        text="Our Services" />
        <Business />
        <div className='mt-10'>
          <Process />
        </div>
        {/* <Services /> */}
        <DomainTabs />
        <SlidingService />
        <EventsSection />
        <Partner />
    </div>
  )
}

export default ServicePage