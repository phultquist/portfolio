import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import styles from "../styles/Home.module.css";
import FloatingIcon from "../components/Icon";
import { VscArrowRight } from "react-icons/vsc";
import Card from "../components/Card";
import Piece from "../components/Piece";
import Navbar from "../components/Navbar";

import Footer from "../components/Footer";

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
        <main className={styles.main}>
          <h1 className="text-5xl mb-4">Hello, I'm Patrick</h1>

          <div className={'flex flex-row'}>
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
          <h2 className={"text-2xl mb-4 font-medium"}>Work I'm proud of</h2>
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
                    <VscArrowRight className="inline opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all mb-1" />
                  </h3>
                  <p className="text-sm">{project.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
          <h2 className={"text-2xl mb-4 font-medium"}>About me</h2>
          <p>{metadata.bio}</p>
        </div>
        {/* *images of me* */}
      </div>
      <div className="bg-gray-200">
        <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
          <h2 className={"text-2xl mb-4 font-medium"}>Other highlights</h2>
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
