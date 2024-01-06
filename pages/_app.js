import Container from "@/components/Container";
import Head from "next/head";
import Header from "@/components/Header";
import { ThemeProvider } from "@/lib/ThemeContext";
import "@/styles/global.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>AshtonMall</title>
        <link rel="icon" href="/jessi.jpg"></link>
      </Head>
      <ThemeProvider>
        <Header />
        <Container>
          <Component {...pageProps} />
        </Container>
      </ThemeProvider>
    </>
  );
}
