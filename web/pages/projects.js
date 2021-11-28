import Link from "next/link";
import { Card, Piece, Navbar, Footer } from "../components";
import { gql } from "@apollo/client";
import client from "../apollo-client";
import { VscArrowRight } from "react-icons/vsc";

import metadataQuery from "../queries/metadata";

export default function Component({
  proudProjects,
  portfolioProjects,
  metadata,
}) {
  return (
    <div>
      <Navbar />
      <div className="bg-gray-200">
        <div className="max-w-screen-lg mx-auto p-10">
          <h1 className="section">Featured Projects</h1>
          <div className="flex flex-wrap -mx-3">
            {proudProjects.map((project, i) => {
              const image = project.images
                ? project.images[0].asset.url
                : "test";
              return (
                <>
                  <Card
                    href={"/project/" + project.slug?.current}
                    key={i}
                    src={image}
                  >
                    <h3 className="font-medium text-lg">
                      {project.title}{" "}
                      <VscArrowRight className="group-hover-arrow" />
                    </h3>
                    <p className="text-sm">{project.description}</p>
                  </Card>
                </>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-lg mx-auto p-10">
          <h1 className="section">Other Projects</h1>
          <div className="flex flex-wrap -mx-3">
            {portfolioProjects.map((project, i) => (
              <Piece
                key={i}
                href={`/project/${project.slug?.current}`}
                description={project.description}
                header={project.title}
                className="hover:bg-gray-100"
              />
            ))}
          </div>
        </div>
      </div>
      <Footer metadata={metadata} />
    </div>
  );
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
        query {
          ${metadataQuery}
          allFormat {
            slug {
              current
            }
            projects {
              title
              description
              slug {
                current
              }
              images {
                asset {
                  url
                }
              }
            }
          }
        }
      `,
  });
  return {
    props: {
      proudProjects: data.allFormat.find((f) => f.slug?.current == "proud-work")
        .projects,
      portfolioProjects: data.allFormat.find(
        (f) => f.slug?.current == "portfolio"
      )?.projects,
      metadata: data.allMeta[0],
    },
  };
}
