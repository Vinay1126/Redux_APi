import React, { useState, useEffect } from 'react';
import { Products } from './features/products/Products';
import { Cart } from './features/cart/Cart'
import { useSelector, useDispatch } from 'react-redux';
import { fetchAsync } from './features/cart/cartSlice';
import './App.css';

function App() {

  const [showCart, setShowCart] = useState(false);
  const dispatch = useDispatch();

  const items = useSelector((state) => state.cart.items)

  useEffect(() => {
    dispatch(fetchAsync())
  }, []);

  return (
    <div className="App">
      <button onClick={() => { setShowCart(!showCart) }}>Show Cart [{items.length}]</button>
      {
        showCart ? <Cart /> : <Products />
      }

    </div>
  );
}

export default App;
