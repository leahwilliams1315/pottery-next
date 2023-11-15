import Section from "@/components/section";
import { MediaCard } from "@/components/card";

export const renderContent = (content: any) => {
  console.log(content);
  return content.map((item: any, index: any) => {
    switch (item._type) {
      case "section":
        return (
          <Section key={index} {...item}>
            {item.children && renderContent(item.children)}
          </Section>
        );
      case "card":
        return <MediaCard key={index} {...item} />;
      default:
        return <h1>Component Not Found</h1>;
    }
  });
};
