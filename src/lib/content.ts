import { mapSanityCase } from "./helpers";
import { sanityClient } from "sanity:client";
import type { SanityDocument } from "@sanity/client";
import { CASES_QUERY } from "@/sanity/queries";

interface CasesCollectionOptions {
  lang: "uk" | "en";
  featured?: boolean;
}

export async function getCasesCollection({
  lang,
  featured,
}: CasesCollectionOptions) {
  const cases = await sanityClient.fetch<SanityDocument[]>(CASES_QUERY(lang));
  return cases.map(mapSanityCase).filter((casePost) => featured ? casePost.featured : true);
}
