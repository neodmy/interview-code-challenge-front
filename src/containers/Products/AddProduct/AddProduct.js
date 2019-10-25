import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import ProductForm from '../ProductForm/ProductForm';
import CustomModal from '../../../components/CustomModal/CustomModal';
import * as actions from '../../../store/actions';

class AddProduct extends Component {
    state = {
        phone: {
            name: '',
            manufacturer: '',
            description: '',
            color: '',
            price: '',
            imageFileName: '',
            screen: '',
            processor: '',
            ram: '',
        },
        formChanged: false,
        showModal: false,
    };

    componentDidUpdate() {
        if (!this.props.isAdmin) this.props.history.push('/products');
    }

    onFormChangedHandler = (formChangeStatus, key, newValue) => {
        const phoneUpdated = { ...this.state.phone };
        phoneUpdated[key] = newValue;
        this.setState({ formChanged: formChangeStatus, phone: phoneUpdated });
    };

    onShowModalHandler = () => {
        this.setState({ showModal: true });
    };

    onHideModalHandler = () => {
        this.setState({ showModal: false });
    };

    onConfirmSaveHandler = () => {

    }

    render() {
        const adminOptions = (
            <Row className="row justify-content-center mb-3">
                <Col >
                    {this.state.formChanged
                        ? <Button variant="outline-success mr-2" onClick={this.onShowModalHandler}>Save</Button>
                        : null}
                </Col>
            </Row >
        );
        let content = <Redirect to="/products" />
        if (this.props.isAdmin && !this.props.successRequest) content = (
            <ProductForm
                title="Add Phone"
                phone={this.state.phone}
                adminOptions={adminOptions}
                formChanged={this.onFormChangedHandler}
            />
        )
        return (
            <React.Fragment>
                <CustomModal
                    show={this.state.showModal}
                    title="Add Phone"
                    onHide={this.onHideModalHandler}
                    initialContent="Are you sure you want to add this phone?"
                    loading={this.props.loadingPhone}
                    error={this.props.errorRequest}
                    onConfirm={this.onConfirmSaveHandler}
                />
                {content}
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => {
    return {
        isAdmin: state.admin.isAdmin,
        loadingPhone: state.admin.loadingPhone,
        errorRequest: state.admin.errorRequest,
        successRequest: state.admin.successRequest,
    }
};

const mapDispatchToProps = dispatch => {
    return {

    }
};

export default connect(mapStateToProps, mapDispatchToProps)(AddProduct);