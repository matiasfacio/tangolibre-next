import { useState } from "react";
import {
  Form,
  FormContainer,
  UserAreaContainer,
  UserInfo
} from "../../styles/globalstyles";
import Subscription from "./Subscription";
import { useSession } from "next-auth/client";

function UserArea() {
  const [session] = useSession();
  const [signin, setSingin] = useState({
    id: "",
    fullname: session.user.name,
    email: session.user.email,
    // password: "",
  });

  function handleChange(e) {
    setSingin({
      ...signin,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <UserAreaContainer>
      <UserInfo>
      <img src={session.user.image} alt="userpicture" width = "70" height="70"/>
      <p>Welcome {session.user.name}</p>
      </UserInfo>
      <FormContainer>
        <Form>
          <h2>Edit your user information</h2>
          <label>User Id</label>
          <input
            type="string"
            name="id"
            placeholder="user id"
            onChange={(e) => handleChange(e)}
          />
          <label>Full Name</label>
          <input
            type="string"
            name="fullname"
            placeholder={session.user.name}
            onChange={(e) => handleChange(e)}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={session.user.email}
            onChange={(e) => handleChange(e)}
          />
          <button type="submit">Update</button>
        </Form>
      </FormContainer>
      <Subscription />
    </UserAreaContainer>
  );
}

export default UserArea;
