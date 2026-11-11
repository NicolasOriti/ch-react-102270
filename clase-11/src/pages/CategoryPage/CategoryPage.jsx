import { useParams } from 'react-router';

import ItemListContainer from '../../features/products/components/ItemListContainer/ItemListContainer';
import { getCategoryById } from '../../features/products/constants/categories';
import NotFoundPage from '../NotFoundPage/NotFoundPage';

const CategoryPage = () => {
  const { categoryId } = useParams();

  const category = getCategoryById(categoryId);

  if (!category) {
    return <NotFoundPage />;
  }

  return <ItemListContainer greeting={category.displayName} categoryId={category.id} />;
};

export default CategoryPage;
