// lib/sanityFetch.js
import { createClient } from "@sanity/client";

export const sanityClient = createClient({
  projectId: "q5nld2yr",
  dataset: "production",
  apiVersion: new Date().toISOString().slice(0, 10),
  useCdn: false,
});

function simplifyColorResponse(obj: any): any {
  if (Array.isArray(obj)) {
    return obj.map(simplifyColorResponse);
  } else if (obj !== null && typeof obj === "object") {
    if (obj._type === "color" && typeof obj.hex === "string") {
      return obj.hex; // Return the hex value directly
    }
    const simplifiedObj: any = {};
    for (const [key, value] of Object.entries(obj)) {
      simplifiedObj[key] = simplifyColorResponse(value); // Recurse
    }
    return simplifiedObj;
  }
  return obj;
}

export async function getTheme() {
  const query = `
    *[_id == "home"][0]{
      "muiTheme": muiTheme ->{
        palette,
      }
    }
  `;
  const home = await sanityClient.fetch(query);
  return simplifyColorResponse(home.muiTheme);
}
