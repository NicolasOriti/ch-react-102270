import { useState } from 'react';

export const useForm = (initialValues, validate = () => ({})) => {
  const [values, setValues] = useState(initialValues);
  const [touched, setTouched] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitError, setSubmitError] = useState(null);

  const errors = validate(values);
  const isValid = Object.keys(errors).length === 0;

  const handleOnChange = (event) => {
    const { name, value } = event.target;
    setValues((prev) => ({ ...prev, [name]: value }));
  };

  const handleOnBlur = (event) => {
    const { name } = event.target;
    setTouched((prev) => ({ ...prev, [name]: true }));
  };

  const handleOnSubmit = (onSubmitFn) => async (event) => {
    event.preventDefault();

    const allToched = Object.fromEntries(Object.keys(values).map((name) => [name, true]));
    setTouched(allToched);

    if (!isValid) return;

    setIsSubmitting(true);
    setSubmitError(null);
    try {
      await onSubmitFn(values);
    } catch (error) {
      setSubmitError(error.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  const resetForm = () => {
    setValues(initialValues);
    setTouched({});
    setIsSubmitting(false);
    setSubmitError(null);
  };

  const getFieldError = (name) => (touched[name] ? errors[name] : undefined);

  return {
    values,
    errors,
    isValid,
    isSubmitting,
    submitError,
    handleOnChange,
    handleOnBlur,
    handleOnSubmit,
    resetForm,
    getFieldError,
  };
};
