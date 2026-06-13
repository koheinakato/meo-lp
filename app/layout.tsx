import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "飲食店特化型Googleビジネスプロフィールの最適化コンサル | ぷらたなすきかく",
  description: "Googleマップで地域検索の上位に表示されることで、新規来店を継続的に増やす飲食店特化のMEO対策サービス。口コミを集客資産に変え、広告費に頼らない仕組みを構築します。",
  keywords: "MEO, MEO対策, 飲食店, Googleマップ, 集客, 上位表示, 口コミ, ぷらたなすきかく",
  openGraph: {
    title: "飲食店特化型Googleビジネスプロフィールの最適化コンサル | ぷらたなすきかく",
    description: "Googleマップで地域検索の上位に表示されることで、新規来店を継続的に増やす飲食店特化のMEO対策サービス。口コミを集客資産に変え、広告費に頼らない仕組みを構築します。",
    type: "website",
    locale: "ja_JP",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="h-full">
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
