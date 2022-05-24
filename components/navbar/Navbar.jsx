import React from 'react'

import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import { RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

import subtract from "../../assets/navbar/Subtract.png";
import {SmNavbar} from './SmNavbar'

import styles from "./Navbar.module.css";

export const Navbar = ({display, smDisplay, smNavbarDisplay}) => {
  return (
    <>
    <div className={styles.navbar + ' ' + smDisplay}>
      <div className={styles.navbar__body}>
        <h1 className={styles.navbar__title}>$LAS</h1>x
        <div className={styles.navbar__links}>
          <Link href={"#mint"}>Mint</Link>
          <Link href={"#stake"}>Stake</Link>
          <Link href={"#liveChart"}>Live Chart</Link>
          <Link href={"#whitepaper"}>Whitepaper</Link>
          <Link href={"https://t.me/LemonApeStand"}>
            <a className={display}>
              <FaTelegramPlane />
            </a>
          </Link>
          <Link  href={"https://twitter.com/LemonApeStand"}>
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
              <Button>Connect Wallet</Button>
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
