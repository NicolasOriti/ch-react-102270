import { BrowserRouter, Routes, Route } from 'react-router';

import MainLayout from './layout/MainLayout/MainLayout';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

import './App.css';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path='/' element={<HomePage />} />
          <Route path='/category/:categoryId' element={<CategoryPage />} />
          <Route path='/item/:itemId' element={<ProductDetailPage />} />
          <Route path='/login' element={<LoginPage />} />

          <Route path='*' element={<NotFoundPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
