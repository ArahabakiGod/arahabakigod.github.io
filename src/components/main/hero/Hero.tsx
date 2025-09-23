import React from "react";
import TextSection from "./TextSection";
import ButtonsSection from "./ButtonsSection";
import HeroImage from "./HeroImage";
import type { HeroProps } from "./types";

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div className={className + " items-center"} id="about-me">
      <HeroImage
        className="mb-4 
      xl:mb-0 xl:mr-8"
      />
      <div
        className="flex flex-col justify-between border-accent pt-8 border-0 border-t-2
      xl:p-0 xl:pl-12 xl:border-l-2 xl:border-t-0"
      >
        <TextSection />
        <ButtonsSection className="flex justify-between" />
      </div>
    </div>
  );
};

export default Hero;
