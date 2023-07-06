import "@/styles/globals.css";
import Head from "next/head";
import { Toaster } from "@/components/ui/toaster";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>Dakshta Media</title>
      </Head>
      <Component {...pageProps} />
      <Toaster />
    </>
  );
}

export default MyApp;
