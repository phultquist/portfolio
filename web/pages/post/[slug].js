import { gql } from "@apollo/client";
import client from "../../apollo-client";
import { Post } from "../../components";


export default function PostPage({ post }) {
  return <Post post={post} />;
}

export async function getServerSideProps({ params }) {
  const { data } = await client.query({
    query: gql`
          query {
              allPost(where: { slug: { current: { eq: "${params.slug}" } } }) {
                  title
                  bodyRaw
                  date
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
