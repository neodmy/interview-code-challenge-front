import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import styles from './Product.module.css';

class Product extends Component {
    constructor(props) {
        super(props);
        this.phone = props.phones.filter(phone => phone._id === props.selectedPhone)[0];
    }

    phoneDetails = () => {
        let table = [];
        const excludedProps = ['_id', 'name', 'imageFileName', 'description'];
        for (const key in this.phone) {
            if (this.phone.hasOwnProperty(key) && !excludedProps.includes(key)) {
                const propUpperCase = key.charAt(0).toUpperCase() + key.slice(1);
                table.push(
                    <tr key={key}>
                        <td>{propUpperCase}</td>
                        <td>{this.phone[key]}</td>
                    </tr>
                );
            }
        }
        return table;
    }

    render() {
        let content = <Redirect to="/products" />;
        if (this.phone) {
            content = (
                <Container className="text-light text-center" >
                    <Row className="row justify-content-center mt-5 mb-3">
                        <h1 className="display-5">{this.phone.name}</h1>
                    </Row>
                    <Row className="row justify-content-center">
                        <Col lg={4} className="my-auto">
                            <img src={this.phone.imageFileName} alt="phone_image" className={styles.phone_img} />
                        </Col>
                        <Col lg={6}>
                            <p>{this.phone.description}</p>
                            <Table className="text-light">
                                <thead>
                                    <tr>
                                        <th colSpan="2">
                                            Tech Specs
                                        </th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {this.phoneDetails()}
                                </tbody>
                            </Table>
                        </Col>
                    </Row>
                </Container >
            );
        }
        return (<React.Fragment>{content}</React.Fragment>);
    }
}

const mapStateToProps = state => {
    return {
        phones: state.phones.phones,
        selectedPhone: state.phones.selectedPhone
    }
}

const mapDispatchToProps = dispatch => {
    return {

    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);