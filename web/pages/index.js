import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { VscArrowRight } from "react-icons/vsc";
import {
  Card,
  Piece,
  Navbar,
  Footer,
  Icon as FloatingIcon,
} from "../components";

import { gql } from "@apollo/client";
import client from "../apollo-client";

import metadataQuery from "../queries/metadata";

export default function Home({ metadata, proudProjects, portfolioProjects }) {
  return (
    <div>
      <Head>
        <meta name="description" content="About me" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="flex flex-col align-middle h-96 container mx-auto max-w-screen-lg px-10">
        <main className="flex flex-1 flex-col justify-center items-left">
          <h1 className="text-5xl mb-4">Hello, I'm Patrick</h1>

          <div className={"flex flex-row"}>
            <FloatingIcon glyph="github" size={45} href={metadata.github.url} />
            <FloatingIcon
              glyph="twitter"
              size={45}
              href={metadata.twitter.url}
            />
            <FloatingIcon
              glyph="email"
              size={45}
              href={"mailto:" + metadata.email}
            />
            <Link href="/resume">
              <a
                href="/resume"
                className="my-auto cursor-pointer p-2 hover:bg-gray-100 rounded-md transition-all"
              >
                Resume <VscArrowRight className="mb-1 inline" />
              </a>
            </Link>
          </div>
        </main>
      </div>
      <div className="bg-gray-200">
        <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
          <h2 className="section">Work I'm proud of</h2>
          <div className="flex flex-wrap -mx-3">
            {proudProjects.map((project, i) => {
              const image = project.images ? project.images[0].asset.url : "";
              return (
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
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className="max-w-screen-lg mx-auto py-10 px-10 md:flex">
          <div>
            <h2 className="section">About me</h2>
            <p>{metadata.bio}</p>
          </div>
          <div className="w-40 h-40 mx-0 mt-10 md:mt-0 md:mx-10 relative flex-none rounded-2xl overflow-hidden">
            <Image
              src="/image.jpg"
              href="Picture of me"
              layout="fill"
              className="object-cover"
            />
          </div>
        </div>
      </div>
      <div className="bg-gray-200">
        <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
          <h2 className="section">Other highlights</h2>
          <div className="flex flex-wrap -mx-3">
            {portfolioProjects.map((project, i) => (
              <Piece
                key={i}
                href={"/project/" + project.slug?.current}
                description={project.description}
                header={project.title}
              />
            ))}
          </div>
          <div className="flex justify-center my-8 mb-4 transition-all">
            <Link href="/projects">
              <a className="hover:bg-gray-250 p-4 transition-all rounded-lg group">
                View All Projects <VscArrowRight className="inline mb-1" />
              </a>
            </Link>
          </div>
        </div>
      </div>
      <Footer className="bg-white" metadata={metadata} />
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
      metadata: data.allMeta[0],
      proudProjects: data.allFormat.find((f) => f.slug?.current == "proud-work")
        .projects,
      resumeProjects: data.allFormat.find((f) => f.slug?.current == "resume")
        .projects,
      portfolioProjects: data.allFormat
        .find((f) => f.slug?.current == "portfolio")
        ?.projects.slice(0, 4),
    },
  };
}
