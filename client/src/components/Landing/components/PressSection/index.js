import React from 'react';
import styles from './index.css';

const pressSrc1 = require('src/assets/img/press1.png');
const pressSrc2 = require('src/assets/img/press2.png');
const pressSrc3 = require('src/assets/img/press3.png');
const pressSrc4 = require('src/assets/img/press4.png');
const pressSrc5 = require('src/assets/img/press5.png');
const pressSrc6 = require('src/assets/img/press6.png');

const press = [
    {
        link: '#',
        img: pressSrc1
    },
    {
        link: '#',
        img: pressSrc2
    },
    {
        link: '#',
        img: pressSrc3
    },
    {
        link: '#',
        img: pressSrc4
    },
    {
        link: '#',
        img: pressSrc5
    },
    {
        link: '#',
        img: pressSrc6
    },
];

const PressSection = () => (
    <div className={styles.PressSection}>
        <h2>In the press</h2>
        <div className={styles.PressItemContainer}>
            {press.map((el) => {
                return (
                    <span className={styles.PressItem}>
                        <a href={el.link} target="_blank"><img alt="Press" src={el.img} /></a>
                    </span>
                )
            })}
        </div>
    </div>
);

export default PressSection;
