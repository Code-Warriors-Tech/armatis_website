'use client';
import React from 'react';
import WrapperLayout from '@/layout/wrapper-layout';
import PortfolioCard from './portfolios/portfolio-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules'; // Import Autoplay
import TitleBadge from './shared/title-badge';
import CustomLinkButton from './shared/custom-link-button';
import CustomSubtitle from './shared/custom-subtitle';

const portfolioItems = [
  { image: '/images/portfolio-01.jpg', tag: 'Business', title: 'Business Consultation' },
  { image: '/images/portfolio-02.jpg', tag: 'Agency', title: 'Data Analytics' },
  { image: '/images/portfolio-03.jpg', tag: 'Marketing', title: 'Digital Marketing' },
  { image: '/images/portfolio-04.jpg', tag: 'FINANCE', title: 'Finance Strategy' },
];

const Portfolio = () => {
  return (
    <div className="mt-20">
      <WrapperLayout>
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-0">
          <div className="max-w-xl">
            <TitleBadge text="Portfolio" />
            <CustomSubtitle text="We are a creative digital marketing agency" />
          </div>

          <CustomLinkButton text='View Portfolio' />
        </div>
      </WrapperLayout>

      <div className="p-5 lg:mt-10">
        <Swiper
          modules={[Pagination, Autoplay]} // Add Autoplay module
          spaceBetween={20}
          loop={true} // Enable infinite loop
          autoplay={{
            delay: 3000, // Delay between slides (3s)
            disableOnInteraction: false, // Keep autoplay even after interaction
          }}
          pagination={{ clickable: true }}
          slidesPerView={1}
          breakpoints={{
            640: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
            1280: { slidesPerView: 4 },
          }}
        >
          {portfolioItems.map((item, index) => (
            <SwiperSlide key={index}>
              <PortfolioCard
                image={item.image}
                tag={item.tag}
                title={item.title}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Portfolio;
