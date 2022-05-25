import Image from "next/image";

import { AnalyticsBoxes } from "../../AnalyticsBoxes";

import styles from './BigBlock.module.css'

export const BigBlock = () => {
  return (
    <div className={styles.bigBlock} id={'whitepaper'}>
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
            btnClass2={'bir'}
            
            />
      </div>
    </div>
  )
}
