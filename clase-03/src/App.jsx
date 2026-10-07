import Header from './components/Header/Header';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';

import './App.css';

function App() {
  return (
    <>
      <Header />
      <ItemListContainer greeting="Hola Empanaderos" />
    </>
  );
}

export default App;
