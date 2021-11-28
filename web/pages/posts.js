import { gql } from "@apollo/client";
import client from "../apollo-client";
import { Navbar, Footer } from "../components";
import metadataQuery from "../queries/metadata";
import { VscArrowRight } from "react-icons/vsc";

import Link from "next/link";

export default function Work({ metadata, posts }) {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200">
        <div className="max-w-screen-lg mx-auto p-10">
          <h1 className="section">My Notebook</h1>
          {posts.map((post) => (
            <Link key={post.slug.current} href={"/post/" + post.slug.current}>
              <div className="w-full p-3 group cursor-pointer rounded-md hover:bg-gray-250 transition-all">
                <div className="w-full flex flex-row justify-between items-center">
                  <h2 className="text-lg font-medium">
                    {post.title} <VscArrowRight className="group-hover-arrow" />
                  </h2>
                  <p className="text-sm text-gray-500 font-medium">
                    {post.date}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
      <Footer metadata={metadata} className="bg-white" />
    </div>
  );
}

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
          query {
            ${metadataQuery}
            allPost(sort:{_createdAt: DESC} ) {
              title
              date
              slug {
                current
              }
            }
          }
        `,
  });

  return {
    props: {
      metadata: data.allMeta[0],
      posts: data.allPost,
    },
  };
}
