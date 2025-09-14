import Contacts from "./Contacts";
import Links from "./Links";
import TechStack from "./TechStack";

function Footer() {
  return (
    <div className="flex h-full py-2 px-6 flex-row left-0 bg-background-secondary opacity-90 w-full justify-between items-center px-2 h-12 border-b-2 border-border-light inset-shadow-sm inset-shadow-accent/40">
      <Links />
      <Contacts />
      <TechStack />
    </div>
  );
}

export default Footer;
