import styles from '../styles/CollectionPreview.module.scss'
import CollectionItem from './CollectionItem';

const CollectionPreview = ({ items, title }) => (
    <div className={styles.collectionpreview}>
        <h1 className={styles.title}>{title.toUpperCase()}</h1>
        <div className={styles.preview}>
            {
                items.filter((item, index) => index < 4).map((item) => (
                    <CollectionItem key={item.id} item={item} />
                ))
            }
        </div>
    </div>
)


export default CollectionPreview