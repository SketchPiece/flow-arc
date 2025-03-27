import { defineCollection } from "astro:content";
import { notionLoader, notionPageSchema } from "@notwoods/notion-astro-loader";
import {
  transformedPropertySchema,
  propertySchema,
} from "@notwoods/notion-astro-loader/schemas";
import { z } from "astro/zod";

const blog = defineCollection({
  // @ts-ignore
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    database_id: import.meta.env.NOTION_BLOG_DATABASE_ID,
  }),
  schema: notionPageSchema({
    properties: z.object({
      Name: transformedPropertySchema.title,
      Image: propertySchema.files.optional(),
      PreviewText: transformedPropertySchema.rich_text.optional(),
      Draft: propertySchema.checkbox.optional(),
      Slug: propertySchema.rich_text.optional(),
      ReadTime: propertySchema.number.optional(),
      Lang: propertySchema.select.optional(),
    }),
  }),
});

const cases = defineCollection({
  // @ts-ignore
  loader: notionLoader({
    auth: import.meta.env.NOTION_TOKEN,
    database_id: import.meta.env.NOTION_CASES_DATABASE_ID,
  }),
  schema: notionPageSchema({
    properties: z.object({
      Name: transformedPropertySchema.title,
      Slug: propertySchema.rich_text.optional(),
      Lang: propertySchema.select.optional(),
      Description: propertySchema.rich_text.optional(),
      Featured: propertySchema.checkbox.optional(),
      Image: propertySchema.rich_text.optional(),
    }),
  }),
});

export const collections = { blog, cases };
