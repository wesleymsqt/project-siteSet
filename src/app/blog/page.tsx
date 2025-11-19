import { BlogList } from "@/templates/blog";
import { allPosts } from "contentlayer/generated";

export default function BloglistPage() {
  const sortedPosts = allPosts.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return <BlogList posts={sortedPosts} />;
}
