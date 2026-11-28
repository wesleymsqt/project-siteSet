import { readdirSync, readFileSync } from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export type Post = {
  slug: string;
  title: string;
  date: string;
  description: string;
  image: string;
  author: {
    name: string;
    avatar: string;
  };
  body: {
    raw: string;
  };
};

function requiredString(value: unknown, field: string, filePath: string) {
  if (typeof value !== "string" || value.trim() === "") {
    throw new Error(`Invalid or missing "${field}" in blog post: ${filePath}`);
  }

  return value;
}

function parsePost(fileName: string): Post {
  const filePath = path.join(process.cwd(), "posts", fileName);
  const { content, data } = matter(readFileSync(filePath, "utf8"));
  const author =
    typeof data.author === "object" && data.author !== null
      ? data.author
      : undefined;
  const rawDate = data.date;
  const date =
    rawDate instanceof Date
      ? rawDate
      : new Date(requiredString(rawDate, "date", filePath));

  if (Number.isNaN(date.getTime())) {
    throw new Error(`Invalid "date" in blog post: ${filePath}`);
  }

  if (!author || Array.isArray(author)) {
    throw new Error(`Invalid or missing "author" in blog post: ${filePath}`);
  }

  return {
    slug: path.basename(fileName, path.extname(fileName)),
    title: requiredString(data.title, "title", filePath),
    date: date.toISOString(),
    description: requiredString(data.description, "description", filePath),
    image: requiredString(data.image, "image", filePath),
    author: {
      name: requiredString(author.name, "author.name", filePath),
      avatar: requiredString(author.avatar, "author.avatar", filePath),
    },
    body: { raw: content },
  };
}

export const allPosts: Post[] = readdirSync(path.join(process.cwd(), "posts"))
  .filter((fileName) => fileName.endsWith(".md"))
  .map(parsePost);
