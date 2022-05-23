import React from 'react'

import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import { RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

import subtract from "../../assets/navbar/Subtract.png";
import {SmNavbar} from './SmNavbar'

import styles from "./Navbar.module.css";
import Head from 'next/head';

export const Navbar = ({display, smDisplay, smNavbarDisplay}) => {
  return (
    <>
        <Head>
        <title>LAS ANALYTICS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
    <div className={styles.navbar + ' ' + smDisplay}>
      <div className={styles.navbar__body}>
        <h1 className={styles.navbar__title}>LAS</h1>x
        <div className={styles.navbar__links}>
          <Link href={"#mint"}>Mint</Link>
          <Link href={"#stake"}>Stake</Link>
          <Link href={"#liveChart"}>Live Chart</Link>
          <Link href={"#whitepaper"}>Whitepaper</Link>
          <Link href={"#whitepaper"}>
            <a className={display}>
              <FaTelegramPlane />
            </a>
          </Link>
          <Link href={"/whitepaper"}>
            <a className={display}>
              <RiTwitterFill />
            </a>
          </Link>
          <Link href={"/whitepaper"}>
            <a className={display}>
              <Image src={subtract} alt="" />
            </a>
          </Link>
          <Link href={"/whitepaper"}>
            <a className={styles.navbar__links__btn + ` ${display}`}>
              <Button>0x5637...bf8kd7</Button>
            </a>
          </Link>
        </div>
      </div>
    </div>
    <div className={"dNone " + smNavbarDisplay}>
      
    <SmNavbar/>
    </div>
    </>
  );
};
