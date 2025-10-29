import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { CartProvider } from "@/context/CartContext";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "바람꽃 카페 - 스페셜티 커피와 따뜻한 시간",
  description: "바람꽃 카페에 오신 것을 환영합니다. 세계 각지의 스페셜티 커피와 아늑한 공간을 경험하세요. 한 잔 한 잔 정성스럽게 내린 커피를 제공합니다.",
  keywords: "카페, 스페셜티 커피, 커피숍, 라떼, 아메리카노, 디저트",
  authors: [{ name: "바람꽃 카페" }],
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
  <html lang="ko">
      <body className={`${inter.variable} antialiased`}>
        <CartProvider>
          {children}
        </CartProvider>
      </body>
    </html>
  );
}
