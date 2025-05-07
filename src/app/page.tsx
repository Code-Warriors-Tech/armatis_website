import AboutUs from "@/components/about-us";
import ChoseUs from "@/components/chose-us";
import Experts from "@/components/experts";
import FaqContent from "@/components/faq-content";
import HeroCarousel from "@/components/hero";
import Portfolio from "@/components/portfolio";
import Services from "@/components/services";
import SlidingService from "@/components/sliding-service";
import React from "react";

export default function Home() {
  return (
    <div className="py-20 bg-blue-50 text-[#575A7B]">
      <HeroCarousel />
      <AboutUs />
      <Services />
      <SlidingService />
      <ChoseUs />
      <Experts />
      <Portfolio />
      <FaqContent />
    </div>
  );
}
