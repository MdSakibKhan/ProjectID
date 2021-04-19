import React from 'react';
import TopView from "../Components/Top/TopView";
import './loginPage.css'
import IdCardTemplate from '../Images/IdCardTemplate.jpg'
import {useDispatch} from "react-redux";
import {loggedIn, loggedOut} from "../actions";
const LoginPage = () => {
    let dispatch = useDispatch()
    const loginHangler = (event)=>{
        event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        //console.log(email)
        //console.log(password)
        //Check from API
        if (email == "hrk.sakib@gmail.com" && password == "1234"){
            dispatch(loggedIn())
        }
        else if (email == "admin@gmail.com" && password == "admin"){
            dispatch(loggedIn())
        }
        else dispatch(loggedOut())
    }
    return (
        <div>
            <TopView></TopView>
            <div className={'grid-container'}>
                <div className={'row'}>
                    <div className={'col-sm-4 p-0'}>
                        <div className={'card container'} id = {'loginPage'}>
                            <div className={'display-4 mt-5 font-italic'}> Welcome </div>
                            <form className={'p-5'} onSubmit={loginHangler}>
                                <div className="mb-3">
                                    <label className="form-label text-left d-block font-weight-bold">Email address</label>
                                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name = 'email'></input>
                                </div>
                                <div className="mb-3">
                                    <label className="form-label text-left d-block font-weight-bold">Password</label>
                                    <input type="password" className="form-control" id="exampleInputPassword1" name = 'password'></input>
                                </div>
                                <button type="submit" className="btn btn-primary w-50 mt-4"><a className={'text-light w-100'} href={'/home'}>Log In</a></button>
                            </form>
                        </div>
                    </div>

                    <div className={'col-sm-8 p-0'}>

                        <img className={'w-100'} src={IdCardTemplate} id = {'logoImage'}></img>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;