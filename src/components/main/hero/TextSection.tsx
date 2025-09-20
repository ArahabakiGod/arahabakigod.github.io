import React from "react";
import { Typography } from "../../common";
import type { TextSectionProps } from "./types";

const TextSection: React.FC<TextSectionProps> = ({ className = "" }) => {
  return (
    <div>
      <Typography variant="h2">Title</Typography>
      <Typography>Description</Typography>
    </div>
  );
};

export default TextSection;
