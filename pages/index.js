/* eslint-disable @next/next/no-page-custom-font */
import Link from "next/link";
import Head from "next/head";
import { Login } from "../components/login/Login";
export default function Index() {
  return (
    <div>
      <Head>
        <title>Art box</title>
        <link
          href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
          rel="stylesheet"
        />
      </Head>
      <Login />
      <Link href={"/about"}>About</Link>
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
}
