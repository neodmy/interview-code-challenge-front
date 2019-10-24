import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import PhoneCard from '../../components/PhoneCard/PhoneCard';
import Spinner from '../../components/Spinner/Spinner';
import * as actions from '../../store/actions';

class Products extends Component {
    componentDidMount() {
        this.props.onFetchPones();
        this.props.onResetAdminRequestStatus();
    }

    render() {
        let content = <Spinner />
        if (this.props.phones.length !== 0) {
            const phones = this.props.phones;
            content = phones.map(phone => {
                return <PhoneCard
                    key={phone._id}
                    img={process.env.REACT_APP_BACKEND + phone.imageFileName}
                    name={phone.name}
                    description={phone.description}
                    clicked={() => this.props.onSelectPhone(phone)} />
            });
        }

        return (
            <Container className="text-center text-light">
                <Row className="my-5">
                    <Col>
                        <h1 className="display-4">Featured Products</h1>
                    </Col>
                </Row>
                <Row className="row justify-content-center">
                    {content}
                </Row>
            </Container>
        );
    }
}

const mapStateToProps = state => {
    return {
        phones: state.phones.phones,
        loading: state.phones.loading,
        error: state.phones.error,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onResetAdminRequestStatus: () => dispatch(actions.resetAdminRequestStatus()),
        onFetchPones: () => dispatch(actions.fetchPhones()),
        onSelectPhone: (phone) => dispatch(actions.selectPhone(phone))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);