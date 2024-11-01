import React, { useContext } from 'react'
import styles from './MealList.module.css'
import MealForm from './MealForm';
import CartContext from '../../Store/cart-context';
const MealList = (props) => {
    const price = `$${props.data.price.toFixed(2)}`;

    const ctxobj = useContext(CartContext)

    const updateItemsHandler = (amount) => {
        ctxobj.addItem({
            id: props.data.id,
            name: props.data.name,
            quantity: amount,
            price: props.data.price
        })
    }
    return (
        <li className={styles.meal}>
            <h3>{props.data.name}</h3>
            <div className={styles.description}>{props.data.description}</div>
            <div className={styles.price}>{price}</div>
            <div>
                <MealForm
                    onSetAmount={updateItemsHandler}
                    id={props.data.key}

                />
            </div>
        </li>
    )
}

export default MealList