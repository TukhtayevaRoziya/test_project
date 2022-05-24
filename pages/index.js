import Head from "next/head";

import { Header } from "../components/header/Header";
import { Navbar } from "./../components/navbar/Navbar";
import { Login } from "./../components/login/Login";

import Home from './Home'

export default function Index() {
  return (
    <div>
      <Head>
        <title>Lemonade Ape Stand</title>
      </Head>
      <Home/>
      {/* <Login /> */}
    </div>
  );
}
