"use client";
import { ThemeProvider } from "@mui/material/styles";
import { createTheme } from "@mui/material";

export default function ThemeRegistry({ theme, children }: any) {
  const updatedTheme = createTheme(theme);

  return <ThemeProvider theme={updatedTheme}>{children}</ThemeProvider>;
}
