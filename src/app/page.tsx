import AboutUs from "@/components/about-us";
import ChoseUs from "@/components/chose-us";
import Experts from "@/components/experts";
import FaqContent from "@/components/faq-content";
import HeroCarousel from "@/components/hero";
import Partner from "@/components/partners";
import Portfolio from "@/components/portfolio";
import Process from "@/components/process";
import Services from "@/components/services";
import SlidingService from "@/components/sliding-service";
import React from "react";

export default function Home() {
  return (
    <div className=" bg-white text-[#575A7B]">
      <HeroCarousel />
      <AboutUs />
      <Process />
      <Services />
      <SlidingService />
      <ChoseUs />
      <Experts />
      <Portfolio />
      <FaqContent />
      <Partner />
    </div>
  );
}
