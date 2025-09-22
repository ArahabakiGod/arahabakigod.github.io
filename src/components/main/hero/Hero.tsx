import React from "react";
import TextSection from "./TextSection";
import ButtonsSection from "./ButtonsSection";
import HeroImage from "./HeroImage";
import type { HeroProps } from "./types";

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div className={className} id="about-me">
      <HeroImage className="relative mr-12 border-r-2 border-accent pr-8" />
      <div className="flex flex-col justify-between">
        <TextSection />
        <ButtonsSection className="flex justify-between" />
      </div>
    </div>
  );
};

export default Hero;
