import React from 'react';
import styles from '../styles/CheckoutItem.module.scss'
import { connect } from 'react-redux'
import { clearItemFromCard, addItem, removeItem } from '../redux/card/card.action'

const CheckoutItem = ({ cardItem, cleareItem, addItem, removeItem }) => {
    const { name, imageUrl, price, quantity } = cardItem
    return (
        <div className={styles.checkoutitem}>
            <div className={styles.imagecontainer}>
                <img alt='item' src={imageUrl} />
            </div>
            <span className={styles.name}>{name}</span>
            <span className={styles.quantity}>
                <div className={styles.arrow} onClick={() => removeItem(cardItem)}>&#10094;</div>
                <span className={styles.value}>{quantity}</span>
                <div className={styles.arrow} onClick={() => addItem(cardItem)}>&#10095;</div>
            </span>
            <span className={styles.price}>{price}</span>
            <div className={styles.removebutton} onClick={() => cleareItem(cardItem)}>&#10007;</div>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    cleareItem: item => dispatch(clearItemFromCard(item)),
    removeItem: item => dispatch(removeItem(item)),
    addItem: item => dispatch(addItem(item))
})

export default connect(null, mapDispatchToProps)(CheckoutItem)