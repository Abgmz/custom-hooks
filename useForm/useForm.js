import { useState } from "react";

export const useForm = (initialForm = {}) => {
  const [formState, setFormState] = useState(initialForm);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleFormReset = () => {
    if(Object.keys(initialForm).length < 0) return;
    setFormState(initialForm);
  } 

  return {
    ...formState,
    formState,
    handleInputChange,
    handleFormReset
  };
};
