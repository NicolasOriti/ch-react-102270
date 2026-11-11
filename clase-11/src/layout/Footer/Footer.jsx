import './Footer.css';

const Footer = () => {
  return (
    <footer className='footer'>
      <p>© {new Date().getFullYear()} Las empanadas del Loco</p>
    </footer>
  );
};

export default Footer;
