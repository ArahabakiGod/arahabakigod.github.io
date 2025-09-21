import { useTranslation } from "react-i18next";
import { Button } from "../../common";
import SocialLinks from "./SocialLinks";
import TextSection from "./TextSection";
import type { ContactMeProps } from "./types";

const ContactMe: React.FC<ContactMeProps> = () => {
  const { t } = useTranslation("common");
  return (
    <div>
      <TextSection />
      <SocialLinks />
      <Button>{t("contactMe")}</Button>
    </div>
  );
};

export default ContactMe;
