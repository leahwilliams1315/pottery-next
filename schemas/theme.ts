import { IceCreamIcon } from "@sanity/icons";

export const MUITheme = {
  name: "materialUITheme",
  title: "Material UI Theme",
  type: "document",
  icon: IceCreamIcon,
  fields: [
    {
      name: "palette",
      title: "Palette",
      type: "object",
      fields: [
        {
          name: "primary",
          title: "Primary Color",
          type: "object",
          fields: [
            {
              name: "main",
              title: "Main Color",
              type: "color",
            },
            {
              name: "light",
              title: "Light Color",
              type: "color",
            },
            {
              name: "dark",
              title: "Dark Color",
              type: "color",
            },
            {
              name: "contrastText",
              title: "Contrast Text Color",
              type: "color",
            },
          ],
        },
        {
          name: "secondary",
          title: "Secondary Color",
          type: "object",
          fields: [
            {
              name: "main",
              title: "Main Color",
              type: "color",
            },
            {
              name: "light",
              title: "Light Color",
              type: "color",
            },
            {
              name: "dark",
              title: "Dark Color",
              type: "color",
            },
            {
              name: "contrastText",
              title: "Contrast Text Color",
              type: "color",
            },
          ],
        },
      ],
    },
  ],
};
