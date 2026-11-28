import type { Metadata } from "next";
import { LandingPage } from "@/templates/landing-page";

export const metadata: Metadata = {
  title: "Affiliate Hub",
  description: "Venda seus produtos como afiliado em um único lugar",
  robots: "index, follow",
  openGraph: {
    title: "Affiliate Hub",
    description: "Venda seus produtos como afiliado em um único lugar",
    url: "https://rocketseat-nextjs-fundamentals.vercel.app/og-image.png",
    siteName: "Affiliate Hub",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://rocketseat-nextjs-fundamentals.vercel.app/og-image.png",
        width: 800,
        height: 600,
        alt: "Affiliate Hub",
      },
    ],
  },
};

export default function HomePage() {
  return <LandingPage />;
}
