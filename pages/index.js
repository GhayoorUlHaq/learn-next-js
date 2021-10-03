import Head from 'next/head'
import Layout from "../components/Layout";
import Articles from "../components/Articles";

export default function Home({articles}) {
    console.log(articles)
  return (
      <Layout>
          <div>
              <Head>
                  <title>
                      Ghayoor
                  </title>
                  <meta/>
              </Head>
              <h1>Enjoy the articles</h1>
              <Articles articles={articles}  />
          </div>
      </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
  const articles = await res.json()
  return {
    props: {
      articles,
    },
  }
}
