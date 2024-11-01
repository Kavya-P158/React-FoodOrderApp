import React, { useContext, useRef, useState } from 'react'
import Input from '../UI/Input'
import styles from './MealForm.module.css'
import CartContext from '../../Store/cart-context'
const MealForm = (props) => {
    const ctxobj = useContext(CartContext)
    const inputref = useRef();
    const [isvalidAmount, setValidAmount] = useState(true)

    const onsubmitHandler = (event) => {
        event.preventDefault();
        const enteredAmount = inputref.current.value;
        const enteredAmountInt = +enteredAmount;
        if (enteredAmount.trim().length < 0) {
            setValidAmount(false)
            return;
        }
        props.onSetAmount(enteredAmountInt)
    }

    return (
        <form className={styles.form} onSubmit={onsubmitHandler}>
            <Input
                ref={inputref}
                label='Amount'
                input={
                    {
                        type: 'text',
                        id: props.id,
                        min: '1',
                        max: '5',
                        step: '1',
                        defaultValue: '1'
                    }
                }
            />
            <button>Add to Cart</button>
            {!isvalidAmount && <p>Enter valid amount</p>}
        </form>
    )
}

export default MealForm