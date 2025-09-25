import React from "react";
import { Typography } from "../common";
import { getFooterTechnologies } from "../../constants";
import { useTranslation } from "../../hooks/useTranslation";

const TechStack: React.FC = () => {
  const { t } = useTranslation("portfolio");

  const technologies = getFooterTechnologies(t);

  return (
    <div className="w-full md:w-[25%]">
      <Typography variant="h4" color="secondary" className="mb-4">
        {t("footer.techStack")}
      </Typography>

      <div className="flex flex-wrap gap-2">
        {technologies.map((tech) => (
          <span
            key={tech.name}
            className={`
              px-3 py-1.5 rounded-full text-sm font-medium
              transition-all duration-200 cursor-default
              hover:scale-105 hover:shadow-sm
              ${tech.color || "bg-primary/10 text-primary"}
            `}
          >
            {tech.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
