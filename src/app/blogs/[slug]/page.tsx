"use client";
import { blogPosts } from "@/__data__/blogs";
import { ChevronsLeftIcon } from "lucide-react";
import { useParams, useRouter } from "next/navigation";
import React from "react";
// Add this function to generate static paths
// Generate static params from local blog data
export async function generateStaticParams() {
  return blogPosts.map((post) => ({
    slug: post.slug,
  }));
}

export default function Page() {
  const { slug } = useParams();
  console.log("Paramssss:", slug);

  const selectedBlog = blogPosts.filter((b) => b.slug === slug);
  console.log("Single BLog", selectedBlog);

  const router = useRouter();
  return (
    <div className="max-w-4xl mx-auto px-4">
      <div>
        <button
          onClick={() => router.back()}
          className=" text-xs flex items-center gap-1 group"
        >
          <ChevronsLeftIcon
            size={16}
            className=" group-hover:-translate-x-1 transition-all duration-300"
          />
          <span>Back</span>
        </button>
      </div>

      <div
        className="content prose-lg mt-10 2xl:prose-xl"
        dangerouslySetInnerHTML={{ __html: selectedBlog[0].body }}
      ></div>
    </div>
  );
}
