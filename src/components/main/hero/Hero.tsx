import React from "react";
import TextSection from "./TextSection";
import ButtonsSection from "./ButtonsSection";
import HeroImage from "./HeroImage";
import type { HeroProps } from "./types";

const Hero: React.FC<HeroProps> = ({ className = "" }) => {
  return (
    <div>
      <HeroImage />
      <div>
        <TextSection />
        <ButtonsSection />
      </div>
    </div>
  );
};

export default Hero;
