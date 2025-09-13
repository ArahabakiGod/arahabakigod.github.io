import { Typography } from "../common";
import NavMenu from "./NavMenu";

function Header() {
  return (
    <div className="fixed flex flex-row left-0 top-0 z-20 bg-background-secondary w-full justify-between items-center px-2 h-12 border-b-2 border-border-light shadow-xl shadow-accent/40">
      <Typography variant="h1" color="primary">
        PLACEHOLDER
      </Typography>
      <NavMenu />
      <div className="flex flex-row space-x-1">
        {/*Language Switch - md*/}
        {/*Theme Switch - md*/}
      </div>
    </div>
  );
}

export default Header;
