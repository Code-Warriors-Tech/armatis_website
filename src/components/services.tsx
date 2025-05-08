'use client';
import React from 'react';
import WrapperLayout from '@/layout/wrapper-layout';
import ServiceCard from './service/service-card';
import TitleBadge from './shared/title-badge';
import CustomSubtitle from './shared/custom-subtitle';

// Import Swiper
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

const Services = () => {
  return (
    <div className="mt-10 lg:mt-20 px-0 lg:px-5">
      <div className="bg-[#14212B] p-6 lg:p-20 rounded-xl">
        <WrapperLayout>
          <div className="text-center max-w-2xl mx-auto mb-10">
            <TitleBadge text="SERVICES" className="mx-auto" />
            <CustomSubtitle text="We are dedicated to serve you all time" className="text-white"/>
          </div>

          <Swiper
            spaceBetween={30}
            slidesPerView={1}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            breakpoints={{
              768: { slidesPerView: 2 },
              1024: { slidesPerView: 3 },
            }}
            modules={[Autoplay]}
          >
            <SwiperSlide>
              <ServiceCard 
                image="/images/service-01.jpg" 
                icon="/icons/icon-10.png" 
                title="Financial Guidance" 
                desc="We focus on the best practices for it solutions and services."
              />
            </SwiperSlide>

            <SwiperSlide>
              <ServiceCard 
                image="/images/service-02.jpg" 
                icon="/icons/icon-11.png" 
                title="Business Campaign" 
                desc="We focus on the best practices for it solutions and services." 
              />
            </SwiperSlide>

            <SwiperSlide>
              <ServiceCard 
                image="/images/service-03.jpg" 
                icon="/icons/icon-12.png" 
                title="Business Planning" 
                desc="We focus on the best practices for it solutions and services." 
              />
            </SwiperSlide>

            <SwiperSlide>
              <ServiceCard 
                image="/images/service-10.jpg" 
                icon="/icons/icon-13.png" 
                title="Business Planning" 
                desc="We focus on the best practices for it solutions and services." 
              />
            </SwiperSlide>
          </Swiper>
        </WrapperLayout>
      </div>
    </div>
  );
};

export default Services;
