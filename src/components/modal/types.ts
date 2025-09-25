export interface ContactModalProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
}

export interface ContactFormValues {
    name: string;
    email: string;
    subject: string;
    message: string;
    file?: File | null;
}

export interface ModalBackdropProps {
    isOpen: boolean;
    onClose: () => void;
    children: React.ReactNode;
    className?: string;
}