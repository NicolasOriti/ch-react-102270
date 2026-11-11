import './CartItem.css';

const CartItem = ({ item, onRemove }) => {
  const subtotal = item.price * item.quantity;

  return (
    <li className='cart-item'>
      <img className='cart-item-image' src={item.image} alt={item.title} />

      <div className='cart-item-info'>
        <h3 className='cart-item-title'>{item.title}</h3>
        <p className='cart-item-detail'>
          {item.quantity} x ${item.price}
        </p>
      </div>

      <p className='cart-item-subtotal'>${subtotal}</p>

      <button type='button' className='cart-item-remove' onClick={() => onRemove(item.id)}>
        Eliminar
      </button>
    </li>
  );
};

export default CartItem;
