import React from 'react';

const ItemCard = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>Price: ${item.price}</p>
    </div>
  );
};

export default ItemCard;
