'use client';
import React from 'react';
import WrapperLayout from '@/layout/wrapper-layout';
import PortfolioCard from './portfolios/portfolio-card';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import TitleBadge from './shared/title-badge';
import CustomLinkButton from './shared/custom-link-button';
import CustomSubtitle from './shared/custom-subtitle';
import { portfolioItems } from '@/constant/data';

const Portfolio = () => {
  return (
    <div className="mt-20">
      <WrapperLayout>
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-6 lg:gap-0">
          <div className="max-w-xl">
            <TitleBadge text="OUR WORK" />
            <CustomSubtitle text="Tailored Consulting for Technology & Research" />
          </div>

          <CustomLinkButton href="/products" text="View All Projects" />
        </div>
      </WrapperLayout>

      <div className="p-5 lg:mt-10">
        <Swiper
          modules={[Pagination, Autoplay]}
          spaceBetween={20}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
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
