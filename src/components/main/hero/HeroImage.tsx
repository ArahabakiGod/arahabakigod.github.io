import React from "react";
import type { HeroImageProps } from "./types";
import HeroAvatar from "../../../assets/HeroAvatar.png";

const HeroImage: React.FC<HeroImageProps> = ({ className = "" }) => {
  return (
    <div className={className}>
      <img
        className="size-24 min-w-24 rounded-full border-2 overflow-hidden shadow-xl
        sm:min-w-32 sm:size-32 
        md:min-w-48 md:size-48"
        src={HeroAvatar}
      ></img>
    </div>
  );
};

export default HeroImage;
