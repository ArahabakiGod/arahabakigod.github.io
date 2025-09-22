import React from "react";
import type { HeroImageProps } from "./types";
import HeroAvatar from "../../../assets/HeroAvatar.png";

const HeroImage: React.FC<HeroImageProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <img
        className="w-48 h-48 rounded-full border-2 overflow-hidden shadow-xl"
        src={HeroAvatar}
      ></img>
    </div>
  );
};

export default HeroImage;
