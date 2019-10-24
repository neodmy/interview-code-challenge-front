import React, { Component } from 'react';

import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import styles from './ProductForm.module.css';

class ProductForm extends Component {
    createFormObject = (valueContent, labelContent, typeContent) => {
        return {
            initialValue: valueContent,
            value: valueContent,
            label: labelContent,
            touched: false,
            type: typeContent
        }
    };

    state = {
        form: {
            name: this.createFormObject(this.props.phone.name, 'Name', 'text'),
            manufacturer: this.createFormObject(this.props.phone.manufacturer, 'Manufacturer', 'text'),
            description: this.createFormObject(this.props.phone.description, 'Description', 'textarea'),
            color: this.createFormObject(this.props.phone.color, 'Color', 'text'),
            price: this.createFormObject(this.props.phone.price.toString(10), 'Price', 'text'),
            screen: this.createFormObject(this.props.phone.screen, 'Screen', 'text'),
            processor: this.createFormObject(this.props.phone.processor, 'Processor', 'text'),
            ram: this.createFormObject(this.props.phone.ram.toString(10), 'Ram', 'text'),
        },
    };


    checkFormChanged = (form) => {
        let changed = false;
        for (let prop in form) {
            if (form.hasOwnProperty(prop)) {
                changed = changed || form[prop].touched
            }
        }
        return changed;
    };

    inputChangeHandler = (event, key) => {
        const updatedForm = { ...this.state.form };
        const updatedFormElement = { ...updatedForm[key] };
        const newValue = event.target.value;
        updatedFormElement.touched = updatedFormElement.initialValue !== newValue;
        updatedFormElement.value = newValue;
        updatedForm[key] = updatedFormElement;
        const formChangeStatus = this.checkFormChanged(updatedForm);
        this.setState({ form: updatedForm });
        this.props.formChanged(formChangeStatus);
    };

    createFormGroup = (key, stateInput) => {
        let inputType = <Form.Control type="text" value={stateInput.value} onChange={(event) => this.inputChangeHandler(event, key)} />;
        if (key === 'description')
            inputType = <Form.Control as="textarea" value={stateInput.value} onChange={(event) => this.inputChangeHandler(event, key)} />;
        return (
            <Form.Group as={Row} controlId={key} key={key}>
                <Form.Label column sm="3" className="mr-3 align-middle">{stateInput.label}</Form.Label>
                <Col sm="8">
                    {inputType}
                </Col>
            </Form.Group>
        );
    };

    createForm = () => {
        const content = [];
        for (let key in this.state.form) {
            if (this.state.form.hasOwnProperty(key)) {
                content.push(this.createFormGroup(key, this.state.form[key]))
            }
        }
        return content;
    };

    undoForm = () => {

    };

    render() {
        return (
            <Container className="text-light text-center" >
                <Row className="row justify-content-center mt-5 mb-3 ">
                    <Col>
                        <h1 className="display-5">Edit Phone</h1>
                    </Col>
                </Row>
                {this.props.adminOptions}
                <Row className="row justify-content-center">
                    <Col lg={4} className="my-auto">
                        <img src={this.props.phone.imageFileName} alt="phone_image" className={styles.phone_img} />
                    </Col>
                    <Col lg={6}>
                        <Form>
                            {this.createForm()}
                        </Form>
                    </Col>
                </Row>
            </Container >

        );
    }
}

export default ProductForm;