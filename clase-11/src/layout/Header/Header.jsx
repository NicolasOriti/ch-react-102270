import { Link } from 'react-router';

import Navbar from '../Navbar/Navbar';
import CartWidget from '../../features/cart/components/CartWidget/CartWidget';

import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-top'>
        <Link href='/' className='header-brand'>
          Las empanadas del Loco
        </Link>

        <input type='search' className='header-search' placeholder='Buscar...' />
        <CartWidget />
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
