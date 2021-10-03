
import headerStyles from '../styles/Header.module.css'

const Header = () => {
    return (
        <div>
            <h1 className={headerStyles.title}>
                <span>Ghayoor</span>.com
            </h1>
            <p className={headerStyles.description}>
                My personal online resume
            </p>
        </div>
    )
}

export default Header
