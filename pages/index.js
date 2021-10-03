import Head from 'next/head'
import Layout from "../components/Layout";

export default function Home() {
  return (
      <Layout>
          <div>
              <Head>
                  <title>
                      Ghayoor
                  </title>
                  <meta/>
              </Head>
              <h1>Welcome to next</h1>
          </div>
      </Layout>
  )
}
