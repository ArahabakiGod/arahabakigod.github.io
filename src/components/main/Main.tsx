import ContactMe from "./contact/ContactMe";
import Hero from "./hero/Hero";
import MyProjects from "./projects/MyProjects";
import MySoftSkills from "./soft/MySoftSkills";
import Stack from "./stack/Stack";

function Main() {
  const bottomBorderState = " border-b-3";

  const baseClassName = "my-4 py-8 mx-4 p-2 flex border-border flex-col";
  const smClassName = "";
  const mdClassName = "";
  const lgClassName = "";
  const xlClassName = "xl:flex-row";
  const xxlClassName = "2";
  const commonClassName = `${baseClassName} ${smClassName} ${mdClassName} ${lgClassName} ${xlClassName} ${xxlClassName}`;
  return (
    <div className="mx-1 md:mx-8 xl:mx-16 2xl:mx-24 h-full bg-background opacity-90 border-x-2 border-border-light">
      <Hero className={commonClassName + bottomBorderState} />
      <MyProjects className={commonClassName + bottomBorderState} />
      <ContactMe className={commonClassName + bottomBorderState} />
      <Stack className={commonClassName + bottomBorderState} />
      <MySoftSkills className={commonClassName + " sm:border-b-0"} />
    </div>
  );
}

export default Main;
