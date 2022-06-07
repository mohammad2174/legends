import React from 'react';
import styles from '../styles/CardIcon.module.scss'
import ShoppingIcon from '../assets/shopping-bag.svg'
import { connect } from 'react-redux'
import { toggleCardHidden } from '../redux/card/card.action';
import { selectCardItemsCount } from '../redux/card/card.selectors'
import { createStructuredSelector } from 'reselect'

const CardIcon = ({ toggleCardHidden, itemCount }) => {
    return (
        <div className={styles.cardicon} onClick={toggleCardHidden}>
            <img src={ShoppingIcon.src} className={styles.shoppingicon} />
            <span className={styles.itemcount}>{itemCount}</span>
        </div>
    )
}

const mapDispatchToProps = dispatch => ({
    toggleCardHidden: () => dispatch(toggleCardHidden())
})

const mapStateToProps = createStructuredSelector({
    itemCount: selectCardItemsCount
})

export default connect(mapStateToProps, mapDispatchToProps)(CardIcon)