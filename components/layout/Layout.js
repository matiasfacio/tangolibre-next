import Navbar from "./Navbar";
import Footer from "./Footer";
import { ContentContainer } from "../../styles/globalstyles";

function Layout({ children }) {
  return (
    <>
      <Navbar />
      <ContentContainer>{children}</ContentContainer>
      <Footer />
    </>
  );
}

export default Layout;
