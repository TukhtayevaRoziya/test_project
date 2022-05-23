import Image from "next/image";

import { AnalyticsBoxes } from "../../AnalyticsBoxes";

import styles from './BigBlock.module.css'
import { Head } from 'next/head';

export const BigBlock = () => {
  return (
    <div className={styles.bigBlock} id={'whitepaper'}>
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
        <h1><code> Hierarchy </code> of wallet types and their number</h1>
        </div>
      <div className={styles.bigBlock__text}>
        <AnalyticsBoxes 
        
        title1={"shrimps"}
            txt1={"1,246"}
            title2={"fish"}
            txt2={"1,031"}
            title3={"dolphins"}
            txt3={"926"}
            title4={"whales"}
            txt4={"14"}
            btnClass2={'none'}/>
      </div>
    </div>
  )
}
