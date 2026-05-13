import Head from "next/head";
import { AppWrapper } from "../context/state";

export default function Layout({ children }) {
  return (
    <AppWrapper>
      <>
        <Head>
          <title>Trippy</title>
        </Head>
        <main>{children}</main>
      </>
    </AppWrapper>
  );
}
