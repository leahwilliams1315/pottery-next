import { getAllSanitySlugs, getPageContentBySlug } from "@/utils/sanity-fetch";
import { renderContent } from "@/renderer/component-mapper";
import { NavigationBar } from "@/components/navigation";

// Loader function to fetch data based on the slug
export async function generateStaticParams() {
  console.log("generateStaticParams");
  const allSanitySlugs = await getAllSanitySlugs("page");
  console.log(JSON.stringify(allSanitySlugs));
  // Join the slug array to get the full slug path
  return allSanitySlugs.map((page: { params: { slug: string } }) => ({
    path: page.params.slug.split("/"),
  }));
}

// The default export is your page layout component
export default async function Page({ params }: { params: { path: string[] } }) {
  const pageData = await getPageContentBySlug(params.path.join("/"), "page");
  console.log(pageData);
  return (
    <div>
      {/* Render SEO, MUI Theme, etc., based on the fetched data */}
      {/* Render Sections */}
      {pageData?.sections && renderContent(pageData.sections)}
    </div>
  );
}
