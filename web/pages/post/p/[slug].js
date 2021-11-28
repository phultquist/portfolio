import { Post } from "../../../components";
import absoluteUrl from 'next-absolute-url'

export default function PostPage({ post }) {
  return <Post post={post} />;
}

export async function getServerSideProps(context) {
  const { params, req } = context;
  const host = absoluteUrl(req);

  const response = await fetch(host.origin + "/api/private/post?slug=" + params.slug);
  const { data } = await response.json();

  return {
    props: {
      post: data.allPost[0],
    },
  };
}
