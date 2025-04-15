import { defineType, defineField } from 'sanity'

export const postEnType = defineType({
  name: "post-en",
  title: "Posts English",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Title",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Image",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "previewText",
      title: "Preview Text",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Slug",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "readTime",
      title: "Read Time",
      type: "number",
    }),
    defineField({
      name: "content",
      type: "array",
      of: [
        { type: "block" },
        {
          type: "image",
          options: { hotspot: true },
          fields: [
            {
              name: "alt",
              title: "Alt text",
              type: "string",
            },
          ],
        },
        { type: "table" },
      ],
    }),
  ],
});
