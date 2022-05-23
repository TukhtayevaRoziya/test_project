/* eslint-disable @next/next/no-page-custom-font */
import Link from "next/link";
import Head from "next/head";

import { Header } from "../components/header/Header";
import { Navbar } from "./../components/navbar/Navbar";
import { Login } from "./../components/login/Login";

import { Table2 } from "./../components/table/Table";
import { Analytics } from "./../components/analytics/Analytics";

export default function Index() {
  return (
    <div>
      <Head>
        <title>LAS ANALYTICS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
      <Header />
      <Navbar smDisplay={'smDisplay'}/>

      <Login />
    </div>
  );
}
