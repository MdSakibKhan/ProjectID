import React from 'react';
import './TopView.css'
import {useDispatch, useSelector} from "react-redux";
import {Nav, Navbar, NavDropdown} from "react-bootstrap"
import {
    initialPage,
    insertFamilyInformation, insertOtherInformation,
    insertPermanentAddress,
    insertPersonalInformation,
    insertPresentAddress,
    loggedOut
} from "../../actions";
import {Dropdown} from "react-bootstrap";

const TopView = () => {

    let dispatch = useDispatch();
    let isLogged = useSelector(state => state.isLogged);

    let logOutButtonHandler = ()=>{
        dispatch(insertPersonalInformation([]));
        dispatch(insertFamilyInformation([]));
        dispatch(insertPresentAddress([]));
        dispatch(insertPermanentAddress([]));
        dispatch(insertOtherInformation([]));
        dispatch(initialPage());
        dispatch(loggedOut());
    }

    return (
        <div className={'sticky-top'} id = "top">
        <Navbar className={'p-3'} expand="lg">
            <Navbar.Brand href="#home" className={'font-weight-bold'}>IDENTITY CARD MANAGEMENT</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
                    <Nav.Link href="#home">Home</Nav.Link>
                    <Nav.Link href="#link">Others</Nav.Link>
                </Nav>
                {isLogged?
                    <Nav.Link onClick={logOutButtonHandler} href="/" id ="logoutbtn">Log Out</Nav.Link>
                    :null}

            </Navbar.Collapse>
        </Navbar>
        </div>

    );
};

export default TopView;