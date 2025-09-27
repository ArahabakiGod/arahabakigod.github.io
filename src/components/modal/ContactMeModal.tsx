import React, { useState, useEffect } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { X, Upload, Send } from "lucide-react";
import { Typography, Button, Input } from "../common";
import type { ContactModalProps, ContactFormValues } from "./types";
import { useTranslation } from "../../hooks/useTranslation";
import { createPortal } from "react-dom";

const ContactModal: React.FC<ContactModalProps> = ({
  isOpen,
  onClose,
  className = "",
}) => {
  const { t: tPortfolio } = useTranslation("portfolio");
  const { t } = useTranslation("common");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  // Validation schema
  const validationSchema = Yup.object({
    name: Yup.string()
      .min(2, t("validation.nameMin"))
      .required(t("validation.nameRequired")),
    email: Yup.string()
      .email(t("validation.emailInvalid"))
      .required(t("validation.emailRequired")),
    subject: Yup.string()
      .min(3, t("validation.subjectMin"))
      .required(t("validation.subjectRequired")),
    message: Yup.string()
      .min(10, t("validation.messageMin"))
      .required(t("validation.messageRequired")),
  });

  const formik = useFormik<ContactFormValues>({
    initialValues: {
      name: "",
      email: "",
      subject: "",
      message: "",
      file: null,
    },
    validationSchema,
    onSubmit: async (values) => {
      setIsSubmitting(true);
      try {
        // TODO: Implement actual form submission
        await new Promise((resolve) => setTimeout(resolve, 2000));
        console.log("Form submitted:", values, selectedFile);

        // Reset form and close modal on success
        formik.resetForm();
        setSelectedFile(null);
        onClose();
      } catch (error) {
        console.error("Form submission error:", error);
      } finally {
        setIsSubmitting(false);
      }
    },
  });

  // Handle file selection
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setSelectedFile(file);
    formik.setFieldValue("file", file);
  };

  // Handle ESC key
  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape" && isOpen) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("keydown", handleEscape);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleEscape);
      document.body.style.overflow = "";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return createPortal(
    <div
      className="fixed inset-0 z-[99999] flex items-center justify-center p-4"
      role="dialog"
      aria-modal="true"
      aria-labelledby="modal-title"
    >
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal Content */}
      <div
        className={`
          relative w-full max-w-lg max-h-[90vh] overflow-y-auto
          bg-background border-2 border-accent rounded-xl shadow-2xl
          animate-in zoom-in-95 fade-in duration-200
          ${className}
        `}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-border">
          <Typography variant="h3" color="accent" id="modal-title">
            {tPortfolio("contact.title")}
          </Typography>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="!p-2 hover:bg-hover rounded-lg"
            aria-label={t("close")}
          >
            <X className="w-5 h-5" />
          </Button>
        </div>

        {/* Form */}
        <form onSubmit={formik.handleSubmit} className="p-6 space-y-4">
          <Input
            label={tPortfolio("contact.form.name")}
            type="text"
            placeholder={tPortfolio("contact.form.name")}
            required
            {...formik.getFieldProps("name")}
            error={formik.touched.name ? formik.errors.name : undefined}
          />

          <Input
            label={tPortfolio("contact.form.email")}
            type="email"
            placeholder={tPortfolio("contact.form.email")}
            required
            {...formik.getFieldProps("email")}
            error={formik.touched.email ? formik.errors.email : undefined}
          />

          <Input
            label={tPortfolio("contact.form.subject")}
            type="text"
            placeholder={tPortfolio("contact.form.subject")}
            required
            {...formik.getFieldProps("subject")}
            error={formik.touched.subject ? formik.errors.subject : undefined}
          />

          {/* Message Textarea */}
          <div className="w-full">
            <label className="block text-sm font-medium font-body mb-2 text-text-secondary">
              {tPortfolio("contact.form.message")}
              <span className="text-error ml-1">*</span>
            </label>
            <textarea
              rows={4}
              placeholder={tPortfolio("contact.form.message")}
              required
              className="
                w-full px-4 py-2 font-body text-base border-2 border-border 
                bg-background text-text-primary rounded-lg 
                transition-all duration-200 placeholder:text-text-muted 
                focus:outline-none focus:border-border-focus 
                focus:ring-2 focus:ring-focus-ring resize-none
              "
              {...formik.getFieldProps("message")}
            />
            {formik.touched.message && formik.errors.message && (
              <div className="mt-1 text-sm font-body text-error">
                {formik.errors.message}
              </div>
            )}
          </div>

          {/* File Upload */}
          <div className="w-full">
            <label className="block text-sm font-medium font-body mb-2 text-text-secondary">
              {tPortfolio("contact.form.attachFile")}
              <span className="text-text-muted ml-1">({t("optional")})</span>
            </label>

            <div className="relative">
              <input
                type="file"
                onChange={handleFileChange}
                className="hidden"
                id="file-upload"
                accept=".pdf,.doc,.docx,.txt,.jpg,.jpeg,.png"
              />
              <label
                htmlFor="file-upload"
                className="
                  w-full flex items-center gap-3 px-4 py-2 
                  border-2 border-dashed border-border hover:border-border-hover
                  bg-background-secondary hover:bg-hover
                  text-text-primary rounded-lg cursor-pointer
                  transition-all duration-200
                "
              >
                <Upload className="w-5 h-5 text-text-muted" />
                <span className="text-sm">
                  {selectedFile
                    ? selectedFile.name
                    : tPortfolio("contact.form.attachFile")}
                </span>
              </label>
            </div>
          </div>

          {/* Submit Button */}
          <Button
            type="submit"
            variant="primary"
            loading={isSubmitting}
            disabled={!formik.isValid || isSubmitting}
            className="w-full mt-6"
            icon={<Send className="w-4 h-4" />}
          >
            {isSubmitting ? t("sending") : tPortfolio("contact.form.send")}
          </Button>
        </form>
      </div>
    </div>,
    document.body
  );
};

export default ContactModal;
