import ItemDetailContainer from '../../features/products/components/ItemDetailContainer/ItemDetailContainer';

const ProductDetailPage = ({ productId }) => {
  return (
    <>
      <ItemDetailContainer productId={productId} />
    </>
  );
};

export default ProductDetailPage;
