import { useState } from 'react';
import { useForm } from '../../../../shared/hooks/useForm';
import { loginAdmin } from '../../services/authService';
import Card from '../../../../shared/components/Card/Card';

import './AdminLoginForm.css';

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const MIN_PASSWORD_LENGTH = 6;

const validateLogin = ({ email, password }) => {
  const errors = {};

  if (!email.trim()) errors.email = 'El email es obligatorio';
  else if (!EMAIL_REGEX.test(email)) errors.email = 'Ingresá un email válido';

  if (!password) errors.password = 'La contraseña es obligatoria';
  else if (password.length < MIN_PASSWORD_LENGTH)
    errors.password = `Mínimo ${MIN_PASSWORD_LENGTH} caracteres`;

  return errors;
};

const AdminLoginForm = () => {
  const {
    values,
    isSubmitting,
    submitError,
    handleOnChange,
    handleOnBlur,
    handleOnSubmit,
    resetForm,
    getFieldError,
  } = useForm({ email: '', password: '' }, validateLogin);

  const login = async (credentials) => {
    const user = await loginAdmin(credentials);
    resetForm();
    console.log('Usuario logueado correctamente');
  };

  return (
    <Card className='admin-login'>
      <form className='admin-login-form' onSubmit={handleOnSubmit(login)}>
        <h1 className='admin-login-title'>Ingreso administrador</h1>

        <label className='admin-login-field'>
          <span>Email</span>
          <input
            type='email'
            name='email'
            value={values.email}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            aria-invalid={!!getFieldError('email')}
          />
          {getFieldError('email') && <p className='admin-login-error'>{getFieldError('email')}</p>}
        </label>

        <label className='admin-login-field'>
          <span>Contraseña</span>
          <input
            type='password'
            name='password'
            value={values.password}
            onChange={handleOnChange}
            onBlur={handleOnBlur}
            aria-invalid={!!getFieldError('password')}
          />

          <button type='submit' className='admin-login-button' disabled={isSubmitting}>
            {isSubmitting ? 'Ingresando...' : 'Ingresar'}
          </button>
          {getFieldError('password') && (
            <p className='admin-login-error'>{getFieldError('password')}</p>
          )}
        </label>

        {submitError && <p className='admin-login-error'>{submitError}</p>}
      </form>
    </Card>
  );
};

export default AdminLoginForm;
