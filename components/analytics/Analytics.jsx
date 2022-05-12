import { RiArrowDropLeftLine } from "react-icons/ri";

import { AnalyticsBoxes } from "./AnalyticsBoxes";

import styles from "./Analytics.module.css";
import "antd/dist/antd.css";

export const Analytics = () => {
  return (
    <div className={styles.analytics}>
      <div className={styles.analytics__body}>
        <h1 className={styles.analytics__body__check}>
          <RiArrowDropLeftLine /> Check another contract
        </h1>
        <a href="http://" target="_blank" rel="noopener noreferrer"></a>
        <h2 className={styles.analytics__body__title}>LAS analytics</h2>
        <div className={styles.analytics__body__block}>
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
        <div
          className={
            styles.analytics__body__block__diagramma_box +
            " " +
            styles.analytics__body__block__box
          }
        >
          <AnalyticsBoxes
            title1={"Max Total Supply"}
            txt1={"100,000,000,000,000,000"}
            title3={"Circulation supply"}
            txt3={"72%"}
            btnClass={styles.btn}
          />
          <div className={styles.analytics__body__block__box__titles + ' ' + styles.analytics__body__block__diagramma_box__title}>
            <div>
              <p>in deployer</p>
              <h3>28%</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
