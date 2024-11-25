import { blogPosts } from "@/__data__/blogs";
import React, { ReactNode } from "react";

export function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}
export default function layout({ children }: { children: ReactNode }) {
  return <div>{children}</div>;
}
