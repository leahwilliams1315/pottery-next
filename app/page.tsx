"use client";
import HideAppBar from "@/components/navigation";
import { getHomePageCards, getTheme } from "@/utils/sanity-fetch";
import { createTheme } from "@mui/material";
import ClientSideTheming from "@/components/themeRegistry";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";
import { MediaCard } from "@/components/card";

export default function Home(children: any) {
  // const sanityTheme = await getTheme();

  const [sanityTheme, setSanityTheme] = useState(createTheme());
  const [cards, setCards] = useState([]);

  useEffect(() => {
    getTheme().then((theme) => {
      setSanityTheme(createTheme(theme));
    });
    getHomePageCards().then((cards) => {
      debugger;
      setCards(cards);
    });
  }, []);

  return (
    <ThemeProvider theme={sanityTheme}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HideAppBar>{children}</HideAppBar>
        {cards.map((card: any) => (
          <MediaCard key={card.title} {...card} />
        ))}
      </main>
    </ThemeProvider>
  );
}
