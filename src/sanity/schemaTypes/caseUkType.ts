import { defineType, defineField } from 'sanity'

export const caseUkType = defineType({
  name: "case-uk",
  title: "Кейси Українська",
  type: "document",
  fields: [
    defineField({
      name: "title",
      title: "Заголовок",
      type: "string",
      validation: (rule) => rule.required(),
    }),
    defineField({
      name: "slug",
      title: "Посилання",
      type: "slug",
      options: { source: "title", maxLength: 96 },
    }),
    defineField({
      name: "image",
      title: "Зображення",
      type: "image",
      options: { hotspot: true },
    }),
    defineField({
      name: "description",
      title: "Опис",
      type: "text",
    }),
    defineField({
      name: "featured",
      title: "Рекомендоване",
      type: "boolean",
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
