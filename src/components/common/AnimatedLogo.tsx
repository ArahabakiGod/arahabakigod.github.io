import { motion } from "framer-motion";

interface AnimatedLogoProps {
  className?: string;
  isHovered?: boolean;
}

const AnimatedLogo: React.FC<AnimatedLogoProps> = ({
  className = "",
  isHovered = false,
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="28 94.187 396.024 233.803"
      className={className}
      preserveAspectRatio="xMidYMid meet"
      style={{ overflow: "hidden" }}
    >
      <rect
        style={{
          stroke: "rgb(0, 0, 0)",
          fill: "rgb(31, 41, 55)",
          strokeWidth: 1,
        }}
        x="165.9"
        y="164.1"
        width="120"
        height="94"
      />

      <motion.path
        d="M 269.301 94.187 L 337.901 279.899 L 200.7 279.899 Z"
        style={{
          stroke: "rgb(0, 0, 0)",
          fill: "rgb(37, 99, 235)",
          strokeWidth: 1,
        }}
        animate={{ x: isHovered ? 43.1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />

      <motion.path
        d="M 182.901 327.99 L 251.501 142.278 L 114.3 142.278 Z"
        style={{
          stroke: "rgb(0, 0, 0)",
          fill: "rgb(96, 165, 250)",
          strokeWidth: 1,
        }}
        animate={{ x: isHovered ? -43.1 : 0 }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
      />
    </svg>
  );
};

export default AnimatedLogo;
