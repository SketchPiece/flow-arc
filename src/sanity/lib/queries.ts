export const BLOG_SLUGS_QUERY = `
*[
  (_type == "post-uk" || _type == "post-en") && defined(slug.current)
]{ 
  _type == 'post-uk' => {
    "params": { 
      "slug": slug.current, 
      "lang": 'uk'
    }
  },
  _type == 'post-en' => {
    "params": { 
      "slug": slug.current, 
      "lang": 'en'
    }
  }
}
`;
export const BLOG_POSTS_QUERY = (lang: "en" | "uk") =>
  `*[_type == "post-${lang}"]`;
export const BLOG_POST_QUERY = (lang: "en" | "uk") =>
  `*[_type == "post-${lang}" && slug.current == $slug][0]`;

export const CASE_SLUGS_QUERY = `
*[
  (_type == "case-uk" || _type == "case-en") && defined(slug.current)
]{ 
  _type == 'case-uk' => {
    "params": { 
      "slug": slug.current, 
      "lang": 'uk'
    }
  },
  _type == 'case-en' => {
    "params": { 
      "slug": slug.current, 
      "lang": 'en'
    }
  }
}
`;
export const CASES_QUERY = (lang: "en" | "uk") =>
  `*[_type == "case-${lang}"]`;
export const CASE_QUERY = (lang: "en" | "uk") =>
  `*[_type == "case-${lang}" && slug.current == $slug][0]`;
