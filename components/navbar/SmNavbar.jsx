import { Button, Drawer } from 'antd';
import { useState } from 'react';
import 'antd/dist/antd.css';
import styles from "./Navbar.module.css";

export const SmNavbar = () => {
  const [visible, setVisible] = useState(false);

  const showDrawer = () => {
    setVisible(true);
  };

  const onClose = () => {
    setVisible(false);
  };

  return (
    <>
      <Button type="primary" onClick={showDrawer}>
        Open
      </Button>
      <Drawer title={()=>
        <h1 className={styles.navbar__title}>LAS</h1>
      
      } placement="right" onClose={onClose} visible={visible}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};