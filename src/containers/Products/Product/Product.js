import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';

import CustomModal from '../../../components/CustomModal/CustomModal';
import ProductData from '../../../components/ProductData/ProductData';
import * as actions from '../../../store/actions';

class Product extends Component {
    state = {
        showModal: false,
        editMode: false
    }

    componentDidUpdate() {
        if (this.props.successRequest) this.props.history.push('/products');
    }

    constructor(props) {
        super(props);
        this.phone = props.phones.filter(phone => phone._id === props.selectedPhone)[0];
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

    onEnterEditModeHandle = () => {
        this.setState({ editMode: !this.state.editMode })
    }

    createContent = () => {
        let content = <Redirect to="/products" />;
        if (this.phone) {
            let adminOptions = null;
            if (this.props.isAdmin) {
                adminOptions = (
                    <Row className="row justify-content-center mb-3">
                        <Col >
                            <Button variant="outline-light mr-2" onClick={this.onEnterEditModeHandle}>Edit</Button>
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
                <React.Fragment>
                    {deleteModal}
                    <ProductData phone={this.phone} adminOptions={adminOptions} editMode={this.state.editMode} />
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