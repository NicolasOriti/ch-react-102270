const SIMULATED_DELAY_MS = 3000;

const DEMO_ADMIN = {
  email: 'admin@example.com',
  password: 'admin123',
  name: 'El loco',
  role: 'admin',
};

const delay = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

export const loginAdmin = async ({ email, password }) => {
  await delay(SIMULATED_DELAY_MS);

  const isValidAdmin =
    email.trim().toLowerCase() === DEMO_ADMIN.email && password === DEMO_ADMIN.password;

  if (!isValidAdmin) {
    throw new Error('Credenciales inválidas');
  }

  return DEMO_ADMIN;
};
