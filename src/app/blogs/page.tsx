import { blogPosts } from "@/__data__/blogs";
import Link from "next/link";
import React from "react";

export default function page() {
  return (
    <div className="max-w-4xl mx-auto px-4 ">
      <h2 className=" text-3xl text-center">
        Some words that I&apos;ve written beside code
      </h2>

      <div className="space-y-6 mt-20">
        {blogPosts.map((post) => (
          <article
            key={post.id}
            className="space-y-2 hover:bg-gray-100 dark:hover:bg-gray-900 p-3 rounded"
          >
            <div className="flex items-center text-gray-600">
              <span className="inline-block text-xs">{post.date}</span>
            </div>

            <h2 className="text-lg  text-black dark:text-white">{post.title}</h2>

            <p className="text-gray-600 leading-relaxed text-sm">
              {post.excerpt}
            </p>

            <div>
              <Link
                href={`/blogs/${post.slug}`}
                className=" text-secondary-foreground hover:underline inline-block text-sm"
              >
                Read more
              </Link>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
}
