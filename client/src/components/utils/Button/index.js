import React from 'react';
import styles from './Button.css';

const Button = ({
    backgroundColor = '#fff',
    color = '4B4737',
    ...props
}) => (
    <button {...props} style={{
        borderRadius: '100px',
        fontWeight: 'bold',
        minHeight: '40px',
        fontSize: '14px',
        border: 'none',
        textTransform: 'uppercase',
        cursor: 'pointer',
        backgroundColor,
        color,
        padding: '10px 24px'
    }}>
        {props.children}
    </button>
);


Button.Row = (props) => (
    <div {...props} className={styles.Row}>
        {props.children}
    </div>
);


export default Button;