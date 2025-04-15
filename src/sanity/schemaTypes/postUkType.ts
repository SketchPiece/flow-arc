import { defineType, defineField } from 'sanity'

export const postUkType = defineType({
  name: "post-uk",
  title: "Публікації Українська",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "image",
      title: "Зображення",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "previewText",
      title: "Текст прев’ю",
      type: "text",
    }),
    defineField({
      name: "slug",
      title: "Посилання",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "readTime",
      title: "Час читання",
      type: "number",
    }),
    defineField({
      title: "Контент",
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
              title: "Альтернативний текст",
              type: "string",
            },
          ],
        },
        { type: "table" },
      ],
    }),
  ],
});
