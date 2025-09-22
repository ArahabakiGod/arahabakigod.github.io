import ContactMe from "./contact/ContactMe";
import Hero from "./hero/Hero";
import MyProjects from "./projects/MyProjects";
import MySoftSkills from "./soft/MySoftSkills";
import Stack from "./stack/Stack";

function Main() {
  const commonClassName = "my-8 py-8 mx-4 p-2 flex border-b-3 border-border";

  return (
    <div className="mx-24 h-full pt-2 bg-background opacity-90 border-x-2 border-border-light">
      <Hero className={commonClassName} />
      <MyProjects className={commonClassName} />
      <Stack className={commonClassName} />
      <MySoftSkills className={commonClassName} />
      <ContactMe className={commonClassName} />
    </div>
  );
}

export default Main;
