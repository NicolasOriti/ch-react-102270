import { useAsync } from '../../../shared/hooks/useAsync';
import { getProductById } from '../services/productsService';

export const useProduct = (productId) => useAsync(getProductById, productId);
