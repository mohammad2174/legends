import { Component } from 'react';
import SHOP_DATA from '../shop.data';
import CollectionItem from '../../components/CollectionItem';
import styles from '../../styles/CollectionPreview.module.scss'
import Header from '../../components/Header';

class Sneakers extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div className={styles.collectionpreview}>
                <Header />
                <h1 className={styles.title}>{collections[1].title.toUpperCase()}</h1>
                <div className={styles.preview}>
                    {
                        collections[1].items.map(({ id, ...item }) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default Sneakers