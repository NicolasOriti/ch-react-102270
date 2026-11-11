import { useState } from 'react';

import './CartSummary.css';

const CartSummary = ({ totalItems, totalPrice, onClear }) => {
  const [showCheckoutNotice, setShowCheckoutNotice] = useState(false);

  return (
    <aside className='cart-summary'>
      <h2 className='cart-summary-title'>Resumen</h2>

      <p className='cart-summary-row'>
        <span>Productos ({totalItems})</span>
        <span>{`$${totalPrice}`}</span>
      </p>
      <p className='cart-summary-row cart-summary-total'>
        <span>Total</span>
        <span>{`$${totalPrice}`}</span>
      </p>

      {/* Placeholder: la orden real se genera con Firebase en el Módulo 7 */}
      <button
        type='button'
        className='cart-summary-checkout'
        onClick={() => setShowCheckoutNotice(true)}
      >
        Finalizar compra
      </button>
      {showCheckoutNotice && (
        <p className='cart-summary-notice' role='status'>
          El checkout llega en el próximo módulo 🚧
        </p>
      )}

      <button type='button' className='cart-summary-clear' onClick={onClear}>
        Vaciar carrito
      </button>
    </aside>
  );
};

export default CartSummary;
