import Header from './layout/Header/Header';
import ItemListContainer from './features/products/components/ItemListContainer/ItemListContainer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting='Hola Empanaderos' />
    </>
  );
}

export default App;
