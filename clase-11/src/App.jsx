import Header from './layout/Header/Header';

import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/LoginPage/LoginPage';
import ProductDetailPage from './pages/ProductDetailPage/ProductDetailPage';

import './App.css';

function App() {
  return (
    <>
      <Header />

      <LoginPage />

      {/* <HomePage /> */}
      {/* <ProductDetailPage productId={1}/> */}
    </>
  );
}

export default App;
