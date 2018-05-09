import React from "react";
import styles from "./index.css";
import {Link} from "react-router-dom";
import TwitterIcon from "./components/TwitterIcon.svg";
import FacebookIcon from "./components/FacebookIcon.svg";
import LinkedInIcon from "./components/LinkedInIcon.svg";

const Footer = () => (
  <div className={styles.Footer}>
    <img src={require("./logo.png")} alt="logo" />
    <div className={styles.Nav}>
      <a className={styles.NavItem}>COMPANY</a>
      <a className={styles.NavItem}>PARTNER WITH US</a>
      <Link to="/contact-us" className={styles.NavItem}>
        CONTACT US
      </Link>
    </div>
    <div className={styles.Nav}>
      <TwitterIcon className={styles.NavItem} />
      <FacebookIcon className={styles.NavItem} />
      <LinkedInIcon className={styles.NavItem} />
    </div>
  </div>
);

export default Footer;
