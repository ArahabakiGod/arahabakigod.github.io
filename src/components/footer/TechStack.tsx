import { Typography } from "../common";

function TechStack() {
  return (
    <div className="flex flex-col">
      <Typography variant="h4" className="pb-1">
        This site made with:
      </Typography>
      <Typography>React TS</Typography>
      <Typography>Zustand</Typography>
      <Typography>i18next</Typography>
      <Typography>Tailwind</Typography>
    </div>
  );
}

export default TechStack;
