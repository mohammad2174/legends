import styles from '../styles/CollectionItem.module.scss'
import CustomButton from './CustomButton';
import { connect } from 'react-redux'
import { addItem } from '../redux/card/card.action'


const CollectionItem = ({ item, addItem }) => {
    const { name, price, imageUrl } = item;
    return (
        <div className={styles.collectionitem}>
            <div className={styles.image} style={{ backgroundImage: `url(${imageUrl})` }}></div>
            <div className={styles.collectionfooter}>
                <span className={styles.name}>{name}</span>
                <span className={styles.price}>{price}</span>
            </div>
            <CustomButton className={styles.custombutton} inverted onClick={() => addItem(item)}>ADD TO CARD</CustomButton>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CollectionItem)