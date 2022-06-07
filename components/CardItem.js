import React from 'react';
import styles from '../styles/CardItem.module.scss'

const CardItem = ({ item: { imageUrl, price, name, quantity } }) => (
    <div className={styles.carditem}>
        <img src={imageUrl} alt='item' />
        <div className={styles.itemdetails}>
            <span className={styles.name}>{name}</span>
            <span className={styles.name}>{price}*{quantity}</span>
        </div>
    </div>
)

export default CardItem