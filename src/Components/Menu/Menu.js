import React from 'react';
import {useDispatch} from "react-redux";
import {menuClicked} from "../../actions";

import './menu.css'

const Menu = () => {
    let dispatch = useDispatch();
    return (
        <div className={'grid-container p-0'} id = 'menu'>
            <div className={'row'}>
                <button className={'btn btn-success w-100 border'} onClick={(event)=>{dispatch(menuClicked(event.target.value))}} id = 'btn1' value={'form'}>User Creation</button>
            </div>
            <div className={'row'}>
                <button className={'btn btn-success border w-100'} onClick={(event)=>{dispatch(menuClicked(event.target.value))}} id = 'btn2' value={'userList'} id ='btn2'>User List</button>
            </div>
            <div className={'row'}>
                <button className={'btn btn-success border w-100'} onClick={(event)=>{dispatch(menuClicked(event.target.value))}} id = 'btn1' value={'idCard'} id ='btn2'>Generate ID</button>
            </div>
        </div>
    );
};

export default Menu;