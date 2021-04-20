import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom";
import {loggedOut} from "../../actions";
import {Dropdown} from "react-bootstrap";

const TopView = () => {

    let dispatch = useDispatch();
    let isLogged = useSelector(state => state.isLogged);

    let logOutButtonHandler = ()=>{
        dispatch(loggedOut());
    }

    return (
        <div className={'sticky-top'}>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div style={{fontSize:'40px'}} className="navbar-brand mb-0 display-1">Project ID</div>
                    {isLogged?
                    <Dropdown>
                        <Dropdown.Toggle variant="outline-info" id="dropdown-basic">
                            Option
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                            <Dropdown.Item onClick={logOutButtonHandler} href="/">Log Out</Dropdown.Item>
                        </Dropdown.Menu>
                    </Dropdown>:null}
                </div>
            </nav>
        </div>
    );
};

export default TopView;