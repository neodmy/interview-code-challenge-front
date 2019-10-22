import React from 'react';
import { Link } from 'react-router-dom';

import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import styles from './PhoneCard.module.css';

const phoneCard = (props) => {
    return (
        <Card className={styles.card}>
            <Card.Img variant="top" src={props.img} className={styles.prev_img} />
            <Card.Body>
                <Card.Title>{props.name}</Card.Title>
                <Card.Text>
                    {props.description.substring(0, 60) + '...'}
                </Card.Text>
                <Button as={Link} to="/phone" variant="outline-light" onClick={props.clicked}>Details</Button>
            </Card.Body>
        </Card>
    );
};

export default phoneCard;