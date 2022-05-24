import Image from "next/image";

import {AnalyticsBoxes} from '../AnalyticsBoxes'
import { BigBlock } from "./bigBlockEnd/BigBlock";

import styles from './EndBlock.module.css'

export const EndBlock = () => {
  return (
    <div className={styles.endBlock}>
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