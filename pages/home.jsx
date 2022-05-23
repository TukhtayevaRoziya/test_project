import Head from "next/head";

import { Header } from "../components/header/Header";
import { Table2 } from "./../components/table/Table";
import { Navbar } from "./../components/navbar/Navbar";
import { Analytics } from "./../components/analytics/Analytics";

const Home = () => {
  return (
    <div >
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
      <Analytics />
      <div className={"myTable"}>
        <Table2 />
      </div>
      <div className={'margin'}>

      <Navbar display='none' smNavbarDisplay={'smNavbarDisplay'}/>
      </div>
    </div>
  );
};

export default Home;
