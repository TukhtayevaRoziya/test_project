import { RiArrowDropLeftLine } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";

import styles from "./Analytics.module.css";
import { Button, Popover } from "antd";
import 'antd/dist/antd.css';

export const AnalyticsBoxes = ({title1, txt1, title2, txt2, title3, txt3, title4, txt4, props }) => {
  return (
    <div className={styles.analytics__body__block__box}>
            <div className={styles.analytics__body__block__box__titles}>
              <div>
                {...props}
                <p>{title1}</p>
                <h3>{txt1}</h3>
              </div>
              <div>
                <p>{title2}</p>
                <h3>{txt2}</h3>
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
                <p>{title3}</p>
                <h3>{txt3}</h3>
              </div>
              <div>
                <p>{title4}</p>
                <h3>{txt4}</h3>
              </div>
            </div>
          </div>
  )
}
