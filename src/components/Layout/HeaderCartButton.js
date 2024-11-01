import { useContext } from 'react';
import CartIcon from '../Cart/CartIcon';
import classes from './HeaderCartButton.module.css';
import CartContext from '../../Store/cart-context';
const HeaderCartButton = (props) => {
  const ctxobj = useContext(CartContext)
  const totalCartItems = ctxobj.items.reduce((sum, item) => {
    return sum + item.quantity
  }, 0)
  console.log(totalCartItems)
  return (
    <button className={classes.button} onClick={() => props.onCartClick()}>
      <span className={classes.icon}>
        <CartIcon />
      </span>
      <span>Your Cart</span>
      <span className={classes.badge}>{totalCartItems}</span>
    </button>
  );
};

export default HeaderCartButton;
