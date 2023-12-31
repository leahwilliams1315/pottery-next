import { defineConfig, isDev } from "sanity";

import { deskTool } from "sanity/desk";
import { schemaTypes } from "./schemas";
import { structure } from "./desk";

import { visionTool } from "@sanity/vision";
import { imageHotspotArrayPlugin } from "sanity-plugin-hotspot-array";
import { media, mediaAssetSource } from "sanity-plugin-media";
import { customDocumentActions } from "./plugins/customDocumentActions";
// @ts-ignore
import { colorInput } from "@sanity/color-input";

const devOnlyPlugins = [visionTool()];

export default defineConfig({
  name: "default",
  title: "pottery-next",

  projectId: "q5nld2yr",
  dataset: "production",
  basePath: "/studio",

  plugins: [
    deskTool({ structure }),
    colorInput(),
    imageHotspotArrayPlugin(),
    customDocumentActions(),
    media(),
    ...(isDev ? devOnlyPlugins : []),
  ],

  schema: {
    types: schemaTypes,
  },

  form: {
    file: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource !== mediaAssetSource,
        );
      },
    },
    image: {
      assetSources: (previousAssetSources) => {
        return previousAssetSources.filter(
          (assetSource) => assetSource === mediaAssetSource,
        );
      },
    },
  },
});
