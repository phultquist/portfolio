import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Icon from '../components/Icon'
import Card from '../components/Card'
import memoji from '../public/memoji.png'

import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ metadata, projects }) {
  const proudProjects = projects.filter(project => project.formats?.some(format => format.slug.current === 'proud-work'));
  // const proudProjects = projects.filter(project => project.formats.some(f => f.slug.current === 'proud-work'));
  return (
    <div>
      <div className={styles.intro}>
        <Head>
          <title>Patrick Hultquist</title>
          <meta name="description" content="About me" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <main className={styles.main}>
          <h1 className={styles.title}>
            Hello,<br />I'm Patrick
          </h1>

          <div className={styles.socials}>
            <Icon glyph="github" size={45} href={metadata.github.url} />
            {/* <Icon glyph="instagram" size={45} href={metadata.instagram.url} /> */}
            <Icon glyph="twitter" size={45} href={metadata.twitter.url} />
            <Icon glyph="email" size={45} href={"mailto:" + metadata.email} />
          </div>
        </main>
        <div className={"absolute bottom-0 right-0"}>
          <Image src={memoji} />
        </div>
      </div>
      <div className={"bg-gray-200"}>
        <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
          <h1 className={"text-2xl mb-4 font-medium"}>
            Work I'm proud of
          </h1>
          <div className="flex flex-wrap -mx-3">
            {proudProjects.map((project, i) => (
              <Card href={'/project/' + project.slug?.current} key={i} image={memoji}>
                <h3 className="font-medium text-lg">{project.title}</h3>
                <p className="text-sm">
                  {project.description}
                </p>
              </Card>
            ))}

          </div>
          <p>
            {JSON.stringify(projects, null, 2)}<br /><br />
            {JSON.stringify(projects.map(p => p.formats), null, 2)}<br />

          </p>
        </div>
      </div>
      <div>
        <div className={"max-w-screen-lg mx-auto py-10 px-10"}>
          <h1 className={"text-2xl mb-4 font-medium"}>
            Other projects
          </h1>
          <div className="flex flex-wrap -mx-3">
            {proudProjects.map((project, i) => (
              <div key={i} className="my-6 px-6 w-full md:w-1/2 lg:w-1/2 xl:w-1/2">
                <h3 className="font-medium text-lg">{project.title}</h3>
                <p className="text-sm">
                  {project.description}
                </p>
              </div>
            ))}

          </div>
        </div>
      </div>
    </div>
  )
}

export async function getStaticProps() {
  const { data } = await client.query({
    query: gql`
      query {
        allMeta {
          twitter {
            url
            username
          }
          github {
            url
            username
          }
          linkedin {
            url
            username
          }
        }
        allProject {
          title
          description
          slug {
            current
          }
          formats {
            title
            slug {
              current
            }
          }
        }
      }
    `,
  });

  return {
    props: {
      metadata: data.allMeta[0],
      projects: data.allProject,
    },
  };
}