import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

import styles from './Product.module.css';
import CustomModal from '../../../components/CustomModal/CustomModal';
import * as actions from '../../../store/actions';

class Product extends Component {
    state = {
        showModal: false,
    }

    componentDidUpdate() {
        if (this.props.successRequest) this.props.history.push('/products');
    }

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

    onShowDeleteModalHandle = () => {
        this.setState({ showModal: true });
    }

    onHideDeleteModalHandle = () => {
        this.setState({ showModal: false });
    }

    onConfirmDeleteHandle = () => {
        this.props.onDeletePhone(this.phone._id);
    }

    createContent = () => {
        let content = <Redirect to="/products" />;
        if (this.phone) {
            let edit = null;
            if (this.props.isAdmin) {
                edit = (
                    <Row className="row justify-content-center mb-3">
                        <Col >
                            <Button variant="outline-light mr-2">Edit</Button>
                            <Button variant="outline-danger" onClick={this.onShowDeleteModalHandle}>Delete</Button>
                        </Col>
                    </Row>
                );
            }
            const deleteModal = (
                <CustomModal
                    show={this.state.showModal}
                    onHide={this.onHideDeleteModalHandle}
                    initialContent={`Are you sure deleting ${this.phone.name}?`}
                    loading={this.props.loadingPhone}
                    error={this.props.errorRequest}
                    onConfirm={() => this.onConfirmDeleteHandle()}
                />
            );
            content = (
                <Container className="text-light text-center" >
                    {deleteModal}
                    <Row className="row justify-content-center mt-5 mb-3 ">
                        <Col>
                            <h1 className="display-5">{this.phone.name}</h1>
                        </Col>
                    </Row>
                    {edit}
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
        return content;
    }

    render() {
        return (
            <React.Fragment>
                {this.createContent()}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        phones: state.phones.phones,
        selectedPhone: state.phones.selectedPhone,
        isAdmin: state.admin.isAdmin,
        loadingPhone: state.admin.loadingPhone,
        errorRequest: state.admin.errorRequest,
        successRequest: state.admin.successRequest,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeletePhone: (id) => dispatch(actions.adminDeletePhone(id)),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);