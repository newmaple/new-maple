import React from 'react';
import styles from './index.css';
import Button from 'src/components/utils/Button';

const bgSrc = require('src/assets/img/subscribeBg.jpg');

const SubscribeSection = () => (
    <div className={styles.SubscribeSection}>
        <div className={styles.SubscribeContainer + " container"} style={{backgroundImage: `url(${bgSrc})`}}>
            <h2>Subscribe</h2>
            <div className={styles.Description}>
                Be notified of updates and investment oppurtunity. We will not spam you.
            </div>
            <div className={styles.InputContainer}>
                <input type="text" placeholder="Your email"/>
                <Button onClick={() => alert('Clicked')} color="#4B4737" backgroundColor="white">Subscribe</Button>
            </div>
        </div>
    </div>
);

export default SubscribeSection;
