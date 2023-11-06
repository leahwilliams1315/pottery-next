"use client";
import HideAppBar from "@/components/navigation";
import { getTheme } from "@/utils/sanity-fetch";
import { createTheme } from "@mui/material";
import ClientSideTheming from "@/components/themeRegistry";
import { useEffect, useState } from "react";
import { ThemeProvider } from "@mui/material/styles";

export default function Home(children: any) {
  // const sanityTheme = await getTheme();

  const [sanityTheme, setSanityTheme] = useState(createTheme());

  useEffect(() => {
    getTheme().then((theme) => {
      setSanityTheme(createTheme(theme));
    });
  });

  return (
    <ThemeProvider theme={sanityTheme}>
      <main className="flex min-h-screen flex-col items-center justify-between p-24">
        <HideAppBar>{children}</HideAppBar>
      </main>
    </ThemeProvider>
  );
}
