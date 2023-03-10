import '../styles/globals.css'
import type { AppProps } from 'next/app'
import Head from 'next/head'
import Layout from '../components/Layout'

export default function App({ Component: Page, pageProps }: AppProps) {
  return (
    <>
      <Head>
        <title>Bits</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        <Page {...pageProps} />
      </Layout>
    </>
  )
}
