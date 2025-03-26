import { validateContactForm } from "@/lib/helpers";
import { sendContactForm } from "@/lib/send-contact-form";
import type { APIRoute } from "astro";

export const prerender = false;

export const POST: APIRoute = async ({ request }) => {
  const data = await request.formData();

  const contactForm = {
    name: data.get("name"),
    email: data.get("email"),
    message: data.get("message"),
  };

  if (validateContactForm(contactForm)) {
    await sendContactForm(contactForm);
  }

  return new Response(null, {
    status: 303,
    headers: {
      Location: "/",
    },
  });
};
