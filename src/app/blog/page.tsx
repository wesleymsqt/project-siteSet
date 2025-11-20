import type { Metadata } from "next";
import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";

export const metadata: Metadata = {
  title: "Blog",
  description: "Dicas e estratégias para impulsionar seu negócio",
  robots: "index, follow",
  openGraph: {
    title: "Site.Set",
    description: "Dicas e estratégias para impulsionar seu negócio",
    url: "https://rocketseat-nextjs-fundamentals.vercel.app/og-image.png",
    siteName: "Site.Set",
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "https://rocketseat-nextjs-fundamentals.vercel.app/og-image.png",
        width: 800,
        height: 600,
        alt: "Blog",
      },
    ],
  },
};

export default function BloglistPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={sortedPosts} />;
}
