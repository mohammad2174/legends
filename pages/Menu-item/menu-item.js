import { withRouter, useRouter } from 'next/router'
import styles from '../../styles/MenuItem.module.scss'

const MenuItem = ({ title, imageUrl, size, linkUrl }) => {
    const router = useRouter()
    return (
        <div className={`${size} ${styles.menuitem}`} onClick={() => router.push(`${linkUrl}`)}>
            <div className={styles.backgroundimage} style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className={styles.content}>
                <h1 className={styles.title}>{title.toUpperCase()}</h1>
                <span className={styles.subtitle}>SHOP NOW</span>
            </div>
        </div>
    )
}

export default withRouter(MenuItem)