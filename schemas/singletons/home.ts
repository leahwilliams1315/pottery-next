import { HomeIcon } from "@sanity/icons";
import { defineField } from "sanity";

const TITLE = "Home";

export default defineField({
  name: "home",
  title: TITLE,
  type: "document",
  icon: HomeIcon,
  groups: [
    {
      default: true,
      name: "editorial",
      title: "Editorial",
    },
    {
      name: "seo",
      title: "SEO",
    },
  ],
  fields: [
    // SEO
    defineField({
      name: "seo",
      title: "SEO",
      type: "seo.home",
      group: "seo",
    }),
    // MUI Theme
    defineField({
      name: "muiTheme",
      title: "MUI Theme",
      type: "reference",
      to: [{ type: "materialUITheme" }],
      group: "editorial",
    }),
    //section
    defineField({
      name: "section",
      title: "Section",
      type: "array",
      of: [{ type: "section" }],
      group: "editorial",
    }),
  ],
  preview: {
    prepare() {
      return {
        // media: icon,
        subtitle: "Index",
        title: TITLE,
      };
    },
  },
});
