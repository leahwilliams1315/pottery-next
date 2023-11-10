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
    // Hero
    defineField({
      name: "hero",
      title: "Hero",
      type: "hero.home",
      group: "editorial",
    }),
    // Modules
    defineField({
      name: "modules",
      title: "Modules",
      type: "array",
      of: [
        { type: "module.callout" },
        { type: "module.callToAction" },
        { type: "module.collection" },
        { type: "module.image" },
        { type: "module.instagram" },
        { type: "module.product" },
      ],
      group: "editorial",
    }),
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
    //card
    defineField({
      name: "card",
      title: "Card",
      type: "array",
      of: [{ type: "card" }],
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
