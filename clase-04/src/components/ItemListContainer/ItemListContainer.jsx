import { useState } from 'react';

import ItemList from '../ItemList/ItemList';

import './ItemListContainer.css';

const PRODUCTS = [
  {
    id: 1,
    title: 'Empanada de JyQ',
    price: 2000,
    description: 'Deliciosa empanada de jamón y queso, perfecta para cualquier ocasión.',
    category: 'Empanadas clasicas',
    image:
      'https://resizer.glanacion.com/resizer/v2/-VTRMIWQDRFAVPKCEUV6RGFI7IU.jpg?auth=8740f1510c1da057ccfdef522340469348389532f238823f107f349895146231&width=880&height=586&quality=70&smart=true',
    rating: {
      rate: 4.9,
      count: 120,
    },
    stock: 50,
  },
  {
    id: 2,
    title: 'Empanada de Carne Salada',
    price: 2000,
    description: 'Deliciosa empanada de carne salada, perfecta para cualquier ocasión.',
    category: 'Empanadas clasicas',
    image: 'https://comidasparaguayas.com/assets/images/empanada-de-carne_800x534.webp',
    rating: {
      rate: 4.1,
      count: 150,
    },
    stock: 50,
  },
  {
    id: 3,
    title: 'Empanada de Pollo',
    price: 2000,
    description: 'Deliciosa empanada de pollo, perfecta para cualquier ocasión.',
    category: 'Empanadas clasicas',
    image: 'https://www.recetasnatura.com.ar/sites/recetasnatura/files/empanadas_de_pollo.jpg',
    rating: {
      rate: 4.7,
      count: 500,
    },
    stock: 50,
  },
  {
    id: 4,
    title: 'Empanada de Humita',
    price: 2000,
    description: 'Deliciosa empanada de humita, perfecta para cualquier ocasión.',
    category: 'Empanadas clasicas',
    image: 'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_t.png',
    rating: {
      rate: 2.1,
      count: 430,
    },
  },
  {
    id: 5,
    title: "John Hardy Women's Legends Naga Gold & Silver Dragon Station Chain Bracelet",
    price: 695,
    description:
      "From our Legends Collection, the Naga was inspired by the mythical water dragon that protects the ocean's pearl. Wear facing inward to be bestowed with love and abundance, or outward for protection.",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71pWzhdJNwL._AC_UL640_QL65_ML3_t.png',
    rating: {
      rate: 4.6,
      count: 400,
    },
  },
  {
    id: 6,
    title: 'Solid Gold Petite Micropave ',
    price: 168,
    description:
      'Satisfaction Guaranteed. Return or exchange any order within 30 days.Designed and sold by Hafeez Center in the United States. Satisfaction Guaranteed. Return or exchange any order within 30 days.',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/61sbMiUnoGL._AC_UL640_QL65_ML3_t.png',
    rating: {
      rate: 3.9,
      count: 70,
    },
  },
  {
    id: 7,
    title: 'White Gold Plated Princess',
    price: 9.99,
    description:
      "Classic Created Wedding Engagement Solitaire Diamond Promise Ring for Her. Gifts to spoil your love more for Engagement, Wedding, Anniversary, Valentine's Day...",
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/71YAIFU48IL._AC_UL640_QL65_ML3_t.png',
    rating: {
      rate: 3,
      count: 400,
    },
  },
  {
    id: 8,
    title: 'Pierced Owl Rose Gold Plated Stainless Steel Double',
    price: 10.99,
    description:
      'Rose Gold Plated Double Flared Tunnel Plug Earrings. Made of 316L Stainless Steel',
    category: 'jewelery',
    image: 'https://fakestoreapi.com/img/51UDEzMJVpL._AC_UL640_QL65_ML3_t.png',
    rating: {
      rate: 1.9,
      count: 100,
    },
  },
];

const ItemListContainer = ({ greeting }) => {
  const [items, setItems] = useState(PRODUCTS);

  return (
    <main className='item-list-container'>
      <section className='item-list-section'>
        <h1>{greeting}</h1>
      </section>
      <ItemList products={items} />
    </main>
  );
};

export default ItemListContainer;
