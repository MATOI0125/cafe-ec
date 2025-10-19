import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/components/CartContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "咖啡小屋 - 精品咖啡与美好时光",
  description: "欢迎来到咖啡小屋，品味世界各地的精品咖啡，享受温馨舒适的空间。每一杯咖啡都是精心调制的艺术品。",
  keywords: "咖啡, 精品咖啡, 咖啡店, 拿铁, 美式咖啡, 糕点",
  authors: [{ name: "咖啡小屋" }],
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body className={`${inter.variable} antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
