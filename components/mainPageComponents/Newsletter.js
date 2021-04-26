import React from "react";
import {
  NewsletterContainer,
  Form,
  FormContainer,
} from "../../styles/globalstyles";

function Newsletter() {
  return (
    <NewsletterContainer>
      <FormContainer>
        <h3>Sign up to our Newsletter</h3>
        <Form>
          <input placeholder="your email" />
          <button type="submit">Submit</button>
        </Form>
      </FormContainer>
    </NewsletterContainer>
  );
}

export default Newsletter;
