import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { table } from "@sanity/table";
import { schemaTypes } from "@/sanity/schemaTypes";

export default defineConfig({
  name: "default",
  title: "FlowArc Studio",

  projectId: "vd2f4osv",
  dataset: "production",

  plugins: [structureTool(), table()],

  schema: {
    types: schemaTypes,
  },
});
