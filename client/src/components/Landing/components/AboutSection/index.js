import React from "react";
import styles from "./index.css";
import {Link} from "react-router-dom";
import cn from 'classnames';

import Button from "src/components/utils/Button";

const logoSrc = require("src/assets/img/logo.png");
const growersBgSrc = require("src/assets/img/growersBg.jpg");

const Growers = () => (
  <div className={styles.GrowsersDetails} style={{backgroundImage:`url(${growersBgSrc})`}}>
    <div className={styles.GrowsersDetailsContainer + " container"}>
      <h4>CanWe Growers, INC</h4>
      <div className={styles.GrowersDescription}>
        Canwe Growers Inc. (Canwe) has submitted an application to become a Licensed Producer (LP) with the Access to Cannabis for Medical Purposes Regulations (ACMPR) with a planned production facility in Grand Valley, Ontario. 
      </div>
      <div className={styles.GrowersContact}>
        For more information please contact us at{" "}<a href="mailto:inquiry@canwe.ca?subject=Canwe%20Growers">inquiry@canwe.ca</a>
        <Link to="/contact-us">
          <Button color="#4B4737" backgroundColor="white">Contact Us</Button>
        </Link>
      </div>
    </div>
  </div>
);

const Consulting = () => (
  <div className={styles.GrowsersDetails} style={{backgroundImage:`url(${growersBgSrc})`}}>
    <div className={styles.GrowsersDetailsContainer + " container"}>
      <h4>New Maple Consulting</h4>
      <div className={styles.GrowersDescription}>
        NMC offers and provides various Cannabis management services to other companies already in receipt of their LP and LP applicants in exchange for cash and equity. We would be glad to supply you with our list of offered management services.
      </div>
      <div className={styles.GrowersContact}>
        For more information please contact us at {" "}<a href="mailto:inquiry@canwe.ca?subject=New%20Maple%20Consulting">inquiry@canwe.ca</a>
        <Link to="/contact-us">
          <Button color="#4B4737" backgroundColor="white">Contact Us</Button>
        </Link>
      </div>
    </div>
  </div>
)

class AboutSection extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tab: 1
    }
  }

  render () { 
    return (
      <div className={styles.AboutSection} id="AboutSection">
        <div><img alt="new maple" src={logoSrc} /></div>
        <div className={styles.Description}>
          Founded in 2016 and headquartered in Toronto, New Maple Holdings LTD is a
          diversified company offering cannabis investment products and expertise,
          managed by an unrivaled experienced team of legal industry experts and
          cannabis connoisseurs.
        </div>

        <div className={styles.TabSection} id="GrowersSection">
          <div className={styles.Selector}>
            <span onClick={() => this.setState({tab: 1})} className={cn({[`${styles.SelectedTab}`]: this.state.tab === 1})}>CANWE GROWERS</span>
            <span onClick={() => this.setState({tab: 2})} className={cn({[`${styles.SelectedTab}`]: this.state.tab === 2})}>NEW MAPLE CONSULTING</span>
          </div>

          { this.state.tab === 1 ? <Growers /> : <Consulting /> }
        </div>
      </div>
    )
  }
}

export default AboutSection;
