import { useEffect } from "react";
import { Section, UserAreaContainer } from "../../styles/globalstyles";
import UserArea from "../../components/userComponents/UserArea";
import { useUser } from "@auth0/nextjs-auth0";

function userarea() {
  const { user, isLoading, error } = useUser();
 
  return (
    <Section theme={"userarea"}>
      <UserAreaContainer>
        {user && <UserArea />}
        {!user && <h2>You must login to access this area</h2>}
      </UserAreaContainer>
    </Section>
  );
}

export default userarea;
