import { defineConfig } from "sanity";
import { structureTool } from "sanity/structure";
import { table } from "@sanity/table";
import { schemaTypes } from "@/sanity/schemaTypes";
import { visionTool } from "@sanity/vision";
import Logo from "@/sanity/components/Logo";

export default defineConfig({
  name: "default",
  title: "FlowArc Admin",
  icon: Logo,

  projectId: "vd2f4osv",
  dataset: "production",

  plugins: [
    structureTool(), 
    table(), 
    visionTool()
  ],

  schema: {
    types: schemaTypes,
  },
});
