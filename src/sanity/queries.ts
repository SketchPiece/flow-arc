export const BLOG_SLUGS_QUERY = `*[_type == "post" && defined(slug.current)]{ "params": {"slug": slug.current, "lang": lang} }`;
export const BLOG_POSTS_QUERY = (lang: "en" | "uk") =>
  `*[_type == "post-${lang}"]`;
export const BLOG_POST_QUERY = (lang: "en" | "uk") =>
  `*[_type == "post-${lang}" && slug.current == $slug][0]`;

export const CASE_SLUGS_QUERY = `*[_type == "case" && defined(slug.current)]{ "params": {"slug": slug.current, "lang": lang} }`;
export const CASES_QUERY = (lang: "en" | "uk") =>
  `*[_type == "case-${lang}"]`;
export const CASE_QUERY = (lang: "en" | "uk") =>
  `*[_type == "case-${lang}" && slug.current == $slug][0]`;
