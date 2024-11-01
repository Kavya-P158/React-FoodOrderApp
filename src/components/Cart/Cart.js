import React, { useContext } from 'react'
import Modal from '../UI/Modal'
import styles from './Cart.module.css'
import CartContext from '../../Store/cart-context'
import CartItem from './CartItem'
const Cart = (props) => {
    const ctxobj = useContext(CartContext)

    const onAddItemHandler = (item) => {
        ctxobj.addItem({ ...item, quantity: 1 })
    }

    const onRemoveItemHandler = (id) => {
        ctxobj.removeItem(id);
        console.log(id)
        console.log("Inside cart")
    }
    const cartItems = ctxobj.items.map((item) =>
        <CartItem
            item={item}
            key={item.id}
            id={item.id}
            onAdd={onAddItemHandler.bind(null, item)}
            onRemove={onRemoveItemHandler.bind(null, item.id)}
        />)



    const handleOrder = () => {
        console.log("Ordered!!");
        props.onCartDisable()
    }


    return (
        <Modal onCartDisable={props.onCartDisable}>
            <ul className={styles['cart-items']}>
                {cartItems}
            </ul>
            <div className={styles.total}>
                <span>Total</span>
                <span>{ctxobj.totalAmount}</span>
            </div>
            <div className={styles.actions}>

                <button className={styles['button--alt']} onClick={props.onCartDisable} >Cancel</button>
                <button className={styles.button} onClick={handleOrder}>Order</button>
            </div>
        </Modal>
    )
}

export default Cart