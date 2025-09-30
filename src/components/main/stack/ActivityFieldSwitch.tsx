import React from "react";
import { Button } from "../../common";
import { useTranslation } from "../../../hooks/useTranslation";
import type { ActivityFieldSwitchProps } from "./types";

interface ActivityFieldSwitchComponentProps extends ActivityFieldSwitchProps {
  selectedField: "frontend" | "backend";
  onFieldChange: (field: "frontend" | "backend") => void;
}

const ActivityFieldSwitch: React.FC<ActivityFieldSwitchComponentProps> = ({
  className = "",
  selectedField,
  onFieldChange,
}) => {
  const { t } = useTranslation("portfolio");
  return (
    <div className={`w-[100%] ${className}`}>
      <Button
        variant="primary"
        color="custom"
        onClick={() => onFieldChange("frontend")}
        className={`w-[50%] transition-all duration-200 rounded-r-none border-r-0 border-border hover:border-border-hover ${
          selectedField === "frontend"
            ? "bg-accent-dark"
            : "hover:bg-accent/40  active:bg-accent/60"
        }`}
      >
        {t("stack.frontend")}
      </Button>

      <Button
        variant={selectedField === "backend" ? "primary" : "outlined"}
        color="custom"
        onClick={() => onFieldChange("backend")}
        className={`w-[50%] transition-all duration-200 rounded-l-none border-l-0 border-border hover:border-border-hover ${
          selectedField === "backend"
            ? "bg-accent-dark"
            : "hover:bg-accent/40  active:bg-accent/60"
        }`}
      >
        {t("stack.backend")}
      </Button>
    </div>
  );
};

export default ActivityFieldSwitch;
