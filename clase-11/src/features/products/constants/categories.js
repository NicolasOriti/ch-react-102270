export const CATEGORIES = [
  { id: 'clasicas', displayName: 'Empanadas clasicas' },
  { id: 'especiales', displayName: 'Empanadas especiales' },
  { id: 'postres', displayName: 'Postres' },
  { id: 'bebidas', displayName: 'Bebidas' },
];

export const getCategoryById = (categoryId) =>
  CATEGORIES.find((category) => category.id === categoryId);
