import React from 'react';
import Navbar from 'react-bootstrap/Navbar';

import { NavLink } from 'react-router-dom';
import Nav from 'react-bootstrap/Nav';

import styles from './Toolbar.module.css';
import logo from '../../images/logo2.png';

const toolbar = (props) => {
    return (
        <Navbar expand="md" bg="light" className={styles}>
            <Navbar.Toggle aria-controls="navbar" />
            <Navbar.Collapse id="navbar" className="justify-content-center mr-5">
                <Navbar.Brand className="text-dark">
                    <img alt="" src={logo} width="40" height="40" />{" "}Phones Store</Navbar.Brand>
                <Nav.Link as={NavLink} to='/' exact activeClassName="nav-link text-dark">Home</Nav.Link>
                <Nav.Link as={NavLink} to='/products' activeClassName="nav-link text-dark">Products</Nav.Link>
                <Nav.Link as={NavLink} to='/admin' activeClassName="nav-link text-dark">Admin</Nav.Link>
            </Navbar.Collapse>
        </Navbar>
    );
}

export default toolbar;