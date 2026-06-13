import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Restaurant-Focused Google Business Profile Optimization | Platanus Planning",
  description: "MEO services built for restaurants. Rank higher on Google Maps, turn reviews into a permanent acquisition asset, and grow foot traffic without ad spend.",
  keywords: "MEO, Google Maps optimization, restaurant marketing, Google Business Profile, Japan, inbound",
  openGraph: {
    title: "Restaurant-Focused Google Business Profile Optimization | Platanus Planning",
    description: "MEO services built for restaurants. Rank higher on Google Maps, turn reviews into a permanent acquisition asset, and grow foot traffic without ad spend.",
    type: "website",
    locale: "en_US",
  },
};

export default function EnLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
