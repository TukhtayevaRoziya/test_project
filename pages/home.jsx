import { Analytics } from './../components/analytics/Analytics';
import Link from "next/link";
import Head from "next/head";

import { Header } from "../components/header/Header";
import { Navbar } from './../components/navbar/Navbar';

const Home = () => {
  return(
    <div>
          <Head>
    <title>Art box</title>
    <link
      href="https://fonts.googleapis.com/css2?family=Inter&display=optional"
      rel="stylesheet"
    />
  </Head>
  <Header />
  <Navbar />
      <Analytics />
      </div>
  )
}

export default Home