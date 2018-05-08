import React from 'react';
import styles from "./index.css";
import cn from 'classnames';

const Header = () => (
  <div className={styles.Header}>
    <div className={cn("container", styles.Container)}>
      <img style={{height: '89px'}} src={require("./logo.png")} alt="New Maple Holdings" />
      <div className={styles.Nav}>
        <a className={styles.NavItem}>COMPANY</a>
        <a className={styles.NavItem}>PARTNER WITH US</a>
        <a className={styles.NavItem}>CONTACT US</a>
        <a className={styles.NavItemButton}>LOGIN</a>
      </div>
    </div>
  </div>
);

export default Header;