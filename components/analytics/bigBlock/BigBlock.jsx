import Image from "next/image";

import {AnalyticsBoxes} from '../AnalyticsBoxes'
import picture from '../../../assets/home/wallet.png'

import styles from './BigBlock.module.css'

export const BigBlock = () => {
  return (
    <div className={styles.bigBlock}>
      <div className={styles.bigBlock__title}>
        <h1><code> Hierarchy </code> of wallet types and their number</h1>
        </div>
      <div className={styles.bigBlock__img}>
        <Image src={picture} alt={''}/>
      </div>
    </div>
  )
}
