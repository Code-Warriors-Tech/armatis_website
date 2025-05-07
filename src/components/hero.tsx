'use client';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/effect-fade';
import CustomLinkButton from './shared/custom-link-button';

const slides = [
  {
    image: '/images/hero-1.jpg',
    heading: 'Business Solutions that Deliver',
    subtext: 'Empowering brands with strategy, design, and digital excellence.',
  },
  {
    image: '/images/hero-2.jpg',
    heading: 'Your Trusted Consultancy Partner',
    subtext: 'We help companies grow, adapt, and succeed in competitive markets.',
  },
  {
    image: '/images/hero-3.jpg',
    heading: 'Data-Driven Strategies',
    subtext: 'Turn insights into action with our expert consultancy services.',
  },
];

const HeroProfessional = () => {
  return (
    <section className="w-full h-[100vh] grid grid-cols-1 md:grid-cols-2 bg-[#14212B] text-white overflow-hidden">
      {/* Left: Content */}
      <div className="flex flex-col justify-center px-8 md:px-16 z-10">
        <div className="max-w-xl space-y-6">
          <p className="text-sm uppercase font-medium tracking-widest">Strategy & Innovation</p>
          <h1 className="text-4xl md:text-6xl font-bold leading-tight">
            Transform Your Business with Expert Guidance
          </h1>
          <p className="text-lg">
            Discover modern consultancy services tailored to your business needs. Grow with confidence and clarity.
          </p>
          <div className="pt-4">
            <CustomLinkButton text='Get Free Consultation' />
          </div>
        </div>
      </div>

      {/* Right: Image Carousel */}
      <div className="relative h-full w-full">
        <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-black/40 z-10"></div>
        <Swiper
          modules={[Autoplay, EffectFade]}
          autoplay={{ delay: 5000, disableOnInteraction: false }}
          loop
          effect="fade"
          className="w-full h-full"
        >
          {slides.map((slide, index) => (
            <SwiperSlide key={index}>
              <div
                className="w-full h-full bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              ></div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default HeroProfessional;
