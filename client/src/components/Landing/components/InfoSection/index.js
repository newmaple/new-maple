import React from 'react';
import styles from './index.css';
import DownArrow from "./down_arrow.svg";

const infoBgSrc = require('src/assets/img/infoBg.jpg');

const scrollIntoView = (selector) => {
    document.querySelector(selector).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

const InfoSection = () => (
    <div className={styles.InfoSection} style={{backgroundImage:`url(${infoBgSrc})`}}>
        <div className={styles.InfoSectionContainer + " container"}>
        <h2>A new breed.</h2>
        <div className={styles.Description}>Premium Canadian Cannabis by connisseurs, for connisseurs.</div>
        <div className={styles.NavigationSection}>
            <ul>
                <li onClick={() => scrollIntoView('#AboutSection')}>About us<DownArrow /></li>
                <li onClick={() => scrollIntoView('#GrowersSection')}>Growers<DownArrow /></li>
                <li onClick={() => scrollIntoView('#TeamSection')}>Our team<DownArrow /></li>
                <li onClick={() => scrollIntoView('#InvestorSection')}>Investment<DownArrow /></li>
            </ul>
        </div>
        </div>
    </div>
);

export default InfoSection;
