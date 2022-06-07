import React from 'react';
import styles from '../styles/CollectionOverview.module.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import CollectionPreview from './CollectionPreview';
import { selectCollcetionsForPreview } from '../redux/shop/shop.selectors'

const CollectionOverview = ({ collections }) => (
    <div className={styles.collectionoverview}>
        {
            collections.map(({ id, ...otherProps }) => (
                <CollectionPreview key={id} {...otherProps} />
            ))
        }
    </div>
)

const mapStateToProps = createStructuredSelector({
    collections: selectCollcetionsForPreview
})

export default connect(mapStateToProps)(CollectionOverview)