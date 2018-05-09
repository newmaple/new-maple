import React from 'react';
import styles from './index.css';
import {Link} from "react-router-dom";
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
<<<<<<< Updated upstream
                    <span className={styles.TeamItem1}><img alt="Team" src={team1Src} /></span>
                    <span className={styles.TeamItem2}><img alt="Team" src={team2Src} /></span>
                    <span className={styles.TeamItem3}><img alt="Team" src={team3Src} /></span>
                    <span className={styles.TeamItem4}><img alt="Team" src={team4Src} /></span>
                    <Link to="/contact-us">
                        <Button color="#4B4737" backgroundColor="white">Contact Us</Button>
                    </Link>
=======
                    <span className={styles.TeamItem1}><img alt="team member" src={team1Src} /></span>
                    <span className={styles.TeamItem2}><img alt="team member" src={team2Src} /></span>
                    <span className={styles.TeamItem3}><img alt="team member" src={team3Src} /></span>
                    <span className={styles.TeamItem4}><img alt="team member" src={team4Src} /></span>
                    <Button onClick={() => alert('Clicked')} color="#4B4737" backgroundColor="white">Contact Us</Button>
>>>>>>> Stashed changes
                </div>
            </div>

            <div className={styles.Team}>
                <h3>The cannabis growers</h3>
                <div className={styles.AboutTeam}>
<<<<<<< Updated upstream
                    <span className={styles.TeamItem1}><img alt="Team" src={team1Src} /></span>
                    <span className={styles.TeamItem2}><img alt="Team" src={team2Src} /></span>
                    <span className={styles.TeamItem3}><img alt="Team" src={team3Src} /></span>
                    <span className={styles.TeamItem4}><img alt="Team" src={team4Src} /></span>
                    <Link to="/contact-us">
                        <Button color="#4B4737" backgroundColor="white">Contact Them</Button>
                    </Link>
=======
                    <span className={styles.TeamItem1}><img alt="team member" src={team1Src} /></span>
                    <span className={styles.TeamItem2}><img alt="team member" src={team2Src} /></span>
                    <span className={styles.TeamItem3}><img alt="team member" src={team3Src} /></span>
                    <span className={styles.TeamItem4}><img alt="team member" src={team4Src} /></span>
                    <Button onClick={() => alert('Clicked')} color="#4B4737" backgroundColor="white">Contact Them</Button>
>>>>>>> Stashed changes
                </div>
            </div>
        </div>
    </div>
);

export default TeamSection;
