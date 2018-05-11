import React from "react";
import cn from "classnames";
import { Link } from "react-router-dom";

import styles from "./index.css";

const Header = () => (
  <div className={styles.Header}>
    <div className={cn("container", styles.Container)}>
      <Link to="/">
        <img
          style={{ height: "80px" }}
          src={require("./logo.png")}
          alt="New Maple Holdings"
        />
      </Link>
      <label htmlFor="toggle-menu" className={styles.NavToggle}>
        ☰
      </label>
      <input
        className={styles.NavToggleInput}
        type="checkbox"
        id="toggle-menu"
      />
      <label htmlFor="toggle-menu" className={styles.Nav}>
        <Link to="/team" className={styles.NavItem}>
          OUR TEAM
        </Link>
        <a href="/#partner-with-us" className={styles.NavItem}>
          PARTNER WITH US
        </a>
        <Link to="/contact-us" className={styles.NavItem}>
          CONTACT US
        </Link>
      </label>
    </div>
  </div>
);

export default Header;
