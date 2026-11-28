import type { Metadata } from "next";
import { Layout } from "@/components/layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Affiliate Hub",
  description: "Venda e divulgue seus produtos como afiliado em um só lugar.",
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

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Layout>{children}</Layout>
      </body>
    </html>
  );
}
