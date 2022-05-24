import React from "react";

import styles from "./Header.module.css";

export const Header = () => {
  return (
    <div className={styles.header}>
      <div className={styles.header_body}>
        <p>Current leader tx 480.334 $LAS</p>
        <p>Leader gets 3% of dev taxes and potion to evolve stands</p>
        <p>
          Become a Leader <b> Buy at least 480.335 $LAS</b>
        </p>
      </div>
    </div>
  );
};
