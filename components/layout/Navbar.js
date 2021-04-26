import { Nav } from "../../styles/globalstyles";
import Link from "next/link";

function Navbar() {
  return (
    <Nav>
      <ul>
        <Link href="/">Home</Link>
        <Link href="/kursprogramm">Kursprogramm</Link>
        <Link href="/about">About</Link>
        <Link href="/user/userarea">User Area</Link>
        <Link href="/admin/">Admin Area</Link>
      </ul>
    </Nav>
  );
}

export default Navbar;
