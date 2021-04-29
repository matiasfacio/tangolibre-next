import { useState } from "react";
import {
  Form,
  FormContainer,
  UserAreaContainer,
  UserInfo
} from "../../styles/globalstyles";
import Subscription from "./Subscription";
import { useUser } from "@auth0/nextjs-auth0";


function UserArea() {
  const {user, isLoading, error} = useUser();
  const [signin, setSingin] = useState({
    id: "",
    name: user.given_name,
    lastname: user.family_name,
    email: user.email,
   
  });

// email: "matiaspersonal@gmail.com"
// email_verified: true
// family_name: "F"
// given_name: "Matias"
// locale: "es-419"
// name: "Matias F"
// nickname: "matiaspersonal"
// picture: "https://lh3.googleusercontent.com/a-/AOh14Gjg2veQdkgO51IAJadWIKf4o5uUK40C_3Jh1g02xQ=s96-c"
// sub: "google-oauth2|115273846533019347690"
// updated_at: "2021-04-29T10:13:23.640Z"

  function handleChange(e) {
    setSingin({
      ...signin,
      [e.target.name]: e.target.value,
    });
  }

  return (
    <UserAreaContainer>
      <UserInfo>
      <img src={user.picture} alt="userpicture" width = "70" height="70"/> 
      <p>Welcome {user.givenName}</p> 
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
          <label>Name</label>
          <input
            type="string"
            name="fullname"
            placeholder={user.given_name}
            onChange={(e) => handleChange(e)}
          />
          <label>Family Name</label>
          <input
            type="string"
            name="fullname"
            placeholder={user.family_name}
            onChange={(e) => handleChange(e)}
          />
          <label>Email</label>
          <input
            type="email"
            name="email"
            placeholder={user.email}
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
