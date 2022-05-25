import Head from "next/head";
import {Home} from "../components/Home";
import {Login} from "../components/login/Login";
import {Navbar} from "../components/navbar/Navbar";
import {Header} from "../components/header/Header";
export default function Index() {
  return (
    <div>
      <Head>
        <title>Lemonade Ape Stand</title>
      </Head>
      <Header />
      <Navbar smDisplay={"smDisplay"} />
      <Login />
    </div>
  );
}
