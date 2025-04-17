import type React from "react";
// import { ThemeProvider } from "@/components/theme-provider";
// import { Inter } from "next/font/google";
import "./globals.css";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: any = {
  title: "Frontend Developer Portfolio",
  description:
    "Portfolio website showcasing frontend development skills and projects",
};

export default function RootLayout(
  {
    // children,
  }: Readonly<{
    children: React.ReactNode;
  }>
) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body>
        {/* <body className={inter.className}> */}
        {/* <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider> */}
      </body>
    </html>
  );
}
