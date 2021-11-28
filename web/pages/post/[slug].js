import { gql } from "@apollo/client";
import client from "../../apollo-client";
import BlockContent from "@sanity/block-content-to-react";

import Link from "next/link";
import Head from "next/head";
export default function Post({ post }) {
  console.log(post.private);
  return (
    <div>
      <Head>
        <title>{post.title}</title>
        {post.private && (
          <>
            <meta key="robots" name="robots" content="noindex,nofollow" />
            <meta key="googlebot" name="googlebot" content="noindex,nofollow" />
          </>
        )}
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

export async function getServerSideProps({ params }) {
  const { data } = await client.query({
    query: gql`
          query {
              allPost(where: { slug: { current: { eq: "${params.slug}" } } }) {
                  title
                  bodyRaw
                  date
                  private
                  images {
                      asset {
                          url
                          metadata {
                              dimensions {
                                  width
                                  height
                              }
                          }
                      }
                  }
              }
          }
          `,
  });

  return {
    props: {
      post: data.allPost[0],
    },
  };
}
