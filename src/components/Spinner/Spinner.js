import React from 'react';

import styles from './Spinner.module.css';

const spinner = (props) => {
    return (
        <div className={styles.Spinner} >
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
};

export default spinner;