// import React from 'react'
// import Link from 'next/link';
// import { useRouter } from 'next/router'
// import { fetchCollectionStartAsync } from '../redux/shop/shop.action'
// import CollectionPageContainer from '../components/CollectionContainer';
// import CollectionOverViewContainer from '../components/CollectionOverviewContainer'
// import { connect } from 'react-redux'

// class ShopPage extends React.Component {
//     componentDidMount() {
//         const { fetchCollectionStartAsync } = this.props
//         fetchCollectionStartAsync()
//     }

//     render() {
//         const { match } = this.props
//         return (
//             <div className='shop-page'>
//                 <Link exact path={`${match.path}`}>{CollectionOverViewContainer}</Link>
//                 <Link path={`${match.path}/:collectionId`}>{CollectionPageContainer}</Link>
//             </div>
//         )
//     }
// }

// const mapDispatchToProps = dispatch => ({
//     fetchCollectionStartAsync: () => dispatch(fetchCollectionStartAsync())
// })

// export default connect(null, mapDispatchToProps)(ShopPage)
import { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../components/CollectionPreview';

class ShopPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            collections: SHOP_DATA
        }
    }
    render() {
        const { collections } = this.state
        return (
            <div>
                {
                    collections.map(({ id, ...otherProps }) => (
                        <CollectionPreview key={id} {...otherProps} />
                    ))
                }
            </div>
        )
    }
}

export default ShopPage