import ItemCard from '../ItemCard/ItemCard';
import './ItemList.css';

const ItemList = ({ products }) => {
  return (
    <div className='item-list'>
      {products.map((product) => (
        <ItemCard key={product.id} item={product} />
      ))}
    </div>
  );
};

export default ItemList;
