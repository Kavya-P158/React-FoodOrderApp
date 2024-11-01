import { Fragment, useState } from 'react';

import Header from './components/Layout/Header';
import Meals from './components/Meals/Meals';
import Cart from './components/Cart/Cart';
import CartProvider from './Store/CartProvider';
function App() {
  const [showCart, setshowCart] = useState(false);

  const EnableCart = () => {
    setshowCart(true)
  }

  const DisableCart = () => {
    setshowCart(false)
  }

  return (
    <CartProvider>
      {
        showCart && <Cart onCartDisable={DisableCart} />
      }
      <Header onCartClick={EnableCart} />
      <main>
        <Meals />
      </main>
    </CartProvider>
  );
}

export default App;
