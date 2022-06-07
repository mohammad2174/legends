import React from 'react';
import styles from '../styles/Collection.module.scss';
import { connect } from 'react-redux'
import { selectCollection } from '../redux/shop/shop.selectors'
import CollectionItem from './CollectionItem'

const CollcetionPage = ({ collection }) => {
    const { title, items } = collection
    return (
        <div className={styles.collectionpage}>
            <h2 className={styles.title}>{title}</h2>
            <div className={styles.items}>
                {items.map(item => <CollectionItem key={item.id} item={item} />)}
            </div>
        </div>
    )
}

const mapStateToProps = (state, ownProps) => ({
    collection: selectCollection(ownProps.match.params.collectionId)(state)
})

export default connect(mapStateToProps)(CollcetionPage)