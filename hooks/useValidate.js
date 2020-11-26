import React, { useEffect, useState } from "react";

export default function useValidate(initialState, validation, fn) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [submit, setSubmit] = useState(false);

  useEffect(() => {
    if (submit) {
      const noErrors = Object.keys(errors).length === 0;
      if (noErrors) {
        fn();
      }
      setSubmit(false);
    }
  }, []);

  function handleChange() {
    setValues({ ...values, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
    const errorsValidation = validation(values);
    setErrors(errorsValidation);
    setSubmit(true);
  }

  return {
    values,
    errors,
    submit,
    handleChange,
    handleSubmit,
  };
}
