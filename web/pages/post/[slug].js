import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { Post } from "../../components";

export default function PostPage({ post }) {
  return <Post post={post} />;
}

export async function getStaticPaths() {
  const { data } = await client.query({
    query: gql`
      query {
        allPost {
          slug {
            current
          }
        }
      }
    `,
  });

  return {
    paths: data.allPost.map((format) => ({
      params: {
        slug: format.slug.current,
      },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { data } = await client.query({
    query: gql`
          query {
              allPost(where: { slug: { current: { eq: "${params.slug}" } } }) {
                  title
                  bodyRaw
                  date
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
