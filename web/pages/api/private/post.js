// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default async function handler(req, res) {
  const { slug } = req.query;
  var headers = new Headers();

  headers.append("Accept-Encoding", "gzip, deflate, br");
  headers.append("Content-Type", "application/json");
  headers.append("Accept", "application/json");
  headers.append("Connection", "keep-alive");
  headers.append("DNT", "1");
  headers.append("Origin", process.env.PROJECT_URL);
  headers.append("authorization", `Bearer ${process.env.SANITY_READ_TOKEN}`);

  var graphql = JSON.stringify({
    query: `query {
          allPost(where: {slug: {current: {eq: "${slug}"}}}) {
              title
              date
              bodyRaw
              expiration
          }
      }`,
    variables: {},
  });
  var requestOptions = {
    method: "POST",
    headers,
    body: graphql,
    redirect: "follow",
  };

  const response = await fetch(
    process.env.PRIVATE_DATABASE_URL,
    requestOptions
  );
  let json = await response.json();

  if (json.data.allPost[0].expiration && new Date(json.data.allPost[0].expiration) < Date.now()) {
    res.status(404).json({
      data: {
        allPost: [
          {
            message: "This post has expired, and is no longer accessible.",
            error: true
          },
        ],
      },
    });
  } else {
    res.status(200).json(json);
  }
}
