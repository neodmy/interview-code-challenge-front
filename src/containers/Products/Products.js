import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import Spinner from '../../components/Spinner/Spinner';
import styles from './Products.module.css';
import phone_generic from '../../images/phone_generic.png'

class Products extends Component {

    phone = {
        name: 'iPhone 7',
        manufacturer: 'Apple',
        description: 'iPhone 7 dramatically improves the most important aspects of the iPhone experience. It introduces advanced new camera systems. The best performance and battery life ever in an iPhone. Immersive stereo speakers. The brightest, most colorful iPhone display. Splash and water resistance*. And it looks every bit as powerful as it is. This is iPhone 7.',
        color: 'black',
        price: 769,
        imageFileName: 'IPhone_7.png',
        screen: '4,7 inch IPS',
        processor: 'A10 Fusion',
        ram: 2,
    }

    render() {
        let content = <Spinner />
        return (
            <Container className="text-center text-light">
                <Row className="my-5">
                    <Col>
                        <h1 className="display-4">Featured Products</h1>
                    </Col>
                </Row>
                <Row className="row justify-content-center">
                    <Card className={styles.card}>
                        <Card.Img variant="top" src={phone_generic} className={styles.prev_img} />
                        <Card.Body>
                            <Card.Title>{this.phone.name}</Card.Title>
                            <Card.Text>
                                {this.phone.description.substring(0, 60) + '...'}
                            </Card.Text>
                            <Button variant="outline-light">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                        <Card.Img variant="top" src={phone_generic} className={styles.prev_img} />
                        <Card.Body>
                            <Card.Title>{this.phone.name}</Card.Title>
                            <Card.Text>
                                {this.phone.description.substring(0, 60) + '...'}
                            </Card.Text>
                            <Button variant="outline-light">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                        <Card.Img variant="top" src={phone_generic} className={styles.prev_img} />
                        <Card.Body>
                            <Card.Title>{this.phone.name}</Card.Title>
                            <Card.Text>
                                {this.phone.description.substring(0, 60) + '...'}
                            </Card.Text>
                            <Button variant="outline-light">Go somewhere</Button>
                        </Card.Body>
                    </Card>
                    <Card className={styles.card}>
                        <Card.Img variant="top" src={phone_generic} className={styles.prev_img} />
                        <Card.Body>
                            <Card.Title>{this.phone.name}</Card.Title>
                            <Card.Text>
                                {this.phone.description.substring(0, 60) + '...'}
                            </Card.Text>
                            <Button variant="outline-light">Go somewhere</Button>
                        </Card.Body>
                    </Card>

                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        orders: state.phones.orders,
        loading: state.phones.loading,
        error: state.phones.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);