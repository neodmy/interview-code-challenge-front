import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import CustomModal from '../../../components/CustomModal/CustomModal';
import ProductData from '../../../components/ProductData/ProductData';
import ProductForm from '../ProductForm/ProductForm';
import * as actions from '../../../store/actions';

class Product extends Component {
    state = {
        showDeleteModal: false,
        showUpdateModal: false,
        editMode: false,
        formChanged: false,
        phoneUpdate: null,
    }

    componentDidUpdate() {
        if (this.props.successRequest) this.props.history.push('/products');
    }


    onShowDeleteModalHandler = () => {
        this.setState({ showDeleteModal: true });
    }

    onHideDeleteModalHandler = () => {
        this.setState({ showDeleteModal: false });
        if (this.props.errorRequest) this.props.resetRequestStatus();
    }

    onConfirmDeleteHander = () => {
        this.props.onDeletePhone(this.props.selectedPhone._id);
    }

    onShowUpdateModalHandler = () => {
        this.setState({ showUpdateModal: true });
    }

    onHideUpdateModalHandler = () => {
        this.setState({ showUpdateModal: false });
        if (this.props.errorRequest) this.props.resetRequestStatus();
    }

    onConfirmUpdateHandler = () => {
        this.props.onUpdatePhone(this.state.phoneUpdate);
    }

    ToggleEditMode = () => {
        const newMode = !this.state.editMode;
        this.setState((prevState) => ({
            editMode: newMode,
            formChanged: !newMode,
            phoneUpdate: !newMode ? null : prevState.phoneUpdate
        }));
    }

    onFormChangedHandler = (status, propertyName, propertyValue) => {
        const phoneUpdatedData = { ...this.props.selectedPhone };
        phoneUpdatedData[propertyName] = propertyValue;
        this.setState({ formChanged: status, phoneUpdate: phoneUpdatedData });
    }

    createContent = () => {
        let content = <Redirect to="/products" />;
        if (this.props.selectedPhone) {
            let adminOptions = null;
            if (this.props.isAdmin) {
                adminOptions = (
                    <Row className="row justify-content-center mb-3">
                        <Col >
                            {this.state.formChanged && this.state.editMode
                                ? <Button variant="outline-success mr-2" onClick={this.onShowUpdateModalHandler}>Save</Button>
                                : null}
                            <Button variant="outline-light mr-2" onClick={this.ToggleEditMode}>
                                {this.state.editMode
                                    ? 'Details'
                                    : 'Edit'}
                            </Button>
                            <Button variant="outline-danger" onClick={this.onShowDeleteModalHandler}>Delete</Button>
                        </Col>
                    </Row >
                );
            }
            const deleteModal = (
                <CustomModal
                    show={this.state.showDeleteModal}
                    title="Delete Phone"
                    onHide={this.onHideDeleteModalHandler}
                    initialContent={`Are you sure you want to delete ${this.props.selectedPhone.name}?`}
                    loading={this.props.loadingPhone}
                    error={this.props.errorRequest}
                    onConfirm={this.onConfirmDeleteHander}
                />
            );
            const saveModal = (
                <CustomModal
                    show={this.state.showUpdateModal}
                    title="Save Changes"
                    onHide={this.onHideUpdateModalHandler}
                    initialContent="Are you sure you want to save changes?"
                    loading={this.props.loadingPhone}
                    error={this.props.errorRequest}
                    onConfirm={this.onConfirmUpdateHandler}
                />
            );
            content = (
                <React.Fragment>
                    {deleteModal}
                    {saveModal}
                    {!this.state.editMode
                        ? <ProductData
                            phone={this.props.selectedPhone}
                            adminOptions={adminOptions} />
                        : <ProductForm
                            title="Edit Phone"
                            phone={this.props.selectedPhone}
                            adminOptions={adminOptions}
                            formChanged={this.onFormChangedHandler}
                        />}
                </React.Fragment>
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
        selectedPhone: state.phones.selectedPhone,
        isAdmin: state.admin.isAdmin,
        loadingPhone: state.admin.loadingPhone,
        errorRequest: state.admin.errorRequest,
        successRequest: state.admin.successRequest
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onDeletePhone: (id) => dispatch(actions.adminDeletePhone(id)),
        onUpdatePhone: (phoneData) => dispatch(actions.adminUpdatePhone(phoneData)),
        resetRequestStatus: () => dispatch(actions.resetAdminRequestStatus()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Product);