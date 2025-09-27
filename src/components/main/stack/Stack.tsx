import React, { useState } from "react";
import { getSectionStyles } from "../sectionStyles";
import ActivityFieldSwitch from "./ActivityFieldSwitch";
import Technologies from "./Technologies";
import TextSection from "./TextSection";
import type { StackProps } from "./types";

const Stack: React.FC<StackProps> = ({ className }) => {
  const [selectedField, setSelectedField] = useState<"frontend" | "backend">(
    "frontend"
  );

  const handleFieldChange = (field: "frontend" | "backend") => {
    setSelectedField(field);
  };

  return (
    <div className={`${className} items-center`} id="my-stack">
      <TextSection className={getSectionStyles.left()} />

      <div className={getSectionStyles.right()}>
        <ActivityFieldSwitch
          className="mb-6"
          selectedField={selectedField}
          onFieldChange={handleFieldChange}
        />

        <Technologies className="mb-8" selectedField={selectedField} />
      </div>
    </div>
  );
};

export default Stack;
