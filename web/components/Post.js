import BlockContent from "@sanity/block-content-to-react";

import Link from "next/link";
import Head from "next/head";

export default function Post({ post }) {
  return (
    <div>
      <Head>
        <title>{post.title}</title>
      </Head>
      <div className="container max-w-screen-lg mx-auto p-10">
        <h1 className="section !mb-3 !text-3xl">{post.title}</h1>
        <p className="text-gray-500 mb-4 text-sm">
          <span className="hover:underline cursor-pointer">
            <Link href="/">Patrick Hultquist</Link>
          </span>{" "}
          <span className="mx-2">&bull;</span> {post.date}
        </p>
        <hr className="" />
        <div className="my-6 post-content">
          {post.bodyRaw ? (
            <BlockContent blocks={post.bodyRaw} />
          ) : (
            <p className="text-gray-600">This post has no content.</p>
          )}
        </div>
        <hr className="" />
      </div>
    </div>
  );
}
