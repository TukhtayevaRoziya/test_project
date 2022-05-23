import React from 'react'

import { Button } from "antd";
import Link from "next/link";
import Image from "next/image";
import { RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

import subtract from "../../assets/navbar/Subtract.png";
import {SmNavbar} from './SmNavbar'

import styles from "./Navbar.module.css";

export const Navbar = ({display}) => {
  return (
    <>
    <div className={styles.navbar}>
      <div className={styles.navbar__body}>
        <h1 className={styles.navbar__title}>LAS</h1>
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
    <div className={"dNone"}>
      
    <SmNavbar/>
    </div>
    </>
  );
};
