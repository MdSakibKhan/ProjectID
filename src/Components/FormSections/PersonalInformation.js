import React, {useState,useEffect} from 'react';
import {useDispatch} from "react-redux";
import {decrement, increment, insertPersonalInformation} from "../../actions";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
import axios from 'axios';

const PersonalInformation = () => {

    const [genderList, setGenderList] = useState([])

    const dispatch = useDispatch()

    useEffect(async () => {
        await axios.get('http://localhost:5000/api/getGender')
              .then(response=>{
                  let gotGender = [...response.data]
                  setGenderList(gotGender)
              })
      },[]);

    const submitHandler=(event)=>{
        let personalinfo = [
            event.target.firstName.value,
            event.target.lastName.value,
            event.target.gender.value,
            event.target.dateOfBirth.value,
            event.target.fathersFirstName.value,
            event.target.fathersLastName.value,
            event.target.mothersFirstName.value,
            event.target.mothersLastName.value,
            event.target.spouseFirstName.value,
            event.target.spouseLastName.value,
            event.target.nationalId.value,
            event.target.identificationMark.value
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
                        <input className="form-control form-control-sm d-block mt-3" type="text" name = 'firstName' placeholder="First Name" title={'Letters Only'} pattern="[A-Za-z\s]+" maxLength={100}   required></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control form-control-sm  d-block mt-3 " type="text" name = 'lastName' placeholder="Last Name" title={'Letters Only'} pattern="[A-Za-z\s]+" maxLength={100} required></input>
                    </div>
                </div>
            </div>


            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <select className="form-control mt-3 form-control-sm" name="gender">
                            <option value="" disabled selected hidden>Select Gender</option>
                            {genderList.map(item=>{
                                <option>{item.name}</option>
                            })}
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="col-sm-4">
                        <input placeholder={'Date Of Birth'} className="form-control form-control-sm d-block mt-3" type="text" name = 'dateOfBirth' onFocus={(e)=>{e.target.type= 'date'}} required></input>
                    </div>
                </div>
            </div>

            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'fathersFirstName'  placeholder= "Fathers First Name " title={'Letters Only'} pattern="[A-Za-z\s]+"  required></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'fathersLastName'  placeholder= "Fathers Last Name " title={'Letters Only'} pattern="[A-Za-z\s]+" required ></input>
                    </div>
                </div>
            </div>

            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'mothersFirstName'  placeholder= "Mothers First Name " title={'Letters Only'} pattern="[A-Za-z\s]+" required ></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'mothersLastName'  placeholder= "Mothers Last Name " title={'Letters Only'} pattern="[A-Za-z\s]+" required ></input>
                    </div>
                </div>
            </div>

            <div className="grid-container">
                <div className="row">
                    <div className="col-sm-8">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'spouseFirstName'  placeholder= "Spouse First Name " title={'Letters Only'} pattern="[A-Za-z\s]+" required ></input>
                    </div>
                    <div className="col-sm-4">
                        <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'spouseLastName'  placeholder= "Spouse Last Name " title={'Letters Only'} pattern="[A-Za-z\s]+" required ></input>
                    </div>
                </div>
            </div>

            <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'nationalId'   placeholder=  "National ID " title={'Number Only'} pattern="[0-9]+"  required ></input>
            <input className="form-control form-control-sm  d-block mt-3" type="text" name = 'identificationMark' placeholder="Identification Mark" title={'Letters Only'} pattern="[A-Za-z\s]+" required></input>

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