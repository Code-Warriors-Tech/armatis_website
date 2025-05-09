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
import { services } from '@/constant/data';

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
            {/* Map through the services array */}
            {services.map((service, index) => (
              <SwiperSlide key={index}>
                <ServiceCard
                  image={service.image}
                  icon={service.icon}
                  title={service.title}
                  desc={service.desc}
                />
              </SwiperSlide>
            ))}
          </Swiper>
        </WrapperLayout>
      </div>
    </div>
  );
};

export default Services;
