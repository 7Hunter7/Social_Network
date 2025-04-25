import type { Metadata } from "next";
import { Viewport } from "next";
import LayautClient from './components/layout/LayoutClient';
import "./globals.scss";
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Social Network by Hunter",
  description: "Best social media web app for everyone!",
  icons: './logo.svg',
};


export const viewport: Viewport = {
  themeColor: '#0E0B18',
  colorScheme: 'dark',
}


export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ru">
      <body
        className={inter.className}
      >
        <LayautClient> {children}</LayautClient>
      </body>
    </html>
  );
}
