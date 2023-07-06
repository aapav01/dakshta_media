import "@/styles/globals.css";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";
import NavBar from "@/components/Navbar";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dakshta Media</title>
      </Head>
      <NavBar />
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
