import React from 'react';
import {useDispatch} from "react-redux";
import {menuClicked} from "../../actions";

import './menu.css'

const Menu = () => {
    let dispatch = useDispatch();
    return (
        <div className={'grid-container p-0'} id = 'menu'>
            <div className={'row p-0'}>
                <button className={'btn btn-success  border'} onClick={(event)=>{dispatch(menuClicked(event.target.value))}} id = 'btn1' value={'form'}>User Creation</button>
            </div>
            <div className={'row p-0'}>
                <button className={'btn btn-success border'} onClick={(event)=>{dispatch(menuClicked(event.target.value))}} id = 'btn2' value={'userList'} id ='btn2'>User List</button>
            </div>
            <div className={'row p-0'}>
                <button className={'btn btn-success border'} onClick={(event)=>{dispatch(menuClicked(event.target.value))}} id = 'btn1' value={'idCard'} id ='btn2'>Generate ID</button>
            </div>
        </div>
    );
};

export default Menu;