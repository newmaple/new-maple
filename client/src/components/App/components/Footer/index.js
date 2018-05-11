import React from "react";
import styles from "./index.css";
import {Link} from "react-router-dom";
import TwitterIcon from "./components/TwitterIcon.svg";
import FacebookIcon from "./components/FacebookIcon.svg";
import LinkedInIcon from "./components/LinkedInIcon.svg";
import LogoText from "./components/LogoText.svg";

const Footer = () => (
  <div className={styles.Footer}>
    <LogoText />
    <div className={styles.Nav}>
      <Link to="/team" className={styles.NavItem}>
        OUR TEAM
      </Link>
      <a href="/#partner-with-us" className={styles.NavItem}>PARTNER WITH US</a>
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
