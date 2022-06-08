import React from 'react';
import styles from '../styles/CardDropDown.module.scss'
import CustomButton from './CustomButton.js'
import CardItem from './CardItem'
import { connect } from 'react-redux'
import { selectCardItems } from '../redux/card/card.selectors'
import { createStructuredSelector } from 'reselect'
import { withRouter, useRouter } from 'next/router'
import { toggleCardHidden } from '../redux/card/card.action'

const CardDropDown = ({ cardItems, dispatch }) => {
    const router = useRouter()
    return (
        <div className={styles.carddropdown}>
            <div className={styles.carditems}>
                {
                    cardItems.length ?
                        cardItems.map(cardItem => (
                            <CardItem key={cardItem.id} item={cardItem} />
                        )) : <span className={styles.emptymessage}>Your card is Empty</span>
                }

            </div>
            <CustomButton onClick={() => { router.push('/checkout'); dispatch(toggleCardHidden()); }}>Go To Checkout</CustomButton>
        </div>
    )
}

const mapStateToProps = createStructuredSelector({
    cardItems: selectCardItems
})

export default withRouter(connect(mapStateToProps)(CardDropDown))