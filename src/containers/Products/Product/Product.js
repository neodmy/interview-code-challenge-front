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
        showSaveModal: false,
        editMode: false,
        formChanged: false,
        undoFormChanges: false,
    }

    componentDidUpdate() {
        if (this.props.successRequest) this.props.history.push('/products');
    }

    constructor(props) {
        super(props);
        this.phone = props.phones.filter(phone => phone._id === props.selectedPhone)[0];
    }

    onShowDeleteModalHandler = () => {
        this.setState({ showDeleteModal: true });
    }

    onHideDeleteModalHandler = () => {
        this.setState({ showDeleteModal: false });
    }

    onConfirmDeleteHandler = () => {
        this.props.onDeletePhone(this.phone._id);
    }

    onShowSaveModalHandler = () => {
        this.setState({ showSaveModal: true });
    }

    onHideSaveModalHandler = () => {
        this.setState({ showSaveModal: false });
    }

    onConfirmSaveHandler = () => {

    }

    onEnterEditModeHandler = () => {
        this.setState({ editMode: !this.state.editMode });
    }

    onFormChangedHandler = (status) => {
        console.log(status);
        this.setState({ formChanged: status, undoFormChanges: false });
    }

    onUndoChangesHandler = () => {
        this.setState({ formChanged: false, undoFormChanges: true });
    }

    createContent = () => {
        let content = <Redirect to="/products" />;
        if (this.phone) {
            let adminOptions = null;
            if (this.props.isAdmin) {
                adminOptions = (
                    <Row className="row justify-content-center mb-3">
                        <Col >
                            {this.state.formChanged
                                ? (<React.Fragment>
                                    <Button variant="outline-success mr-2" onClick={this.onShowSaveModalHandler}>Save</Button>
                                    <Button variant="outline-primary mr-2" onClick={this.onUndoChangesHandler}>Undo</Button>
                                </React.Fragment>)
                                : <Button variant="outline-light mr-2" onClick={this.onEnterEditModeHandler}>Edit</Button>}
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
                    initialContent={`Are you sure you want to delete ${this.phone.name}?`}
                    loading={this.props.loadingPhone}
                    error={this.props.errorRequest}
                    onConfirm={() => this.onConfirmDeleteHandler()}
                />
            );
            const saveModal = (
                <CustomModal
                    show={this.state.showSaveModal}
                    title="Save Changes"
                    onHide={this.onHideSaveModalHandler}
                    initialContent="Are you sure you want to save changes?"
                    loading={this.props.loadingPhone}
                    error={this.props.errorRequest}
                    onConfirm={() => this.onConfirmSaveHandler()}
                />
            );
            content = (
                <React.Fragment>
                    {deleteModal}
                    {saveModal}
                    {!this.state.editMode
                        ? <ProductData
                            phone={this.phone}
                            adminOptions={adminOptions} />
                        : <ProductForm
                            phone={this.phone}
                            adminOptions={adminOptions}
                            formChanged={this.onFormChangedHandler}
                            undo={this.state.undoFormChanges} />}
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