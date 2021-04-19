import React, {useEffect, useState} from 'react';
import Form from "../Components/Form";
import Menu from "../Components/Menu/Menu";
import TopView from "../Components/Top/TopView";
import {useSelector} from "react-redux";
import InformationList from "../Components/DataList/InformationList";
import './LoggedInPage.css'
import Spinner from 'react-bootstrap/Spinner'
const LoggedInPage=()=>{

    let [animationState, setAnimationState] = useState(true)

    useEffect(()=>{
        setTimeout(()=>{
            setAnimationState(false)
        },1500)
    },[])

    let menuClicked = useSelector( state => state.menuClicked)
    return (
    <div>
        {animationState? <Spinner id={'snip'} animation="grow" />:
        <div className={'grid-container p-0'}>
            <div className={'row'} id ='loggedInRow'>
                <div className={'col-sm-2'} id = 'loggedInLeft'>
                    <Menu></Menu>
                </div>
                <div className={'col-sm-10'} id = 'loggedInRight'>
                    {menuClicked=='form'?<Form></Form>:null}
                    {menuClicked=='home'?<h1>Welcome</h1>:null}
                    {menuClicked=='userList'?<InformationList></InformationList>:null}
                    {menuClicked=='idCard'?<h1>This is Id card page</h1>:null}
                </div>
            </div>
        </div>}
    </div>
  );
}

export default LoggedInPage;