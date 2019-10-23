import React from 'react';

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Spinner from '../Spinner/Spinner';

const customModal = (props) => {
    const bg = { backgroundColor: 'rgb(32, 23, 38)' };
    let content = props.initialContent;
    if (props.loading) content = <Spinner />;
    if (props.error) content = props.error;
    return (
        <Modal show={props.show} onHide={props.onHide} aria-labelledby="title">
            <Modal.Header closeButton style={bg} className="text-light">
                <Modal.Title id="title">Delete Phone</Modal.Title>
            </Modal.Header>
            <Modal.Body style={bg} className="text-light">
                <Container>
                    <Row>
                        <Col className="text-center">
                            {content}
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>
            <Modal.Footer style={bg}>
                <Button variant="outline-light" onClick={props.onHide}>Cancel</Button>
                <Button variant="outline-danger" onClick={props.onConfirm}>Confirm</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default customModal;