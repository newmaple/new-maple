import React from 'react';
import cn from 'classnames';
import {Link} from "react-router-dom";

import styles from "./index.css";

const Header = () => (
  <div className={styles.Header}>
    <div className={cn("container", styles.Container)}>
      <Link to="/">
        <img style={{height: '89px'}} src={require("./logo.png")} alt="New Maple Holdings" />
      </Link>
      <div className={styles.Nav}>
        <a className={styles.NavItem}>COMPANY</a>
        <a className={styles.NavItem}>PARTNER WITH US</a>
        <Link to="/contact-us" className={styles.NavItem}>CONTACT US</Link>
      </div>
    </div>
  </div>
);

export default Header;