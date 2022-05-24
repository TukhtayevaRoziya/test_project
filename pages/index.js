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
        <title>Lemonade Ape Stand</title>
      </Head>
      <Header />
      <Navbar smDisplay={'smDisplay'}/>

      <Login />
    </div>
  );
}
