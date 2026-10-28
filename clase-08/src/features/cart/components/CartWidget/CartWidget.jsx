import './CartWidget.css';

const CartWidget = () => {
  const itemCount = 3;

  return (
    <button className='cart-widget' aria-label={`Carrito con ${itemCount} productos`}>
      <span className='cart-icon' aria-hidden='true'>
        🛒
      </span>
      <span className='cart-badge'>{itemCount}</span>
    </button>
  );
};

export default CartWidget;
