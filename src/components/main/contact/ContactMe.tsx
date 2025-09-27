import React, { useState } from "react";
import { Mail } from "lucide-react";
import { Button } from "../../common";
import { ContactModal } from "../../modal";
import SocialLinks from "./SocialLinks";
import TextSection from "./TextSection";
import type { ContactMeProps } from "./types";
import { useTranslation } from "../../../hooks/useTranslation";
import { getSectionStyles } from "../sectionStyles";

const ContactMe: React.FC<ContactMeProps> = ({ className = "" }) => {
  const { t } = useTranslation("portfolio");
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleOpenModal = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div className={className + " items-center"} id="contact-me">
      <TextSection className={getSectionStyles.left()} />

      <div className={getSectionStyles.right()}>
        <SocialLinks className="mb-8 w-[100%]" />

        <Button
          variant="primary"
          size="lg"
          onClick={handleOpenModal}
          icon={<Mail className="w-5 h-5" />}
          className="
              px-8 py-4 text-lg font-semibold
              hover:scale-105 transition-transform duration-200
              shadow-lg hover:shadow-xl w-[66%] max-w-xl
            "
        >
          {t("hero.contactMe")}
        </Button>
      </div>

      <ContactModal isOpen={isModalOpen} onClose={handleCloseModal} />
    </div>
  );
};

export default ContactMe;
