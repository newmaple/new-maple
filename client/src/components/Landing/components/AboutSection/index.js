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
      <h4>CanWe Growers, Inc.</h4>
      <div className={styles.GrowersDescription}>
      CanWe is a Licensed Producer applicant under the Access to Cannabis for Medical Purposes Regulations with a production facility under construction in Grand Valley, Ontario.
      </div>
      <div className={styles.GrowersContact}>
        For more information please contact us at{" "}<a href="mailto:info@canwe.ca?subject=CanWe%20Growers">info@canwe.ca</a>
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
      <h4>Partner with Us</h4>
      <div className={styles.GrowersDescription}>
      NMC provides various cannabis management services to LPs and LP-applicants in exchange for cash and equity. We would be glad to supply you with a list of the management services we offer.
      </div>
      <div className={styles.GrowersContact}>
        For more information please contact us at {" "}<a href="mailto:info@canwe.ca?subject=New%20Maple%20Consulting">info@canwe.ca</a>
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
          Founded in 2016 and headquartered in Toronto, New Maple Holdings Ltd. is a
          diversified company offering cannabis investment products and expertise,
          managed by an unrivaled team of industry experts and cannabis connoisseurs.
        </div>

        <div className={styles.TabSection} id="GrowersSection">
          <div className={styles.Selector}>
            <span onClick={() => this.setState({tab: 2})} className={cn({[`${styles.SelectedTab}`]: this.state.tab === 2})}>CANWE GROWERS</span>
            <span onClick={() => this.setState({tab: 1})} className={cn({[`${styles.SelectedTab}`]: this.state.tab === 1})}>PARTNER WITH US</span>
          </div>

          { this.state.tab === 2 ? <Growers /> : <Consulting /> }
        </div>
      </div>
    )
  }
}

export default AboutSection;
