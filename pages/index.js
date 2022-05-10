import Link from "next/link";
import Head from "next/head";

import { Header } from "../components/header/Header";
import { Navbar } from './../components/navbar/Navbar';
import { Analytics } from './../components/analytics/Analytics';

export default function Index() {
  return (
    <div>
      <Head>
        <title>Art box</title>
      </Head>
      <Header />
      <Navbar />
      <Analytics />
      <Link href={"/about"}>About</Link>
      <Link href={"/posts"}>Posts</Link>
    </div>
  );
}
