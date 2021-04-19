import React from 'react';
import {useSelector} from "react-redux";

const TopView = () => {
    let isLogged = useSelector(state => state.isLogged)
    return (
        <div className={'sticky-top'}>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div style={{fontSize:'40px'}} className="navbar-brand mb-0 display-1">Project ID</div>

                    {isLogged? <a href={'/'} style={{fontSize:'15px'}} className="navbar-brand mb-0 display-1">Log Out</a>:null}

                </div>
            </nav>
        </div>
    );
};

export default TopView;