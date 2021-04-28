import React, { useState } from "react";
import { Section, Form, FormContainer, AdminAreaContainer } from "../../styles/globalstyles";


function index() {
  const [login, setLogin] = useState({
    id: "",
    email: "",
    password: "",
  });

  function handleChange(e) {
    setLogin({
      ...login,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <Section theme={"ADMINAREA"}>
      <AdminAreaContainer>
      <FormContainer>
        <Form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <label>Admin ID</label>
          <input
            type="text"
            name="id"
            placeholder="admin id"
            value={login.id}
            onChange={handleChange}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder="email"
            value={login.email}
            onChange={handleChange}
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            placeholder="password"
            value={login.password}
            onChange={handleChange}
          />
          <button type="submit">Login</button>
        </Form>
      </FormContainer>
      </AdminAreaContainer>
    </Section>
  );
}

export default index;


