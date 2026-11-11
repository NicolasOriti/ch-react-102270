const PRODUCTS_URL = '/data/products.json';
const SIMULATED_DELAY_MS = 2000;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async (categoryId) => {
  await delay(SIMULATED_DELAY_MS);

  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error(`No pudimos cargar los productos (HTTP: ${response.status})`);
  }

  const products = await response.json();

  if (!categoryId) return products;

  return products.filter((product) => product.categoryId === categoryId);
};

export const getProductById = async (id) => {
  const products = await getProducts();
  const product = products.find((p) => p.id === id);

  if (!product) {
    throw new Error('Producto no encontrado');
  }

  return product;
};
