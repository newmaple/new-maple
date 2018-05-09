import React from 'react';
import styles from './index.css';
import Button from 'src/components/utils/Button';

const logoSrc = require('src/assets/img/logo.png');
const growersBgSrc = require('src/assets/img/growersBg.jpg');

const AboutSection = () => (
    <div className={styles.AboutSection + " container"} id="AboutSection">
        <div><img alt="new maple" src={logoSrc} /></div>
        <div className={styles.Description}>
            Founded in 2016 and headquartered in Toronto, New Maple Holdings LTD is a diversified company offering cannabis investment products and expertise, managed by an unrivaled experienced team of legal industry experts and cannabis connoisseurs.
        </div>

        <div className={styles.TabSection} id="GrowersSection">
            <div>
                <span>CANWE GROWERS</span>
                <span>NEW MAPLE CONSULTING</span>
            </div>
            <div className={styles.GrowsersDetails} style={{backgroundImage:`url(${growersBgSrc})`}}>
                <h4>CanWe Growers, INC</h4>
                <div className={styles.GrowersDescription}>
                    Canwe Growers Inc. (Canwe) has submitted an application to become a Licensed Producer (LP) with the Access to Cannabis for Medical Purposes Regulations (ACMPR) with a planned production facility in Grand Valley, Ontario. 
                </div>
                <div className={styles.GrowersContact}>
                    For more information please contact us at <a href="mailto:inquiry@canwe.ca?subject=Canwe%Growers">inquiry@canwe.ca</a>
                    <Button onClick={() => alert('Clicked')} color="#4B4737" backgroundColor="white">Contact Us</Button>
                </div>
            </div>
        </div>
    </div>
);

export default AboutSection;
