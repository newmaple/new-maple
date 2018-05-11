import React from 'react';
import styles from './index.css';
import {Link} from "react-router-dom";
import Button from 'src/components/utils/Button';

const team1Src = require('src/components/Team/images/newmaple-12.jpg');
const team2Src = require('src/components/Team/images/newmaple-1.jpg');
const team3Src = require('src/components/Team/images/newmaple-13.jpg');
const team4Src = require('src/components/Team/images/tegan.png');

const grow1Src = require('src/components/Team/images/newmaple-5.jpg');
const grow2Src = require('src/components/Team/images/newmaple-2-flipped.jpg');
const grow3Src = require('src/components/Team/images/newmaple-3.jpg');
const grow4Src = require('src/components/Team/images/newmaple-4.jpg');

const TeamSection = () => (
    <div className={styles.TeamSection + " container"} id="TeamSection">
        <h2>Our Team</h2>
        <div className={styles.TeamSectionContainer}>
            <div className={styles.Team}>
                <h3>Team and board members</h3>
                <div className={styles.AboutTeam}>
                    <span className={styles.TeamItem1}><img alt="Team" src={team1Src} /></span>
                    <span className={styles.TeamItem2}><img alt="Team" src={team2Src} /></span>
                    <span className={styles.TeamItem3}><img alt="Team" src={team3Src} /></span>
                    <span className={styles.TeamItem4}><img alt="Team" src={team4Src} /></span>
                    <Link to="/team">
                        <Button color="#4B4737" backgroundColor="white">Meet the Board & Team</Button>
                    </Link>
                </div>
            </div>

            <div className={styles.Team}>
                <h3>The cannabis growers</h3>
                <div className={styles.AboutTeam}>
                    <span className={styles.TeamItem1}><img alt="Team" src={grow1Src} /></span>
                    <span className={styles.TeamItem2}><img alt="Team" src={grow2Src} /></span>
                    <span className={styles.TeamItem3}><img alt="Team" src={grow3Src} /></span>
                    <span className={styles.TeamItem4}><img alt="Team" src={grow4Src} /></span>
                    <Link to="/team/growers">
                        <Button color="#4B4737" backgroundColor="white">Meet the Growers</Button>
                    </Link>
                </div>
            </div>
        </div>
    </div>
);

export default TeamSection;
