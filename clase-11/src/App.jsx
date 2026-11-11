import { BrowserRouter, Routes, Route } from 'react-router';

import { CartProvider } from './features/cart/context/CartContext';
import MainLayout from './layout/MainLayout/MainLayout';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import CategoryPage from './pages/CategoryPage/CategoryPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';
import CartPage from './pages/CartPage/CartPage';

import './App.css';
import NotFoundPage from './pages/NotFoundPage/NotFoundPage';

function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Routes>
          <Route element={<MainLayout />}>
            <Route path='/' element={<HomePage />} />
            <Route path='/category/:categoryId' element={<CategoryPage />} />
            <Route path='/item/:itemId' element={<ProductDetailPage />} />
            <Route path='/cart' element={<CartPage />} />
            <Route path='/login' element={<LoginPage />} />

            <Route path='*' element={<NotFoundPage />} />
          </Route>
        </Routes>
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
