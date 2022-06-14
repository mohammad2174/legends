import { Component } from 'react';
import SHOP_DATA from './shop.data';
import CollectionPreview from '../components/CollectionPreview';
import Header from '../components/Header';

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
                <Header />
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