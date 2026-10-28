import { useProduct } from '../../hooks/useProduct';

import Section from '../../../../shared/components/Section/Section';
import AsyncContent from '../../../../shared/components/AsyncContent/AsyncContent';
import ItemDetail from '../ItemDetail/ItemDetail';

const ItemDetailContainer = ({ productId }) => {
  const { data: product, loading, error } = useProduct(productId);

  return (
    <Section>
      <AsyncContent loading={loading} error={error} loadingText='Cargando producto...'>
        <ItemDetail item={product} />
      </AsyncContent>
    </Section>
  );
};

export default ItemDetailContainer;
