import React, { Component } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { connect } from 'react-redux';

import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import * as actions from '../../store/actions';

import styles from './Toolbar.module.css';
import logo from '../../images/logo2.png';

class Toolbar extends Component {
    render() {
        return (
            <Navbar expand="md" bg="light" className={styles}>
                <Navbar.Toggle aria-controls="navbar" />
                <Navbar.Collapse id="navbar" className="justify-content-center mr-5">
                    <Navbar.Brand className="text-dark">
                        <img alt="" src={logo} width="40" height="40" />{" "}Phones Store</Navbar.Brand>
                    <Nav.Link as={NavLink} to='/' exact activeClassName="nav-link text-dark">Home</Nav.Link>
                    <Nav.Link as={NavLink} to='/products' activeClassName="nav-link text-dark">Products</Nav.Link>
                    <button type="button"
                        className={!this.props.isAdmin ? styles.button_inactive : styles.button_active}
                        onClick={this.props.onSwitchAdmin}>Admin</button>
                </Navbar.Collapse>
            </Navbar >
        );
    }
}


const mapStateToProps = state => {
    return {
        isAdmin: state.admin.isAdmin,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        onSwitchAdmin: () => dispatch(actions.switchAdmin()),
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(Toolbar);