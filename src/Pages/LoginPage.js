import React from 'react';
import TopView from "../Components/Top/TopView";
import './loginPage.css'

const LoginPage = () => {
    return (
        <div>
            <TopView></TopView>
        <div className={'card  container'} id = {'loginPage'}>
            <form className={'p-5'}>
                <div className="mb-3">
                    <label htmlFor="exampleInputEmail1" className="form-label text-left d-block font-weight-bold">Email address</label>
                    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp"></input>
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label text-left d-block font-weight-bold">Password</label>
                    <input type="password" className="form-control" id="exampleInputPassword1"></input>
                </div>
                <button type="submit" className="btn btn-primary btn-lg w-50 mt-4">  <a className={'text-light'} href={'/home'}>Submit</a></button>
            </form>
        </div>
        </div>
    );
};

export default LoginPage;