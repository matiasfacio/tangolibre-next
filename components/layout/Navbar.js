import { Nav } from "../../styles/globalstyles";
import Link from "next/link";
import { useUser } from "@auth0/nextjs-auth0";

function Navbar() {
  const { user, error, isLoading } = useUser();

  return (
    <Nav>
      <ul>
        <Link href="/">
          <a>Home</a>
        </Link>
        <Link href="/kursprogramm">
          <a>Program</a>
        </Link>
        <Link href="/blog">
          <a>Blog</a>
        </Link>
        <Link href="/loginuser">
          <a>{!user ? "Login" : "Logout"}</a>
        </Link>
        {user && (
          <Link href="/user/userarea">
            <a>User Area</a>
          </Link>
        )}
        {user?.email === process.env.NEXT_PUBLIC_ADMIN_EMAIL && (
          <Link href="/admin/">
            <a>Admin Area</a>
          </Link>
        )}
      </ul>
    </Nav>
  );
}

export default Navbar;
