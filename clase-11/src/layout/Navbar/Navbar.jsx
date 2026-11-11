import { NavLink } from 'react-router';

import { CATEGORIES } from '../../features/products/constants/categories';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-categories'>
        <li>
          <NavLink to='/' end>
            Todos
          </NavLink>
        </li>
        {CATEGORIES.map((category) => (
          <li key={category.id} className='navbar-category'>
            <NavLink to={`/category/${category.id}`}>{category.displayName}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
