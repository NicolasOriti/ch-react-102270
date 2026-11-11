import { useCartContext } from '../../context/CartContext';
import CartEmpty from '../CartEmpty/CartEmpty';
import CartItem from '../CartItem/CartItem';
import CartSummary from '../CartSummary/CartSummary';

import './Cart.css';

const Cart = () => {
  const { cart, removeItem, clear, totalItems, totalPrice } = useCartContext();

  if (cart.length === 0) {
    return <CartEmpty />;
  }

  return (
    <div className='cart'>
      <ul className='cart-list'>
        {cart.map((item) => (
          <CartItem key={item.id} item={item} onRemove={removeItem} />
        ))}
      </ul>

      <CartSummary totalItems={totalItems} totalPrice={totalPrice} onClear={clear} />
    </div>
  );
};

export default Cart;
