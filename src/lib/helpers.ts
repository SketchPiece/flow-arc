import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";
import { contactSchema, type ContactForm } from "./schemas";
import { sanityClient } from "sanity:client";
import imageUrlBuilder from "@sanity/image-url";
import type { SanityImageSource } from "@sanity/image-url/lib/types/types";

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
  content?: any;
}

interface Case {
  title: string;
  description?: string;
  image?: SanityImageSource;
  slug: string;
  lang: "en" | "uk";
  featured: boolean;
  content?: any;
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
    image: caseStudy.data.properties.Image?.rich_text[0]?.plain_text,
  };
}

export function urlFor(source?: SanityImageSource) {
  if (!source) return undefined;
  const { projectId, dataset } = sanityClient.config();
  if (!projectId || !dataset) return undefined;
  return imageUrlBuilder({ projectId, dataset }).image(source);
}

export function mapSanityCase(caseStudy: any): Case {
  return {
    title: caseStudy.title,
    description: caseStudy.description,
    slug: caseStudy.slug.current,
    lang: caseStudy.lang,
    featured: caseStudy.featured,
    image: caseStudy.image,
    content: caseStudy.content,
  };
}

export function mapSanityPost(post: any): Post {
  console.log(post)
  return {
    slug: post.slug.current,
    title: post.title,
    image: post.image,
    description: post.description,
    readingTime: post.readTime,
    lang: post.lang,
    content: post.content,
  };
}

export function validateContactForm(data: unknown): data is ContactForm {
  return contactSchema.safeParse(data).success;
}
