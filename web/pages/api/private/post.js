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

  const response = await fetch(process.env.PRIVATE_DATABASE_URL, requestOptions)
  const json = await response.json();

  res.status(200).json(json);
}
