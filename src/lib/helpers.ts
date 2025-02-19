import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { contactSchema, type ContactForm } from "./schemas";

export function truncate(str: string, maxLength: number) {
  if (str.length <= maxLength) {
    return str;
  }

  let truncated = str.slice(0, maxLength);
  const lastSpaceIndex = truncated.lastIndexOf(" ");

  if (lastSpaceIndex !== -1) {
    truncated = truncated.slice(0, lastSpaceIndex);
  }

  return truncated + "...";
}

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface Post {
  slug: string;
  title: string;
  lang: "en" | "uk";
  image?: string;
  description?: string;
  readingTime?: number;
}

interface Case {
  title: string;
  description?: string;
  slug: string;
  lang: "en" | "uk";
  featured: boolean;
}

export function mapNotionPost(post: any): Post {
  return {
    slug: post.data.properties.Slug?.rich_text[0]?.plain_text || post.id,
    title: post.data.properties.Name.title[0]?.plain_text || "Undefined",
    image: post.data.properties.Image?.files[0]?.external?.url,
    description: post.data.properties.PreviewText?.rich_text[0]?.plain_text,
    readingTime: post.data.properties.ReadTime?.number,
    lang: post.data.properties.Lang?.select?.name || "en",
  };
}

export function mapNotionCase(caseStudy: any): Case {
  return {
    title: caseStudy.data.properties.Name.title[0]?.plain_text || "Undefined",
    description:
      caseStudy.data.properties.Description?.rich_text[0]?.plain_text,
    slug:
      caseStudy.data.properties.Slug?.rich_text[0]?.plain_text || caseStudy.id,
    lang: caseStudy.data.properties.Lang?.select?.name || "en",
    featured: caseStudy.data.properties.Featured?.checkbox ?? false,
  };
}

export function validateContactForm(data: unknown): data is ContactForm {
  return contactSchema.safeParse(data).success;
}
