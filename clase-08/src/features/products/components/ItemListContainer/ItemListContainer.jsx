import { useProducts } from '../../hooks/useProducts';

import Section from '../../../../shared/components/Section/Section';
import AsyncContent from '../../../../shared/components/AsyncContent/AsyncContent';
import ItemList from '../ItemList/ItemList';

import './ItemListContainer.css';

const ItemListContainer = ({ greeting }) => {
  const { data: products, loading, error } = useProducts();

  return (
    <Section title={greeting}>
      <AsyncContent loading={loading} error={error} loadingText='Cargando productos...'>
        <ItemList products={products} />
      </AsyncContent>
    </Section>
  );
};

export default ItemListContainer;
