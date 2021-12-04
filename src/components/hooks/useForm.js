import { useState } from "react";

export const useForm = (defaultValue) => {
  const [value, setValue] = useState(defaultValue);
  console.log(defaultValue);
  return [
    value,
    (e) => {
      console.log(e);
      setValue({
        ...value,
        [e.target.name]: e.target.value,
      });
    },
  ];
};
