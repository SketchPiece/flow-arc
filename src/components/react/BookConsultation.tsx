import type { ComponentProps } from "react";
import Button from "./ui/Button";

export interface BookConsultationProps extends ComponentProps<typeof Button> {
  lang: "en" | "uk";
}

export default function BookConsultation({
  lang,
  ...props
}: BookConsultationProps) {
  const handleRedirect = () => {
    const url =
      lang === "uk"
        ? "https://calendly.com/esobko13/flowarc"
        : "https://calendly.com/esobko13/consultation-with-flowarc";
    window.open(url, "_blank");
  };

  return (
    <Button onClick={handleRedirect} {...props} />
  );
}
