import { RiArrowDropLeftLine } from "react-icons/ri";

import {ChartBox} from './chart/Chart'
import {BigBlock} from './bigBlock/BigBlock'
import { EndBlock } from "./endBlock/EndBlock";
import { AnalyticsBoxes } from "./AnalyticsBoxes";

import styles from "./Analytics.module.css";
import "antd/dist/antd.css";

export const Analytics = () => {
  return (
    <div className={styles.analytics} id={'mint'}>
      <div className={styles.analytics__body}>
        <h1 className={styles.analytics__body__check}>
          <RiArrowDropLeftLine /> Check another contract
        </h1>
        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        <h2 className={styles.analytics__body__title}>LAS analytics</h2>
        <div className={styles.analytics__body__block} >
          <AnalyticsBoxes
            title1={"Token Address"}
            txt1={"0xd4...8d53"}
            title2={"Token Name"}
            txt2={"$SHIBGOTCHI"}
            title3={"Website"}
            txt3={"shibgothitoken.com"}
            title4={"Socials"}
            txt4={"0xd4...8d53"}
            btnClass={styles.btn}
          />
          <AnalyticsBoxes
            title1={"MARKET CAP"}
            txt1={"$3,649,182.09"}
            title2={"TOTAL HOLDERS"}
            txt2={"3,022"}
            title3={"TOTAL LIQUIDITY"}
            txt3={"$283,183.46"}
            title4={"TOTAL TX"}
            txt4={"5,605"}
          />
        </div>
       <ChartBox id='#mint'/>
       <BigBlock />
       <EndBlock/>
      </div>
    </div>
  );
};
