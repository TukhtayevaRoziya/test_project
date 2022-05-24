import Image from "next/image";

import {AnalyticsBoxes} from '../AnalyticsBoxes'
import picture from '../../../assets/home/wallet.png'

import styles from './BigBlock.module.css'

export const BigBlock = () => {
  return (
    <div className={styles.bigBlock} id='stake'>
      <div className={styles.bigBlock__title}>
        <h1><code> Top 10 wallets </code> holds 14% of circulating supply</h1>
        </div>
      <div className={styles.bigBlock__img}>
        <Image src={picture} alt={''}/>
      </div>
    </div>
  )
}
