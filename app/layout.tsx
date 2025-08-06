import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Portfolio van Kevin van Bommel",
  description: "Welkom op mijn portfolio website! Hier vind je informatie over mijn projecten en vaardigheden.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/assets/KVB_Logo_Beeldmerk.svg" />
      </head>
      <body>
        {children}
      </body>
    </html>
  );
}
