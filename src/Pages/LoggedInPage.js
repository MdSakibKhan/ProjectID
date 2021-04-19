import React from 'react';
import Form from "../Components/Form";
import Menu from "../Components/Menu/Menu";
import TopView from "../Components/Top/TopView";
import {useSelector} from "react-redux";
import InformationList from "../Components/DataList/InformationList";

const LoggedInPage=()=>{
    let menuClicked = useSelector( state => state.menuClicked)
    return (
    <div>
        <TopView></TopView>
        <div className={'grid-container p-0'}>
            <div className={'row p-0'}>
                <div className={'col-sm-2 p-0'}>
                    <Menu></Menu>
                </div>
                <div className={'col-sm-10'}>
                    {menuClicked=='form'?<Form></Form>:null}
                    {menuClicked=='home'?<h1>Welcome</h1>:null}
                    {menuClicked=='userList'?<InformationList></InformationList>:null}
                    {menuClicked=='idCard'?<h1>This is Id card page</h1>:null}
                </div>
            </div>
        </div>
    </div>
  );
}

export default LoggedInPage;