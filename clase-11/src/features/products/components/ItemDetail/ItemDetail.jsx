import Card from '../../../../shared/components/Card/Card';
import ItemCount from '../ItemCount/ItemCount';

import './ItemDetail.css';

const ItemDetail = ({ item }) => {
  return (
    <Card className='item-detail'>
      <div className='item-detail-image'>
        <img src={item.image} alt={item.title} loading='lazy' />
      </div>

      <div className='item-detail-info'>
        <span className='item-detail-category'>{item.category}</span>
        <h1 className='item-detail-title'>{item.title}</h1>
        <p className='item-detail-rating'>
          ⭐ {item.rating.rate} <span>({item.rating.count} opiniones)</span>
        </p>
        <p className='item-detail-price'>{item.price}</p>
        <p className='item-detail-description'>{item.description}</p>
        <p className='item-detail-stock'>Stock: {item.stock}</p>
        <ItemCount stock={item.stock} />
      </div>
    </Card>
  );
};

export default ItemDetail;
