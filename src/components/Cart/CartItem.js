import React from 'react'
import styles from './CartItem.module.css'
const CartItem = (props) => {
    return (
        <div className={styles['cart-item']}>
            <h2>{props.item.name}</h2>
            <div className={styles.summary}>
                <span className={styles.amount}>x{props.item.quantity}</span>
                <span className={styles.price}>{props.item.price}</span>
            </div>
            <div>

                <button onClick={props.onRemove}>-</button>
                <button onClick={props.onAdd}>+</button>
            </div>

        </div>
    )
}

export default CartItem