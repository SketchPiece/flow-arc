import posts from "../data/posts.json";

export interface Post {
  id: string;
  image: string;
  title: string;
  paragraphs: string[];
  readingTime: string;
}

export function mapPosts() {
  return posts.map(({ reading_time, ...post }) => ({
    ...post,
    readingTime: reading_time,
  }));
}

export function getBlogPosts(): Post[] {
  return mapPosts();
}

export function getBlogPostBySlug(id: string): Post | null {
  return mapPosts()?.find((p) => p.id === id) ?? null;
}
