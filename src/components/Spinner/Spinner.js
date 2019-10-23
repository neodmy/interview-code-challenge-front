import React from 'react';

import styles from './Spinner.module.css';

const spinner = (props) => {
    return (
        <div className={styles.Spinner} style={{ '&::after': { background: 'red' } }} >
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
            <div style={{ '&::after': { background: 'red' } }}></div>
        </div>
    );
};

export default spinner;