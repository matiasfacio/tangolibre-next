import { useEffect } from "react";
import { Section, UserAreaContainer } from "../../styles/globalstyles";
import UserArea from "../../components/userComponents/UserArea";
import { useSession } from "next-auth/client";

function userarea() {
  const [session] = useSession();
  useEffect(() => {
    console.log(session);
  });
  return (
    <Section theme={"userarea"}>
      <UserAreaContainer>
      {session && <UserArea />}
      {!session && <h2>You must login to access this area</h2>}
      </UserAreaContainer>
    </Section>
  );
}

export default userarea;
