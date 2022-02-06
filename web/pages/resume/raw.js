import Resume from "../../components/Resume";

import { gql } from "@apollo/client";
import client from "../../apollo-client";

import metadataQuery from "../../queries/metadata";

export default function Component({ metadata, resume }) {
  return (
    <div className={"mx-auto py-10 px-10 space-y-4"}>
      <Resume resume={resume} metadata={metadata} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
          query {
            ${metadataQuery}
            allFormat(where: { slug: { current: {eq: "resume" } } }) {
              title
              experiences {
                  title
                  description
                  startDate
                  endDate
                  company
                  slug {
                      current
                  }
              }
              projects {
                  title
                  description
                  startDate
                  endDate
              }
              educations {
                  title
                  startDate
                  endDate
                  school
              }

            }
          }
        `,
  });
  return {
    props: {
      metadata: data.allMeta[0],
      resume: data.allFormat[0],
    },
  };
}
