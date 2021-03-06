import Layout from "../../../components/Layout";
import Link from 'next/link'
import { server } from '../../../config'
import Meta from '../../../components/Meta';

const article = ({article}) => {
    return (
        <Layout>
            <Meta title={article?.title} description={article?.body}/>
            <div>
                <h3>{article?.title}</h3>
                <p>{article?.body}</p>
            </div>
            <br />
            <Link href='/'>Go Back</Link>
        </Layout>

    );
};


export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)

    const article = await res.json()

    return {
        props: {
            article,
        },
    }
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)

    const articles = await res.json()

    const ids = articles.map((article) => article.id)
    const paths = ids.map((id) => ({ params: { id: id.toString() } }))

    return {
        paths,
        fallback: false,
    }
}


// ------------------ used when you want to generate static site
// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props: {
//             article,
//         },
//     }
// }
//
//
// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`)
//
//     const articles = await res.json()
//
//     const ids = articles.map((article) => article.id)
//     const paths = ids.map((id) => ({ params: { id: id.toString() } }))
//
//     return {
//         paths,
//         fallback: false,
//     }
// }

// ------------------ used when you want to generate static site


// export const getServerSideProps = async (context) => {
//     console.log(context?.params)
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json();
//
//     return {
//         props: {
//             article
//         }
//     }
// }

export default article;
