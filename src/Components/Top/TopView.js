import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {useHistory} from "react-router-dom"
import {loggedOut} from "../../actions";
const TopView = () => {
    let history = useHistory();
    let dispatch = useDispatch();
    let isLogged = useSelector(state => state.isLogged);
    const logOutButtonHandler = ()=>{
        dispatch(loggedOut());
        history.push('/')

    }

    return (
        <div className={'sticky-top'}>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div style={{fontSize:'40px'}} className="navbar-brand mb-0 display-1">Project ID</div>

                    {isLogged? <button onClick={logOutButtonHandler} style={{fontSize:'15px'}} className="btn-light border rounded mb-0">Log Out</button>:null}

                </div>
            </nav>
        </div>
    );
};

export default TopView;