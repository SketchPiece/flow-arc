import Button from "./ui/Button";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Textarea } from "./ui/textarea";

interface ContactFormProps {
  nameLabel?: string;
  emailLabel?: string;
  messageLabel?: string;
  namePlaceholder?: string;
  emailPlaceholder?: string;
  messagePlaceholder?: string;
  buttonLabel?: string;
}

export default function ContactForm({
  nameLabel,
  emailLabel,
  messageLabel,
  namePlaceholder,
  emailPlaceholder,
  messagePlaceholder,
  buttonLabel,
}: ContactFormProps) {
  return (
    <form className="flex-1">
      <div className="flex flex-col gap-6">
        <div>
          <Label htmlFor="name">{nameLabel}</Label>
          <Input
            type="text"
            name="name"
            id="name"
            placeholder={namePlaceholder}
          />
        </div>
        <div>
          <Label htmlFor="email">{emailLabel}*</Label>
          <Input
            type="email"
            name="email"
            id="email"
            placeholder={emailPlaceholder}
            required
          />
        </div>
        <div>
          <Label htmlFor="message">{messageLabel}*</Label>
          <Textarea
            name="message"
            id="message"
            placeholder={messagePlaceholder}
            required
          ></Textarea>
        </div>
      </div>
      <Button className="mt-10 w-full">{buttonLabel}</Button>
    </form>
  );
}
