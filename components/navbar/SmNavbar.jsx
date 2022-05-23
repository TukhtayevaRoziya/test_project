import { useState } from 'react';
import { Button, Drawer } from 'antd';
import { AiOutlineMenu } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

import Link from "next/link";
import Head from 'next/head';
import Image from "next/image";

import subtract from "../../assets/navbar/Subtract.png";

import 'antd/dist/antd.css';
import styles from "./Navbar.module.css";

export const SmNavbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <div className={styles.smNavbar_body}>
          <Head>
        <title>LAS ANALYTICS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.navbarHeader}>
      <h1 className={styles.navbar__title}>LAS</h1>

      <Button type="primary" onClick={showDrawer}>
      <AiOutlineMenu/>
      </Button>
      </div>
      <Drawer title={'LAS'
      
      } placement="right" onClose={onClose} visible={visible}>
          <div className={styles.navbar__links + " " + styles.navbarSm}>
          <Link href={"#mint"}>Mint</Link>
          <Link href={"#stake"}>Stake</Link>
          <Link href={"#liveChart"}>Live Chart</Link>
          <Link href={"#whitepaper"}>Whitepaper</Link>
          <Link href={"#whitepaper"}>
            <a>
              <FaTelegramPlane />
            </a>
          </Link>
          <Link href={"/whitepaper"}>
            <a>
              <RiTwitterFill />
            </a>
          </Link>
          <Link href={"/whitepaper"}>
            <a>
              <Image src={subtract} alt="" />
            </a>
          </Link>
          <Link href={"/whitepaper"}>
            <a className={styles.navbar__links__btn}>
              <Button>0x5637...bf8kd7</Button>
            </a>
          </Link>
        </div>
      </Drawer>
    </div>
  );
};