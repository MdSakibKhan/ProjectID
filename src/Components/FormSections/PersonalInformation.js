import React, {useState} from 'react';
import {useDispatch} from "react-redux";
import {decrement, increment, insertPersonalInformation} from "../../actions";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";

const PersonalInformation = () => {
    const dispatch = useDispatch()

    const submitHandler=(event)=>{
        let personalinfo = [
            event.target.first_name.value,
            event.target.last_name.value,
            event.target.date_of_birth.value,
            event.target.fathers_name.value,
            event.target.mothers_name.value,
            event.target.national_id.value,
            event.target.identification_mark.value
        ]
        dispatch(insertPersonalInformation(personalinfo))
        event.preventDefault();
        dispatch(increment())
    }
    return (
        <form className="container p-3 mt-4" id = "form_items" onSubmit={submitHandler}>

            <div className="h3 mb-3">Personal Infomation</div>
            <hr/>
            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <input className="form-control form-control-sm d-block mt-3" type="text" name = 'first_name' placeholder="First Name" title={'Letters Only'} pattern="[A-Za-z\s]+" maxLength={100}   required></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control form-control-sm  d-block mt-3 " type="text" name = 'last_name' placeholder="Last Name" title={'Letters Only'} pattern="[A-Za-z\s]+" maxLength={100} required></input>
                    </div>
                </div>
            </div>


            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <select className="form-control mt-3 form-control-sm">
                            <option value="" disabled selected hidden>Select Gender</option>
                            <option>Male</option>
                            <option>Female</option>
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <input placeholder={'Date Of Birth'} className="form-control form-control-sm d-block mt-3" type="text" name = 'date_of_birth' onFocus={(e)=>{e.target.type= 'date'}} required></input>
                    </div>
                </div>
            </div>

            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'fathers_name'  placeholder= "Fathers First Name " title={'Letters Only'} pattern="[A-Za-z\s]+"  required></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'fathers_last_name'  placeholder= "Fathers Last Name " title={'Letters Only'} pattern="[A-Za-z\s]+" required ></input>
                    </div>
                </div>
            </div>

            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'mothers_name'  placeholder= "Mothers First Name " title={'Letters Only'} pattern="[A-Za-z\s]+" required ></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'mothers_last_name'  placeholder= "Mothers Last Name " title={'Letters Only'} pattern="[A-Za-z\s]+" required ></input>
                    </div>
                </div>
            </div>

            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'mothers_name'  placeholder= "Spouse First Name " title={'Letters Only'} pattern="[A-Za-z\s]+" required ></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'mothers_last_name'  placeholder= "Spouse Last Name " title={'Letters Only'} pattern="[A-Za-z\s]+" required ></input>
                    </div>
                </div>
            </div>

            <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'national_id'   placeholder=  "National ID " title={'Number Only'} pattern="[0-9]+"  required ></input>
            <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'identification_mark' placeholder="Identification Mark" title={'Letters Only'} pattern="[A-Za-z\s]+" required></input>

            <div className={'row'}>
                <div className={'col-sm-6'}>
                    <button type={"button"} className={'btn-dark btn-lg w-100 btn rounded mt-5'} onClick={()=>{dispatch(decrement())}}><BsFillCaretLeftFill /></button>
                </div>
                <div className={'col-sm-6'}>
                    <button className='btn-dark btn-lg w-100 btn rounded mt-5'><BsFillCaretRightFill /></button>
                </div>
            </div>

        </form>
    );
};

export default PersonalInformation;