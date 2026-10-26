import './Navbar.css';

const Navbar = () => {
  return (
    <nav className='navbar'>
      <ul className='navbar-categories'>
        <li className='navbar-category'>
          <a href='#'>Empanadas Clasicas</a>
        </li>
        <li className='navbar-category'>
          <a href='#'>Empanadas Especiales</a>
        </li>
        <li className='navbar-category'>
          <a href='#'>Postres</a>
        </li>
        <li className='navbar-category'>
          <a href='#'>Bebidas</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

// function Navbar() {
//   return (
//     <nav>
//       Navbar
//     </nav>
//   );
// }
