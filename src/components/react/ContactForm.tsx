import Button from "./ui/Button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";
import { useForm } from "react-hook-form";
import { contactSchema, type ContactForm } from "@/lib/schemas";
import { zodResolver } from "@hookform/resolvers/zod";
import { motion } from "motion/react";

export interface ContactFormProps {
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  buttonLabel?: string;
}

function convertToFormData(data: ContactForm) {
  const formData = new FormData();
  formData.append("name", data.name);
  formData.append("email", data.email);
  formData.append("message", data.message);
  return formData;
}

export default function ContactForm({
  nameLabel,
  emailLabel,
  messageLabel,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  buttonLabel,
  onSuccess,
}: ContactFormProps & { onSuccess?: () => void }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactForm>({
    resolver: zodResolver(contactSchema),
  });

  const handleContactForm = (data: ContactForm) => {
    fetch("/api/contact", {
      method: "POST",
      body: convertToFormData(data),
    }).then(() => onSuccess?.());
  };

  return (
    <motion.form
      className="flex-1"
      onSubmit={handleSubmit(handleContactForm)}
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{
        duration: 2.3,
        delay: 1,
      }}
    >
      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name" className="mb-2 block">
            {nameLabel}
          </Label>
          <Input
            id="name"
            type="text"
            placeholder={namePlaceholder}
            required
            minLength={4}
            {...register("name")}
          />
          {errors.name && <p className="text-red-500">{errors.name.message}</p>}
        </div>
        <div>
          <Label htmlFor="email" className="mb-2 block">
            {emailLabel}*
          </Label>
          <Input
            type="email"
            id="email"
            placeholder={emailPlaceholder}
            required
            {...register("email")}
          />
          {errors.email && (
            <p className="text-red-500">{errors.email.message}</p>
          )}
        </div>
        <div>
          <Label htmlFor="message" className="mb-2 block">
            {messageLabel}*
          </Label>
          <Textarea
            id="message"
            placeholder={messagePlaceholder}
            required
            minLength={10}
            {...register("message")}
          />
          {errors.message && (
            <p className="text-red-500">{errors.message.message}</p>
          )}
        </div>
      </div>
      <Button className="mt-10 w-full" type="submit">
        {buttonLabel}
      </Button>
    </motion.form>
  );
}
