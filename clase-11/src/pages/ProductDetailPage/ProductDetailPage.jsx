import { useNavigate, useParams } from 'react-router';

import ItemDetailContainer from '../../features/products/components/ItemDetailContainer/ItemDetailContainer';

import './productDetailPage.css';

const ProductDetailPage = () => {
  const { itemId } = useParams();
  const navigate = useNavigate();

  return (
    <>
      <div className='product-detail-page-actions'>
        <button type='button' className='product-detail-page-back' onClick={() => navigate(-1)}>
          ← Volver
        </button>
      </div>
      <ItemDetailContainer productId={itemId} />
    </>
  );
};

export default ProductDetailPage;
