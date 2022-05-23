import Image from "next/image";

import {AnalyticsBoxes} from '../AnalyticsBoxes'
import { BigBlock } from "./bigBlockEnd/BigBlock";

import styles from './EndBlock.module.css'
import { Head } from 'next/head';

export const EndBlock = () => {
  return (
    <div className={styles.endBlock}>
          <Head>
        <title>LAS ANALYTICS</title>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link
          href="https://fonts.googleapis.com/css2?family=Playfair+Display&family=VT323&display=swap"
          rel="stylesheet"
        />
      </Head>
      <div className={styles.endBlock__box1}>
            <AnalyticsBoxes
            title1={"MARKET CAP"}
            txt1={"$3,649,182.09"}
          />
            <AnalyticsBoxes
            title1={"MARKET CAP"}
            txt1={"$3,649,182.09"}
          />
          </div>
            <AnalyticsBoxes
            title1={"fresh wallets"}
            txt1={"245"}
            title2={"total value of all wallets"}
            txt2={"$ 1,244,436.34 "}
            title3={"seasoned wallets"}
            txt3={"2,834"}
            title4={"total value of eth in pool"}
            txt4={"$ 1,572,672.75"}
            btnClass2={'none'}
          />
          <BigBlock />
    </div>
  )
}