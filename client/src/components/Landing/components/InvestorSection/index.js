import React from 'react';
import styles from './index.css';
import Button from 'src/components/utils/Button';

const investorBgSrc = require('src/assets/img/investorBg.jpg');

const InvestorSection = () => (
    <div className={styles.InvestorSection + " container"} id="InvestorSection">

        <div className={styles.InvestorContainer} style={{backgroundImage: `url(${investorBgSrc})`}}>
            <h2>Investors</h2>
            <div className={styles.Description}>
                If you are a qualified investor and would like to consider investing in our company, please contact us and let us help you with your cannabis questions.
            </div>
            <Button onClick={() => alert('Clicked')} color="#4B4737" backgroundColor="white">Contact Us</Button>
        </div>

        <div className={styles.InvestorDescriptionContainer}>
            <div className={styles.InvestorDescriptionHeading}>
                With our cannabis industry experience, expertise & knowledge, we can answer any questions you may have either through New Maple Holdings LTD or New Maple Consulting.
            </div>
            <div className={styles.InvestorDescriptionItem}>
                New Maple Holdings LTD, as owner of Canwe Growers and NMC, has one class of common shares which it issues to investors as a means of raising capital.<br/><br/>By purchasing shares in New Maple Holdings, investors own a proportional piece of each of the company’s wholly owned subsidiaries. <br/><br/>NMC offers various services to other companies already in receipt of their LP and LP applicants in exchange for cash and equity.
            </div>
            <div className={styles.InvestorDescriptionItem}>
                At the time of writing, NMC holds approximately 5% of the fully diluted common shares of Northern Green Canada (NGC); an LP with over 200,000ft2 of facility space based in Brampton, Ontario. <br/><br/>NGC currently has a cultivation license and is anticipating its sales license in the Summer 2018.<br/><br/>For more information, email us at <a href="mailto:inquiry@canwe.ca?subject=Canwe%Growers">inquiry@canwe.ca</a>
            </div>
        </div>

    </div>
);

export default InvestorSection;
