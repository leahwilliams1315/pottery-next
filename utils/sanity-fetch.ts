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

export async function getHomePageCards() {
  const query = `
    *[_id == "home"][0]{
      card[]{
        ...,
        image {
          ..., 
          asset->{
            _id,
            url
          }
        },
        buttons[]{
          ...
        }
      }
    }
  `;
  const home = await sanityClient.fetch(query);
  return home.card; // 'card' is the name of the field in the 'home' document
}

export const getAllSanitySlugs = async (type: string) => {
  const data = await sanityClient.fetch(`*[_type == "${type}"]{slug}`);

  return data.map((item: { slug: { current: string } }) => ({
    params: { slug: item.slug.current },
  }));
};

export const getPageContentBySlug = async (slug: string, type: string) => {
  const query = `
    *[_type == "page" && slug.current == $slug][0]{
  title,
  slug,
  showHero,
  "hero": hero.page->{
    // Fields from your hero type
  },
  body,
  "sections": section[]{
    ...,
    "children": children[]{
      _type == 'card' => @->{
        ...,
        image{..., asset->},
        buttons[]{...}
      },
      _type == 'section' => @->{
        ...,
        "children": children[]{
          _type == 'card' => @->{
            ...,
            image{..., asset->},
            buttons[]{...}
          },
          _type == 'section' => @->{
            ...,
            "children": children[]{
              _type == 'card' => @->{
                ...,
                image{..., asset->},
                buttons[]{...}
              },
              _type == 'section' => @->{
                ...,
                "children": children[]{
                  _type == 'card' => @->{
                    ...,
                    image{..., asset->},
                    buttons[]{...}
                  },
                  _type == 'section' => @->{
                    ...,
                    "children": children[]{
                      _type == 'card' => @->{
                        ...,
                        image{..., asset->},
                        buttons[]{...}
                      },
                      // Assuming 5 levels deep is the maximum
                      _type == 'section' => @->{
                        ...,
                        "children": children[]{
                          _type == 'card' => @->{
                            ...,
                            image{..., asset->},
                            buttons[]{...}
                          },
                          // No further nesting since this is the 5th level
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  },
  "seo": seo.page->{
    // Fields from your SEO type
  }
}

  `;
  const params = { slug };
  const pageContent = await sanityClient.fetch(query, params);
  return simplifyColorResponse(pageContent);
};
