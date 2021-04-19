import React from 'react';
import IDCardButton from "../IDCard/IDCardButton";


const InformationItem = (props) => {
    return (
        <div>
            <div className="card w-100 container">
                <div className="card-body">
                    <h5 className="card-title">{props.firstName} {props.lastName}</h5>
                    <p className="card-text">More Details...</p>
                    <IDCardButton></IDCardButton>
                </div>
            </div>
        </div>
    );
};

export default InformationItem;