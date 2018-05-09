import React from 'react';
import styles from './index.css';
import Button from 'src/components/utils/Button';

const team1Src = require('src/assets/img/team1.jpg');
const team2Src = require('src/assets/img/team2.jpg');
const team3Src = require('src/assets/img/team3.jpg');
const team4Src = require('src/assets/img/team4.jpg');

const TeamSection = () => (
    <div className={styles.TeamSection + " container"} id="TeamSection">
        <h2>Our Team</h2>
        <div className={styles.TeamSectionContainer}>
            <div className={styles.Team}>
                <h3>Team and board members</h3>
                <div className={styles.AboutTeam}>
                    <span className={styles.TeamItem1}><img src={team1Src} /></span>
                    <span className={styles.TeamItem2}><img src={team2Src} /></span>
                    <span className={styles.TeamItem3}><img src={team3Src} /></span>
                    <span className={styles.TeamItem4}><img src={team4Src} /></span>
                    <Button onClick={() => alert('Clicked')} color="#4B4737" backgroundColor="white">Contact Us</Button>
                </div>
            </div>

            <div className={styles.Team}>
                <h3>The cannabis growers</h3>
                <div className={styles.AboutTeam}>
                    <span className={styles.TeamItem1}><img src={team1Src} /></span>
                    <span className={styles.TeamItem2}><img src={team2Src} /></span>
                    <span className={styles.TeamItem3}><img src={team3Src} /></span>
                    <span className={styles.TeamItem4}><img src={team4Src} /></span>
                    <Button onClick={() => alert('Clicked')} color="#4B4737" backgroundColor="white">Contact Them</Button>
                </div>
            </div>
        </div>
    </div>
);

export default TeamSection;
