import { Component } from 'react';
import SHOP_DATA from '../shop.data';
import CollectionItem from '../../components/CollectionItem';
import styles from '../../styles/CollectionPreview.module.scss'
import Header from '../../components/Header';

class Jackets extends Component {
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
                <h1 className={styles.title}>{collections[2].title.toUpperCase()}</h1>
                <div className={styles.preview}>
                    {
                        collections[2].items.map(({ id, ...item }) => (
                            <CollectionItem key={item.id} item={item} />
                        ))
                    }
                </div>
            </div>
        )
    }
}


export default Jackets