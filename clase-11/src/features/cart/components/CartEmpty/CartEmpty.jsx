import { Link } from 'react-router';

import './CartEmpty.css';

const CartEmpty = () => {
  <div className='cart-empty'>
    <p className='cart-empty-icon'>🥟</p>
    <h2 className='cart-empty-title'>Tu carrito esta vacio</h2>
    <p>Las empanadas te esperan!!</p>
    <Link className='cart-empty-link'>Ver empanadas disponibles</Link>
  </div>;
};

export default CartEmpty;
