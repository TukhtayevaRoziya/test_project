import { useState } from 'react';
import { Button, Drawer } from 'antd';
import { AiOutlineMenu } from "react-icons/ai";
import { RiTwitterFill } from "react-icons/ri";
import { FaTelegramPlane } from "react-icons/fa";

import Link from "next/link";
import Image from "next/image";

import subtract from "../../assets/navbar/Subtract.png";
import smNavbar from '../../assets/navbar/smNavbar.png'
import duck from '../../assets/navbar/smNavbarDuck.gif'

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
      <div className={styles.navbarHeader}>
      <h1 className={styles.navbar__title}>$LAS</h1>

      <Button type="primary" onClick={showDrawer}>
      <AiOutlineMenu/>
      </Button>
      </div>
      <Drawer title={'$LAS'
      
      } placement="right" onClose={onClose} visible={visible}>
          <div className={styles.navbar__links + " " + styles.navbarSm}>
          <Link href={"#mint"}>Mint</Link>
          <Link href={"#stake"}>Stake</Link>
          <Link href={"#liveChart"}>Live Chart</Link>
          <Link href={"#whitepaper"}>Whitepaper</Link>
          <div className={styles.smNavbar__links}>
          <Link href={"https://t.me/LemonApeStand"} >
            <a>
              <FaTelegramPlane />
            </a>
          </Link>
          <Link href={"https://twitter.com/LemonApeStand"}>
            <a>
              <RiTwitterFill />
            </a>
          </Link>
          <Link href={"/whitepaper"}>
            <a>
              <Image src={subtract} alt="" />
            </a>
          </Link>
          </div>
          <Link href={"/whitepaper"}>
            <a className={styles.navbar__links__btn}>
              <Button>Connect Wallet</Button>
            </a>
          </Link>
        </div>
      <div className={styles.smNavbar__imgs}>
        {/* <div className={styles.smNavbar__imgs__duck}> */}
        <Image className={styles.smNavbar__imgs__duck} src={duck} alt={''}/>
        {/* </div> */}
        {/* <Image src={smNavbar} /> */}
        </div>
      </Drawer>
    </div>
  );
};