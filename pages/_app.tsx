import "../styles/globals.css";
import { Analytics } from "@vercel/analytics/react";
import { AuthProvider } from '../contexts/AuthContext';
import Layout from '../components/layout'; // Changed 'Layout' to 'layout'

function MyApp({ Component, pageProps }) {
  return (
    <AuthProvider>
      <Layout>
        <Component {...pageProps} />
        <Analytics />
      </Layout>
    </AuthProvider>
  );
}

export default MyApp;
