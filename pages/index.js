/* eslint-disable @next/next/no-page-custom-font */
import Link from "next/link";
import Head from "next/head";

import { Header } from "../components/header/Header";
import { Navbar } from './../components/navbar/Navbar';
import { Login } from './../components/login/Login';
import { Analytics } from './../components/analytics/Analytics';

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
      {/* <Header />
      <Navbar /> */}
<Login/>

    </div>
  );
}
