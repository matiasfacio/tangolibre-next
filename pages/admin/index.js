import React, { useState } from "react";
import { Section, Form, FormContainer } from "../../styles/globalstyles";
import styled from "styled-components";

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
    </Section>
  );
}

export default index;


