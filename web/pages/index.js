import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Icon from '../components/Icon'
import memoji from '../public/memoji.png'

import { gql } from "@apollo/client";
import client from "../apollo-client";

export default function Home({ metadata }) {
  return (
    <div className={"container"}>
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
        test baby
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
      }
    `,
  });

  return {
    props: {
      metadata: data.allMeta[0],
    },
  };
}