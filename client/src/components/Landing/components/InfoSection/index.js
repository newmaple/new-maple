import React from 'react';
import styles from './index.css';

const infoBgSrc = require('src/assets/img/infoBg.jpg');

const scrollIntoView = (selector) => {
    document.querySelector(selector).scrollIntoView({ 
        behavior: 'smooth' 
    });
}

const InfoSection = () => (
    <div className={styles.InfoSection + " container"} style={{backgroundImage:`url(${infoBgSrc})`}}>
        <h2>A new breed.</h2>
        <div className={styles.Description}>Premium Canadian Cannabis by connisseurs, for connisseurs.</div>
        <div className={styles.NavigationSection}>
            <ul>
                <li onClick={() => scrollIntoView('#AboutSection')}>About us</li>
                <li onClick={() => scrollIntoView('#GrowersSection')}>Growers</li>
                <li onClick={() => scrollIntoView('#TeamSection')}>Our team</li>
                <li onClick={() => scrollIntoView('#InvestorSection')}>Investment</li>
            </ul>
        </div>
    </div>
);

export default InfoSection;
