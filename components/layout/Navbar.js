import { Nav } from "../../styles/globalstyles";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";


function Navbar() {
  
  const { user, error, isLoading } = useUser();

  return (
    <Nav>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/kursprogramm">Program</Link>
        <Link href="/blog">Blog</Link>
        <Link href="/loginuser">{!user ? 'Login':'Logout'}</Link>
        {user && <Link href="/user/userarea">User Area</Link>}
        {user?.email === "matiaspersonal@gmail.com" && <Link href="/admin/">Admin Area</Link>} 
      </ul>
    </Nav>
  );
}

export default Navbar;
