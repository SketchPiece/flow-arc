import { z } from "astro/zod";

export const contactSchema = z.object({
  name: z.string().min(4),
  email: z.string().email(),
  message: z.string().min(10),
});

export type ContactForm = z.infer<typeof contactSchema>;
