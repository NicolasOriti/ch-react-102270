import Navbar from '../Navbar/Navbar';
import CartWidget from '../CartWidget/CartWidget';
import './Header.css';

const Header = () => {
  return (
    <header className='header'>
      <div className='header-top'>
        <a href='#' className='header-brand'>
          Las empanadas del Loco
        </a>

        <input type='search' className='header-search' placeholder='Buscar...' />
        <CartWidget />
      </div>

      <Navbar />
    </header>
  );
};

export default Header;
