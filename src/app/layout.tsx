import type { Metadata } from "next";
import { geistMono, geistSans } from "./fonts";
import ReduxProvider from "../providers/ReduxProvider";
import { ThemeProvider } from "../providers/ThemeProvider";
import "./globals.css";

export const metadata: Metadata = {
  title: "Template",
  description: "Template",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>
          <ReduxProvider>{children}</ReduxProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
