import Head from "next/head";

import Home from "./Home";

export default function Index() {
  return (
    <div>
      <Head>
        <title>Lemonade Ape Stand</title>
      </Head>
      <Home />
      {/* <Login /> */}
    </div>
  );
}
