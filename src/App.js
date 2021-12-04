import "./App.css";
import { useForm } from "./components/hooks/useForm";

const App = () => {
  const [values, handleChange] = useForm({
    email: "",
    password: "",
    firstName: "",
  });

  return (
    <>
      <input name="email" value={values.email} onChange={handleChange} />
      {/* {console.log(values)} */}
      <input
        name="password"
        value={values.password}
        type="password"
        onChange={handleChange}
      />
      {/* {console.log(values)} */}
      <input
        name="firstName"
        value={values.firstName}
        onChange={handleChange}
        placeholder="Name"
      />
      {/* {console.log(handleChange)} */}
    </>
  );
};

export default App;
