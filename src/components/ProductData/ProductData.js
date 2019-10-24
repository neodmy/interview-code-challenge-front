import React from 'react';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';

import styles from './ProductData.module.css';

const productData = (props) => {
    const phoneDetails = () => {
        let table = [];
        const excludedProps = ['_id', 'name', 'imageFileName', 'description'];
        for (const key in props.phone) {
            if (props.phone.hasOwnProperty(key) && !excludedProps.includes(key)) {
                const propUpperCase = key.charAt(0).toUpperCase() + key.slice(1);
                table.push(
                    <tr key={key}>
                        <td>{propUpperCase}</td>
                        <td>{props.phone[key]}</td>
                    </tr>
                );
            }
        }
        return table;
    }

    return (
        <Container className="text-light text-center" >
            <Row className="row justify-content-center mt-5 mb-3 ">
                <Col>
                    <h1 className="display-5">{props.phone.name}</h1>
                </Col>
            </Row>
            {props.adminOptions}
            <Row className="row justify-content-center">
                <Col lg={4} className="my-auto">
                    <img src={process.env.REACT_APP_BACKEND + props.phone.imageFileName} alt="phone_image" className={styles.phone_img} />
                </Col>
                <Col lg={6}>
                    <p>{props.phone.description}</p>
                    <Table className="text-light">
                        <thead>
                            <tr>
                                <th colSpan="2">
                                    Tech Specs
                            </th>
                            </tr>
                        </thead>
                        <tbody>
                            {phoneDetails()}
                        </tbody>
                    </Table>
                </Col>
            </Row>
        </Container >
    );
};

export default productData;