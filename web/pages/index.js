import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/Home.module.css'
import FloatingIcon from '../components/Icon'
import { VscArrowRight } from 'react-icons/vsc'
import Card from '../components/Card'
import memoji from '../public/memoji.png'

import Footer from '../components/Footer'

import { gql } from "@apollo/client";
import client from "../apollo-client";

import metadataQuery from '../queries/metadata'

export default function Home({ metadata, proudProjects, portfolioProjects }) {
  return (
    <div>
      <div className={styles.intro}>
        <Head>
          <meta name="description" content="About me" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hello,<br />I'm Patrick
          </h1>

          <div className={styles.socials}>
            <FloatingIcon glyph="github" size={45} href={metadata.github.url} />
            {/* <Icon glyph="instagram" size={45} href={metadata.instagram.url} /> */}
            <FloatingIcon glyph="twitter" size={45} href={metadata.twitter.url} />
            <FloatingIcon glyph="email" size={45} href={"mailto:" + metadata.email} />
          </div>
        </main>
        <div className={"absolute bottom-0 right-0"}>
          <Image src={memoji} alt="Image of me" />
        </div>
      </div>
      <div className="bg-gray-200">
        <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
          <h2 className={"text-2xl mb-4 font-medium"}>
            Work I'm proud of
          </h2>
          <div className="flex flex-wrap -mx-3">
            {proudProjects.map((project, i) => {
              const image = project.images ? project.images[0].asset.url : ""
              return (
                <Card href={'/project/' + project.slug?.current} key={i} src={image}>
                  <h3 className="font-medium text-lg">{project.title}</h3>
                  <p className="text-sm">
                    {project.description}
                  </p>
                </Card>
              )
            }
            )}

          </div>
        </div>
      </div>
      <div>
        <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
          <h2 className={"text-2xl mb-4 font-medium"}>
            About me
          </h2>
          <p>{metadata.bio}</p>
        </div>
        {/* *images of me* */}
      </div>
      <div className="bg-gray-200">
        <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
          <h2 className={"text-2xl mb-4 font-medium"}>
            Other highlights
          </h2>
          <div className="flex flex-wrap -mx-3">
            {portfolioProjects.map((project, i) => (
              <div key={i} className="my-6 px-6 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                <Link href={'/project/' + project.slug?.current} >
                  <a>
                    <h3 className="font-medium text-lg">{project.title}</h3>
                    <p className="text-sm">
                      {project.description}
                    </p>
                  </a>
                </Link>
              </div>
            ))}
          </div>
          <div className="flex justify-center my-8 mb-4">
            <Link href="/projects">
              <a className="bg-gray-300 p-4 transition-all rounded-full px-8">View All Projects <VscArrowRight className="inline mb-1" /></a>
            </Link>
          </div>
        </div>
      </div>
      <Footer background="white" metadata={metadata} />
    </div>
  )
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
      proudProjects: data.allFormat.find(f => f.slug?.current == "proud-work").projects,
      resumeProjects: data.allFormat.find(f => f.slug?.current == "resume").projects,
      portfolioProjects: data.allFormat.find(f => f.slug?.current == "portfolio")?.projects.slice(0, 4),
    }
  };
}