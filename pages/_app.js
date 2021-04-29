import "../styles/globals.css";
import Layout from "../components/layout/Layout";
// import { Provider } from "next-auth/client";
import { UserProvider } from '@auth0/nextjs-auth0';

function MyApp({ Component, pageProps }) {
  return (
    <UserProvider>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserProvider>
  );
}

export default MyApp;
