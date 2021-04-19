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
                        <input className="form-control d-block" type="text" name = 'first_name' placeholder="First Name" title={'Letters Only'} pattern="[A-Za-z]+" maxLength={100}   required></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control  d-block " type="text" name = 'last_name' placeholder="Last Name" title={'Letters Only'} pattern="[A-Za-z]+" maxLength={100} required></input>
                    </div>
                </div>
            </div>

            <div className="h6 text-left ml-1 d-flex pt-2 mt-3 align-items-center"> Choose date of Birth : </div>
            <input className="form-control  d-block " type="date" name = 'date_of_birth' required></input>


            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <input className="form-control  d-block mt-3" type="text" name = 'fathers_name'  placeholder= "Fathers First Name " title={'Letters Only'} pattern="[A-Za-z]+" ></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control  d-block mt-3" type="text" name = 'fathers_last_name'  placeholder= "Fathers Last Name " title={'Letters Only'} pattern="[A-Za-z]+"  ></input>
                    </div>
                </div>
            </div>

            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <input className="form-control  d-block mt-3" type="text" name = 'mothers_name'  placeholder= "Mothers First Name " title={'Letters Only'} pattern="[A-Za-z]+"  ></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control  d-block mt-3" type="text" name = 'mothers_last_name'  placeholder= "Mothers Last Name " title={'Letters Only'} pattern="[A-Za-z]+"  ></input>
                    </div>
                </div>
            </div>

            <input className="form-control  d-block mt-3" type="text" name = 'national_id'   placeholder=  "National ID " title={'Number Only'} pattern="[0-9]+"  required ></input>
            <input className="form-control  d-block mt-3" type="text" name = 'identification_mark' placeholder="Identification Mark" title={'Letters Only'} pattern="[A-Za-z]+" required></input>

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