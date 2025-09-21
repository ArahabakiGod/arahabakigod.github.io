import type { FooterContact } from "../components/footer/types";

export interface ContactInfo {
    phone: string;
    email: string;
    location: string;
    timezone: string;
    address?: string;
}

export const contactInfo: ContactInfo = {
    phone: "+375 (44) 531-91-88",
    email: "spacie.sharp@gmail.com",
    location: "Minsk, Belarus",
    timezone: "GMT+3"
};

export const getContactsData = (t: (key: string) => string): FooterContact[] => [
    {
        type: "phone",
        label: t("contact.phone.label"),
        value: contactInfo.phone,
        href: `tel:${contactInfo.phone.replace(/\D/g, '')}`,
    },
    {
        type: "email",
        label: t("contact.email.label"),
        value: contactInfo.email,
        href: `mailto:${contactInfo.email}`,
    },
];