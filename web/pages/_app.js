import '../styles/globals.css'
import Head from 'next/head'
// import 'tailwindcss/tailwind.css'

function MyApp({ Component, pageProps }) {
  return <>
    <Head>
      <link rel="icon" href="/favicon.ico" />
      <title>Patrick Hultquist</title>
    </Head>
    <Component {...pageProps} />
  </>
}

export default MyApp
