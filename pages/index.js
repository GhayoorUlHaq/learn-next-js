import Head from 'next/head'
import Layout from "../components/Layout";
import Articles from "../components/Articles";
import { server } from '../config'

export default function Home({articles}) {
  return (
      <Layout>
          <div>
              <h1>Enjoy the articles</h1>
              <Articles articles={articles}  />
          </div>
      </Layout>
  )
}

export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`)
  const articles = await res.json()
  return {
    props: {
      articles,
    },
  }
}

// export const getStaticProps = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//   const articles = await res.json()
//   return {
//     props: {
//       articles,
//     },
//   }
// }
