import Link from "next/link";

import Head from 'next/head'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Art box</title>
      </Head>

        <Link href={"/about"}>About</Link>
        <Link href={"/posts"}>Posts</Link>
    </div>
  );
}
