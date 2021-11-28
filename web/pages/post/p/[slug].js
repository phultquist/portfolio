import { Post } from "../../../components";
import absoluteUrl from "next-absolute-url";
import Head from "next/head";
export default function PostPage({ post }) {
  return (
    <>
      <Head>
        <meta key="robots" name="robots" content="noindex,nofollow" />
        <meta key="googlebot" name="googlebot" content="noindex,nofollow" />
      </Head>
      <Post post={post} />
    </>
  );
}

export async function getServerSideProps(context) {
  const { params, req } = context;
  const host = absoluteUrl(req);

  const response = await fetch(
    host.origin + "/api/private/post?slug=" + params.slug
  );
  const { data } = await response.json();

  return {
    props: {
      post: data.allPost[0],
    },
  };
}
