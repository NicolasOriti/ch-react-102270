import { Link } from 'react-router';

import Card from '../../../../shared/components/Card/Card';
import ItemCount from '../ItemCount/ItemCount';
import './ItemCard.css';

const ItemCard = ({ item }) => {
  return (
    <Link to={`/item/${item.id}`} className='item-link'>
      <Card className='item'>
        <div className='item-image'>
          <img src={item.image} alt={item.title} loading='lazy' />
        </div>
        <div className='item-info'>
          <span className='item-category'>{item.category}</span>
          <h2 className='item-title'>{item.title}</h2>
          <p className='item-rating'>
            ⭐ {item.rating.rate} <span>({item.rating.count} opiniones)</span>
          </p>
          <p className='item-price'>Price: ${item.price.toFixed(2)}</p>
          <ItemCount stock={item.stock} />
        </div>
      </Card>
    </Link>
  );
};

export default ItemCard;
