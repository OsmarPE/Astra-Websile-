import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { ClerkProvider } from "@clerk/nextjs";
import { dark } from "@clerk/themes";
import { meta } from "@/config";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = meta

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClerkProvider appearance={{baseTheme:[dark]}}>
          {children}
        </ClerkProvider>
      </body>
    </html>
  );
}
