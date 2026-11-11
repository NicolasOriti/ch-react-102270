import { Outlet } from 'react-router';

import Header from '../Header/Header';
import Footer from '../Footer/Footer';

import './MainLayout.css';

const MainLayout = () => (
  <div className='main-layout'>
    <Header />
    <main className='main-layout-content'>
      <Outlet />
    </main>
    <Footer />
  </div>
);

export default MainLayout;
