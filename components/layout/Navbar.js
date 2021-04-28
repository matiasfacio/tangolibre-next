import { Nav } from "../../styles/globalstyles";
import Link from "next/link";
import { useSession } from "next-auth/client";

function Navbar() {
  const [ session ] = useSession();

  return (
    <Nav>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/kursprogramm">Kursprogramm</Link>
        <Link href="/login">{!session ? 'Login':'Logout'}</Link>
        {session && <Link href="/user/userarea">User Area</Link>}
        {session?.user.email === "matiaspersonal@gmail.com" && <Link href="/admin/">Admin Area</Link>}
      </ul>
    </Nav>
  );
}

export default Navbar;
