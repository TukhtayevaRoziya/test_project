import React from "react";

import styles from "./Header.module.css";
import { Head } from 'next/head';

export const Header = () => {
  return (
    <div className={styles.header}>
          <Head>
        <title>LAS ANALYTICS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.header_body}>
        <p>Current leader tx 480.334 $LAS</p>
        <p>Leader gets 3% of dev taxes and potion to evolve stands</p>
        <p>
          Become a Leader <b> Buy at least 480.335 $LAS</b>
        </p>
      </div>
    </div>
  );
};
