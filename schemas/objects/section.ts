import { generateReferenceObjectsFromNames } from "../../utils/defineStructure";

export const section = {
  name: "section",
  title: "Section",
  type: "document",
  fields: [
    {
      name: "alignContent",
      title: "Align Content",
      type: "string",
      options: {
        list: [
          { title: "Center", value: "center" },
          { title: "Space Evenly", value: "space-evenly" },
        ],
        layout: "radio",
      },
    },
    {
      name: "height",
      title: "Height",
      type: "string",
      options: {
        list: [
          { title: "200px", value: "200px" },
          { title: "100vh", value: "100vh" },
        ],
        layout: "radio",
      },
    },
    {
      name: "children",
      title: "Children",
      type: "array",
      of: generateReferenceObjectsFromNames(["card", "section"], "section"),
    },
  ],
};
