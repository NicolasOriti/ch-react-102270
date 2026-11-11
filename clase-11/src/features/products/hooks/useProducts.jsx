import { useAsync } from '../../../shared/hooks/useAsync';
import { getProducts } from '../services/productsService';

export const useProducts = () => useAsync(getProducts);
