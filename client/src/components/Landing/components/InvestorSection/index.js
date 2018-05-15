import React from 'react';
import styles from './index.css';
import {Link} from "react-router-dom";
import Button from 'src/components/utils/Button';

const investorBgSrc = require('src/assets/img/investorBg.jpg');

const InvestorSection = () => (
    <div className={styles.InvestorSection} id="InvestorSection">

        <div className={styles.InvestorContainer} style={{backgroundImage: `url(${investorBgSrc})`}}>
            <div className="container">
                <h2>Investors</h2>
                <div className={styles.Description}>
                With our cannabis industry experience, expertise & knowledge, we can answer any questions you may have either through New Maple Holdings Ltd. or New Maple Consulting (NMC) 
                </div>
                <Link to="/contact-us">
                    <Button color="#4B4737" backgroundColor="white">Contact Us</Button>
                </Link>
            </div>
        </div>

        <div className={styles.InvestorDescriptionContainer + " container"}>
            <div className={styles.InvestorDescriptionHeading}>
                With our cannabis industry experience, expertise & knowledge, we can answer any questions you may have either through New Maple Holdings Ltd. or our Strategic Partnerships through NMC.
            </div>
            <div className={styles.InvestorDescriptionItem}>
                New Maple Holdings Ltd., as owner of CanWe Growers and NMC, has one class of common shares which it issues to investors as a means of raising capital.<br/><br/>By purchasing shares in New Maple Holdings, investors own a proportional piece of each of the company’s wholly owned subsidiaries. <br/><br/>
            </div>
            <div className={styles.InvestorDescriptionItem}>
            NMC offers various services to other companies already in receipt of their LP and LP applicants in exchange for cash and equity.<br/><br/> NMC is currently engaged with Northern Green Canada (NGC) - an LP with an indoor production facility strategically located in the Greater Toronto Area.
            </div>
        </div>

    </div>
);

export default InvestorSection;
