import React,{useState} from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Drawer, Button } from 'antd';
import { Table2 } from "../../table/Table"
import { AnalyticsBoxes } from "./../AnalyticsBoxes";

import styles from "./Chart.module.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const data = {
  labels: ["Red", "Yellow"],
  datasets: [
    {
      label: "# of Votes",
      data: [6, 2],
      backgroundColor: ["#FEBF3E", "#943740"],
      borderColor: ["#FEBF3E", "#943740"],
      borderWidth: 1,
    },
  ],
};

export const AChart = () => {
  return <Doughnut data={data} />;
};

export const ChartBox = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(true);
  };
  const onClose = () => {
    setVisible(false);
  };
  return (
    <>
      <div
        className={
          styles.analytics__body__block__diagramma_box +
          " " +
          styles.analytics__body__block__box
        } id={'liveChart'}
      >
        <div
          className={styles.analytics__body__block__diagramma_box__text_block}
        >
          <AnalyticsBoxes
            title1={"Max Total Supply"}
            txt1={"100,000,000,000,000,000"}
            title3={"Circulation supply"}
            txt3={"72%"}
            btnClass={styles.btn}
          />
          <div
            className={
              styles.analytics__body__block__box__titles +
              " " +
              styles.analytics__body__block__diagramma_box__title
            }
          >
            <div>
              <p>in deployer</p>
              <h3>28%</h3>
            </div>
          </div>
        </div>
        <AChart />
      </div>
      <div
        className={
          styles.analytics__body__block__desc_block +
          " " +
          styles.analytics__body__block__box
        }
      >
        <div
          className={styles.analytics__body__block__diagramma_box__text_block}
        >
          <AnalyticsBoxes title1={"first block (wallets)"} txt1={"142"} />
          <AnalyticsBoxes title1={"current block (wallets)"} txt1={"3,468"} />
          <AnalyticsBoxes title1={"Blacklisted wallets"} txt1={"132"} />
          <h1 className={styles.analytics__body__block__desc_block__list_text} onClick={showDrawer}>
            Blacklisted wallets list
          </h1>
          <Drawer  placement="right" onClose={onClose} visible={visible}>
      <Table2/>
      </Drawer>
        </div>
      </div>
    </>
  );
};
