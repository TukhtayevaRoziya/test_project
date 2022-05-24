import Head from "next/head";

import { Header } from "../components/header/Header";
import { Table2 } from "../components/table/Table";
import { Navbar } from "../components/navbar/Navbar";
import { Analytics } from "../components/analytics/Analytics";

import styles from "../styles/home.module.css";

const Home = () => {
  return (
    <div>
      <Head>
        <title>Lemonade Ape Stand</title>
      </Head>
      <Header />
      <Navbar smDisplay={"smDisplay"} />
      <Analytics />
      <div className={"myTable"}>
        <h1 className={styles.home__table_title}>
          All transactions from launch till now
        </h1>
        <Table2 />
      </div>
      <div className={"margin"}>
        <Navbar display="none" smNavbarDisplay={"smNavbarDisplay"} />
      </div>
    </div>
  );
};

export default Home;
