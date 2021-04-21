import React, {useEffect, useState} from 'react';
import './Homepage.css'
import {useDispatch, useSelector} from "react-redux";
import Spinner from "react-bootstrap/Spinner";
import Form from "../Components/Form";
import InformationList from "../Components/DataList/InformationList";
import {menuSelect} from "../actions";
import {Nav, Navbar} from "react-bootstrap";
const Homepage = () => {
    let menuClicked = useSelector( state => state.menuClicked)
    let dispatch = useDispatch();
    let [animationState, setAnimationState] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setAnimationState(false)
        },1500)
    },[])

    let clickhandler=(event)=>{
        dispatch(menuSelect(event.target.value))
    }

    return (
        <div>

            {animationState? <div id = {'snipDiv'}><Spinner id={'snip'} animation="grow" /></div>:

                <div>
                    <div className="sidebar">

                            <button onClick={clickhandler} className="btns w-100" value={'home'}>Home</button>
                            <button onClick={clickhandler} className="btns w-100" value={'form'}>User Creation</button>
                            <button onClick={clickhandler} className="btns w-100" value={'userList'}>User List</button>
                            <button onClick={clickhandler} className="btns w-100" value={'idCard'}>Generate ID</button>

                    </div>

                    <div className="content">
                        {menuClicked=='form'?<Form></Form>:null}
                        {menuClicked=='home'?<h1>Welcome</h1>:null}
                        {menuClicked=='userList'?<InformationList></InformationList>:null}
                        {menuClicked=='idCard'?<h1>This is Id card page</h1>:null}
                    </div>
                </div>

            }


        </div>
    );
};

export default Homepage;