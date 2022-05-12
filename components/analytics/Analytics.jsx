import { RiArrowDropLeftLine } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";

import styles from "./Analytics.module.css";
import {AnalyticsBoxes} from "./AnalyticsBoxes";
import { Button, Popover } from "antd";
import 'antd/dist/antd.css';

const content = (
  <div className={styles.content}>
    <p>Wallets that got in the first block after token launch bla bla</p>
  </div>
);


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
          <AnalyticsBoxes title1={'Token Address'} txt1={'0xd4...8d53'} 
          title2={'Token Name'} txt2={'$SHIBGOTCHI'} 
          title3={'Website'} txt3={'shibgothitoken.com'} 
          title4={'Socials'} txt4={'0xd4...8d53'} btnClass={styles.btn}/>
           <AnalyticsBoxes title1={'MARKET CAP'} txt1={'$3,649,182.09'} 
          title2={'TOTAL HOLDERS'} txt2={'3,022'} 
          title3={'TOTAL LIQUIDITY'} txt3={'$283,183.46'} 
          title4={'TOTAL TX'} txt4={'5,605'} /> 
          {/* <div className={styles.analytics__body__block__box}>
            <div className={styles.analytics__body__block__box__titles}>
              <div>
                <p>
                  market cap
                  <Popover content={content} title="">
                     <button> <FaQuestionCircle /></button>
                  </Popover>
                </p>
                <h3>$3,649,182.09</h3>
              </div>
              <div>
                <p>total Holders</p>
                <h3>3,022</h3>
              </div>
            </div>
            <div
              className={
                styles.analytics__body__block__box__titles +
                " " +
                styles.analytics__body__block__box__titles_2
              }
            >
              <div>
                <p>Total liquidity</p>
                <h3>$283,183.46</h3>
              </div>
              <div>
                <p>Total tx</p>
                <h3>5,605</h3>
              </div>
            </div>
          </div>  */}
        </div>
      </div>
    </div>
  );
};
