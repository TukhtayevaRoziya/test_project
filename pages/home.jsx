import { Analytics } from "./../components/analytics/Analytics";
import Head from "next/head";

import { Header } from "../components/header/Header";
import { Navbar } from "./../components/navbar/Navbar";
import { Table2 } from "./../components/table/Table";

const Home = () => {
  return (
    <div >
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
      <div className={"myTable"}>
        <Table2 />
      </div>
      <div className={'margin'}>

      <Navbar display='none'/>
      </div>
    </div>
  );
};

export default Home;
