import ArticleItem from './ArticleItem'
import articleStyles from '../styles/Articles.module.css'

const Articles = ({ articles }) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map((article, index) => (
                <ArticleItem key={`article_${index}`} article={article} />
            ))}
        </div>
    )
}

export default Articles
