import { useCartContext } from '../../context/CartContext';
import { Link } from 'react-router';

import './CartWidget.css';

const CartWidget = () => {
  const { totalItems } = useCartContext();

  return (
    <Link to='/cart' className='cart-widget' aria-label={`Carrito con ${totalItems} productos`}>
      <span className='cart-icon' aria-hidden='true'>
        🛒
      </span>
      <span className='cart-badge'>{totalItems}</span>
    </Link>
  );
};

export default CartWidget;
