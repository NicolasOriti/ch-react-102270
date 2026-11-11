import { Link } from 'react-router';

import Section from '../../shared/components/Section/Section';

import './NotFoundPage.css';

const NotFoundPage = () => {
  return (
    <Section>
      <div className='not-found'>
        <p className='not-found-code'>404</p>
        <h1 className='not-found-title'>Esta página no existe</h1>
        <p>Puede que el link esté roto o que la categoría ya no esté disponible.</p>
        <Link to='/' className='not-found-link'>
          Volver al inicio
        </Link>
      </div>
    </Section>
  );
};

export default NotFoundPage;
