import { useState } from 'react';

import ItemCard from '../ItemCard/ItemCard';

import './ItemListContainer.css';

const PRODUCTS = [
  { id: 1, name: 'Producto 1', price: 100 },
  { id: 2, name: 'Producto 2', price: 200 },
  { id: 3, name: 'Producto 3', price: 300 },
];

const ItemListContainer = (props) => {
  console.log('Los props son: ', props);

  const [items, setItems] = useState(PRODUCTS);

  return (
    <main className='item-list-container'>
      <section className='item-list-section'>
        <h1>{props.greeting}</h1>

        {items.map((item) => {
          console.log('El item es: ', item);
          return <ItemCard item={item} />;
        })}
      </section>
    </main>
  );
};

export default ItemListContainer;
