import React from 'react';
import styles from './index.css';

const Input = (props) => (
    <input type="textarea" {...props} className={styles.Input} />
);

export default Input;