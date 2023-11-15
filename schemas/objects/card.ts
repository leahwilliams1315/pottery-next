export const card = {
  name: "card",
  title: "Card",
  type: "document",
  fields: [
    {
      name: "isClickable",
      title: "Is Clickable",
      type: "boolean",
      description: "Can the card be clicked?",
    },
    {
      name: "image",
      title: "Image",
      type: "image",
      options: {
        hotspot: true,
      },
    },
    {
      name: "fullWidth",
      title: "Full Width",
      type: "boolean",
      description: "Should the card be full width?",
    },
    {
      name: "buttons",
      title: "Buttons",
      type: "array",
      of: [
        {
          type: "object",
          fields: [
            {
              name: "label",
              title: "Label",
              type: "string",
            },
            {
              name: "action",
              title: "Action",
              type: "string",
              description: "Define the action to take on click",
            },
          ],
        },
      ],
    },
    {
      name: "title",
      title: "Title",
      type: "string",
    },
    {
      name: "text",
      title: "Text",
      type: "text",
    },
  ],
};
