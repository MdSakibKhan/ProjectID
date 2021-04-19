import React from 'react';

const TopView = () => {
    return (
        <div className={'sticky-top'}>
            <nav className="navbar navbar-dark bg-dark">
                <div className="container-fluid">
                    <div style={{fontSize:'40px'}} className="navbar-brand mb-0 display-1">Project ID</div>

                    <a href={'/'} style={{fontSize:'15px'}} className="navbar-brand mb-0 display-1">Log Out</a>

                </div>
            </nav>
        </div>
    );
};

export default TopView;