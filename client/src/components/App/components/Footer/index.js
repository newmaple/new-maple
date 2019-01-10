import React from "react";
import styles from "./index.css";

import TwitterIcon from "./components/TwitterIcon.svg";
import FacebookIcon from "./components/FacebookIcon.svg";
import LinkedInIcon from "./components/LinkedInIcon.svg";
import LogoText from "./components/LogoText.svg";
// import { Link } from "react-router-dom";
// import { HashLink } from "react-router-hash-link";

const Footer = () => (
  <div className={styles.Footer}>
    {/* <LogoText /> */}
    {/* <div className={styles.Nav}>
      <Link to="/team" className={styles.NavItem}>
        OUR TEAM
      </Link>
      <HashLink
        to="/#AboutSection"
        scroll={el =>
          el.scrollIntoView({
            behavior: "smooth",
            alignToTop: true,
            block: "end"
          })
        }
        className={styles.NavItem}
      >
        PARTNER WITH US
      </HashLink>
      <Link to="/contact-us" className={styles.NavItem}>
        CONTACT US
      </Link>
    </div> */}
    <div className={styles.Nav}>
      <TwitterIcon className={styles.NavItem} />
      <FacebookIcon className={styles.NavItem} />
      <LinkedInIcon className={styles.NavItem} />
    </div>
  </div>
);

export default Footer;
