import { RiArrowDropLeftLine } from "react-icons/ri";
import { FaQuestionCircle } from "react-icons/fa";

import styles from "./Analytics.module.css";
import { Button, Popover } from "antd";
import "antd/dist/antd.css";

const content = (
  <div className={styles.content}>
    <p>Wallets that got in the first block after token launch bla bla</p>
  </div>
);

export const AnalyticsBoxes = ({
  title1,
  txt1,
  title2,
  txt2,
  title3,
  txt3,
  title4,
  txt4,
  btnClass
}) => {
  
  return (
    <div className={styles.analytics__body__block__box}>
      <div className={styles.analytics__body__block__box__titles}>
        <div>
          <p>
            {title1}
            <Popover content={content} title="" className={btnClass}>
              <button>
                <FaQuestionCircle />
              </button>
            </Popover>
          </p>
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
  );
};
