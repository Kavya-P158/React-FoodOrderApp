
import React, { useReducer } from 'react'
import CartContext from './cart-context'

const defaultvalue = {
    items: [],
    totalAmount: 0,

}

const cartUpdater = (state, action) => {
    if (action.type === 'ADDTOCART') {
        let updatedItems;

        const alreadyAvailableItem = state.items.findIndex((item) => item.id === action.item.id)
        const tobeUpdatedItem = state.items[alreadyAvailableItem];
        if (tobeUpdatedItem) {
            let updatedItem;

            updatedItem = {
                ...tobeUpdatedItem,
                quantity: tobeUpdatedItem.quantity + action.item.quantity
            }

            updatedItems = [...state.items]
            updatedItems[alreadyAvailableItem] = updatedItem

        }
        else {
            updatedItems = state.items.concat(action.item);
        }


        const updatedTotalAmount = state.totalAmount + (action.item.price * action.item.quantity)
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    if (action.type === 'REMOVEITEM') {
        let updatedItems;
        console.log(action.type)
        const tobeupdatedItemindex = state.items.findIndex((item) => item.id === action.id)
        console.log(action.id)
        const tobeUpdatedItem = state.items[tobeupdatedItemindex]
        if (tobeUpdatedItem.quantity === 1) {
            updatedItems = state.items.filter((item) => item.id != action.id)

        }
        else {
            const updatedItem = { ...tobeUpdatedItem, quantity: tobeUpdatedItem.quantity - 1 }
            updatedItems = [...state.items]
            updatedItems[tobeupdatedItemindex] = updatedItem
        }
        const updatedTotalAmount = state.totalAmount - tobeUpdatedItem.price;
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
        }
    }
    return defaultvalue;
}

const CartProvider = (props) => {


    const [cartstate, dispatchCart] = useReducer(cartUpdater, defaultvalue)

    const addItemToCart = (item) => {
        dispatchCart({ type: 'ADDTOCART', item: item })
    }

    const removeItemFromCart = (id) => {
        console.log("id is " + id)
        dispatchCart({ type: 'REMOVEITEM', id: id })
    }
    const cartContext = {
        items: cartstate.items,
        totalAmount: cartstate.totalAmount,
        addItem: addItemToCart,
        removeItem: removeItemFromCart
    }
    return (
        <CartContext.Provider value={cartContext}>
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider