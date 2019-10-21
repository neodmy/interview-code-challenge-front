import React, { Component } from 'react';
import { connect } from 'react-redux';

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';

import PhoneCard from '../../components/PhoneCard/PhoneCard';
import Spinner from '../../components/Spinner/Spinner';
import styles from './Products.module.css';
import * as actions from '../../store/actions';

import phone_generic from '../../images/phone_generic.png';
import galaxy_s7 from '../../images/galaxy_s7.png';

class Products extends Component {

    componentDidMount() {
        this.props.onFetchPones();
    }

    render() {
        let content = <Spinner />
        if (this.props.phones.lenght !== 0) {
            const phones = this.props.phones;
            content = phones.map(phone => {
                return <PhoneCard key={phone._id} img={galaxy_s7} name={phone.name} description={phone.description} />
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
        onFetchPones: () => dispatch(actions.fetchPhones()),
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Products);