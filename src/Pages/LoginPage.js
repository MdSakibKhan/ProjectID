import React from 'react';
import IdCardTemplate from '../Images/IdCardTemplate.jpg'
import {useDispatch} from "react-redux";
import {loggedIn, loggedOut} from "../actions";
import {useHistory} from "react-router-dom";
import './loginPage.css'

const LoginPage = () => {
    let dispatch = useDispatch()
    const history = useHistory()
    const loginHangler = (event)=>{
        //event.preventDefault();
        let email = event.target.email.value;
        let password = event.target.password.value;
        //console.log(email)
        //console.log(password)
        //Check from API
        if (email == "hrk.sakib@gmail.com" && password == "1234"){
            dispatch(loggedIn())
            history.push("/home")

        }
        else if (email == "admin@gmail.com" && password == "admin"){
            dispatch(loggedIn())
            history.push("/home")
        }
        else{
            dispatch(loggedOut())
            history.push("/")
        }
    }
    return (
        <div>
            <div className={'grid-container'}>
                <div className={'row'} id = 'loginPageRow'>
                    <div className={'col-sm-4 p-0'} id = 'loginPageLeft'>
                        <div className={'card border container'} id = {'loginForm'}>
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
                                <button type="submit" className="btn btn-primary w-50 mt-4">Log In</button>
                            </form>
                        </div>
                    </div>

                    <div className={'col-sm-8 p-0'} id={'loginPageRight'} >

                        <img className={'w-100'} src={IdCardTemplate} id = {'logoImage'}></img>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;