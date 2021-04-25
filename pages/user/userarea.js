import { Section, Header } from "../../styles/globalstyles";
import Login from '../../components/userComponents/Login'

function userarea() {
  return (
    <Section theme = {"userarea"}>
      <Login/>
    </Section>
  );
}

export default userarea;
