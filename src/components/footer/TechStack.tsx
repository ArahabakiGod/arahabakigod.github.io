import React from "react";
import { Typography } from "../common";
import type { TechStackItem } from "./types";
import { useTranslation } from "react-i18next";

const TechStack: React.FC = () => {
  const { t } = useTranslation("portfolio");

  const technologies: TechStackItem[] = [
    {
      name: "React",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      name: "TypeScript",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200",
    },
    {
      name: "Tailwind",
      color: "bg-cyan-100 text-cyan-800 dark:bg-cyan-900 dark:text-cyan-200",
    },
    {
      name: "Vite",
      color:
        "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200",
    },
    {
      name: "i18n",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200",
    },
    {
      name: "Framer Motion",
      color: "bg-pink-100 text-pink-800 dark:bg-pink-900 dark:text-pink-200",
    },
  ];

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
