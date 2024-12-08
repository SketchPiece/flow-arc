import posts from "../data/posts.json";

export interface Post {
  id: string;
  image: string;
  title: string;
  shortDescription: string;
  descriptionParagraphs: string[];
}

export const getBlogPosts = (): Post[] => {
  return posts?.map(
    ({ short_description, post_description_paragraphs, ...post }) => ({
      ...post,
      shortDescription: short_description,
      descriptionParagraphs: post_description_paragraphs,
    }),
  );
};
