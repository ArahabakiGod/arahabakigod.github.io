import { useTranslation } from "react-i18next";
import { Typography } from "../common";
import { Phone, Mail } from "lucide-react";
import type { FooterContact } from "./types";
import { getContactsData } from "../../constants";

const Contacts: React.FC = () => {
  const { t } = useTranslation("portfolio");

  const contacts = getContactsData(t);
  const getIcon = (type: FooterContact["type"]) => {
    switch (type) {
      case "phone":
        return <Phone className="w-3 h-3" />;
      case "email":
        return <Mail className="w-3 h-3" />;
      default:
        return null;
    }
  };

  return (
    <div className="w-full md:w-[25%]">
      <Typography variant="h4" color="secondary" className="mb-4">
        {t("footer.contact")}
      </Typography>
      <div className="space-y-2">
        {contacts.map((contact) => (
          <div key={contact.type}>
            <Typography variant="caption" color="muted" className="mb-2 block">
              {contact.label}
            </Typography>
            <a
              href={contact.href}
              className="
                flex items-center gap-2 rounded-lg group
                text-text-secondary hover:text-primary 
                hover:bg-hover transition-all duration-200
              "
            >
              <span className="text-text-muted group-hover:text-primary transition-colors">
                {getIcon(contact.type)}
              </span>
              <span className="font-medium">{contact.value}</span>
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contacts;
