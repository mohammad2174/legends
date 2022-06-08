import React from 'react';
import styles from '../styles/Checkout.module.scss'
import { connect } from 'react-redux'
import { createStructuredSelector } from 'reselect'
import { selectCardItems, selectCardTotal } from '../redux/card/card.selectors'
import CheckoutItem from '../components/CheckoutItem'

const CheckoutPage = ({ cardItems, total }) => (
    <div className={styles.checkoutpage}>
        <div className={styles.checkoutheader}>
            <div className={styles.headerblock}>
                <span>Product</span>
            </div>
            <div className={styles.headerblock}>
                <span>Description</span>
            </div>
            <div className={styles.headerblock}>
                <span>Quantity</span>
            </div>
            <div className={styles.headerblock}>
                <span>Price</span>
            </div>
            <div className={styles.headerblock}>
                <span>Remove</span>
            </div>
        </div>
        {
            cardItems.map(cardItem => <CheckoutItem key={cardItem.id} cardItem={cardItem} />)
        }
        <div className={styles.total}>
            <span className={styles.itemtotal}>Total : ${total}</span>
            <button className={styles.paymentbutton} value={total}>Payment</button>
        </div>
    </div>
)

const mapStateToProps = createStructuredSelector({
    cardItems: selectCardItems,
    total: selectCardTotal
})

export default connect(mapStateToProps)(CheckoutPage)