import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import styles from './Landing.module.css';

class Landing extends Component {

    render() {
        return (
            <Container className={styles.Landing}>
                <Row className="row justify-content-center text-center text-light">
                    <Col sm={12}>
                        <h1 className="display-4">Phones Store</h1>
                        <p>Explore our products</p>
                        <Button as={NavLink} to="/products" variant="outline-light" className="mt-3">CHECK OUT</Button>
                    </Col>
                </Row>
            </Container>
        );
    }
}

export default Landing;