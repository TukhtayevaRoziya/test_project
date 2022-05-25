import Head from "next/head";
import { Header } from "./header/Header";
import { Table2 } from "./table/Table";
import { Navbar } from "./navbar/Navbar";
import { Analytics } from "./analytics/Analytics";

import styles from "../styles/home.module.css";

export const Home = () => {
  return (
    <div>
      <Head>
        <title>Lemonade Ape Stand</title>
      </Head>
        <title>Lemonade Ape Stand</title>
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

