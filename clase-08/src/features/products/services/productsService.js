const PRODUCTS_URL = '/data/products.json';
const SIMULATED_DELAY_MS = 2000;

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const getProducts = async () => {
  await delay(SIMULATED_DELAY_MS);

  const response = await fetch(PRODUCTS_URL);

  if (!response.ok) {
    throw new Error(`No pudimos cargar los productos (HTTP: ${response.status})`);
  }

  return await response.json();
};
