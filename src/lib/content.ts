import { getCollection } from "astro:content";
import { mapNotionCase } from "./helpers";

interface CasesCollectionOptions {
  lang: string;
  featured?: boolean;
}

export async function getCasesCollection({
  lang,
  featured,
}: CasesCollectionOptions) {
  const cases = await getCollection("cases", ({ data }) => {
    const isCurrentLang =
      !data.properties.Lang?.select?.name ||
      data.properties.Lang.select.name === lang;
    const isFeatured = data.properties.Featured?.checkbox === true;
    if (featured) return isCurrentLang && isFeatured;
    return isCurrentLang;
  });
  return cases.map(mapNotionCase);
}
