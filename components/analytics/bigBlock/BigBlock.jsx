import Image from "next/image";

import {AnalyticsBoxes} from '../AnalyticsBoxes'
import picture from '../../../assets/home/wallet.png'

import styles from './BigBlock.module.css'
import { Head } from 'next/head';

export const BigBlock = () => {
  return (
    <div className={styles.bigBlock} id='stake'>
          <Head>
        <title>LAS ANALYTICS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.bigBlock__title}>
        <h1><code> Top 10 wallets </code> holds 14% of circulating supply</h1>
        </div>
      <div className={styles.bigBlock__img}>
        <Image src={picture} alt={''}/>
      </div>
    </div>
  )
}
