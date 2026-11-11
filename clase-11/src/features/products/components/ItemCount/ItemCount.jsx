import { useState } from 'react';
import './ItemCount.css';

const ItemCount = ({ stock = 10 }) => {
  const [count, setCount] = useState(1);

  const decrement = () => {
    setCount((prevCount) => prevCount - 1, 1);
  };

  const increment = () => {
    setCount((prevCount) => prevCount + 1, stock);
  };

  const addToCart = () => {
    console.log(`Agregado al carrito: ${count}`);
  };

  return (
    <div className='item-count'>
      <div className='item-count-controls'>
        <button
          className='item-count-button'
          onClick={decrement}
          disabled={count <= 1}
          aria-label='Decrementar'
        >
          -
        </button>
        <span className='item-count-value'>{count}</span>
        <button
          className='item-count-button'
          onClick={increment}
          disabled={count >= stock}
          aria-label='Incrementar'
        >
          +
        </button>
      </div>

      <button
        className='item-count-button'
        onClick={addToCart}
        disabled={count === 0}
        aria-label='Agregar al carrito'
      >
        Agregar
      </button>
    </div>
  );
};

export default ItemCount;
