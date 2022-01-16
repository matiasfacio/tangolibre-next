import React from "react";
import {
  NewsletterContainer,
  Form,
  FormContainer,
} from "../../styles/globalstyles";
import { Button } from "../elements/Button";

function Newsletter() {
  return (
    <NewsletterContainer>
      <FormContainer>
        <h3>Sign up to our Newsletter</h3>
        <Form>
          <input placeholder="your email" />
          <Button type="submit">Submit</Button>
        </Form>
      </FormContainer>
    </NewsletterContainer>
  );
}

export default Newsletter;
