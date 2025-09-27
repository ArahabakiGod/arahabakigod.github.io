import ContactMe from "./contact/ContactMe";
import Hero from "./hero/Hero";
import MyProjects from "./projects/MyProjects";
import { getSectionStyles } from "./sectionStyles";
import MySoftSkills from "./soft/MySoftSkills";
import Stack from "./stack/Stack";

function Main() {
  return (
    <div className="mx-1 md:mx-4 xl:mx-12 2xl:mx-16 h-full bg-background opacity-90 border-x-2 border-border-light">
      <Hero className={getSectionStyles.main(true)} />
      <MyProjects className={getSectionStyles.main(true)} />
      <ContactMe className={getSectionStyles.main(true)} />
      <Stack className={getSectionStyles.main(true)} />
      <MySoftSkills className={getSectionStyles.main(false)} />
    </div>
  );
}

export default Main;
