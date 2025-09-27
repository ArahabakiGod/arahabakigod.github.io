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
      2xl:mb-0 2xl:mr-8"
      />
      <div
        className="flex flex-col justify-between border-accent pt-8 border-0 border-t-2
      2xl:p-0 2xl:pl-12 2xl:border-l-2 2xl:border-t-0"
      >
        <TextSection />
        <ButtonsSection className="flex justify-between" />
      </div>
    </div>
  );
};

export default Hero;
