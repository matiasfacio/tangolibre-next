import { useState } from "react";
import { Form, FormContainer } from "../../styles/globalstyles";

function Login() {
  const [signin, setSingin] = useState({
    id: "",
    email: "",
    password: "",
  });

  function handleChange() {
    setSingin({
      ...signin,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <FormContainer>
      <Form>
        <label>User Id</label>
        <input
          type="string"
          name="id"
          placeholder="user id"
          onChange={handleChange}
        />
        <label>Email</label>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleChange}
        />
        <label>Password</label>
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handleChange}
        />
        <button type = "submit">Sign In</button>
      </Form>
    </FormContainer>
  );
}

export default Login;
