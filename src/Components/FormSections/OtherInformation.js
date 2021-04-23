import React, {useEffect, useState} from 'react';
import {useDispatch} from "react-redux";
import {decrement, increment, insertOtherInformation} from "../../actions";
import axios from "axios";
import {BsFillCaretLeftFill, BsCheck } from "react-icons/bs";
const OtherInformation = () => {

    const dispatch = useDispatch()
    const [religion, setReligion] = useState([])
    const [selectedReligion, setSelectedReligion] = useState([])
    const [education, setEducation] = useState([])
    const [selectedEducation, setSelectedEducation] = useState([])
    const [bloodGroup, setBloodGroup] = useState([])
    const [selectedBloodGroup, setSelectedBloodGroup] = useState([])
    const [maritalStatus, setMaritalStaus] = useState([])
    const [selectedMaritalStatus, setSelectedMaritalStatus] = useState([])
    const [professonList, setProfessionList] = useState([])
    const [selectedProfession, setSelectedProfession] = useState([])
    const [subProfessonList, setSubProfessionList] = useState([])
    const [selectedSubProfession, setSelectedSubProfession] = useState([])

    const [warningMsg, setWarningMsg] = useState("");

    const [style, setstyle] = useState({
        fontSize: 25,
        color: 'green',
        fontFamily:'fantasy'
    })

    useEffect(async ()=>{
        await axios.get('http://localhost:5000/api/getReligion')
            .then(response=>{
                setReligion(response.data)
            })
    },[])

    useEffect(async ()=>{
        await axios.get('http://localhost:5000/api/getEducation')
            .then(response=>{
                setEducation(response.data)
            })
    },[])

    useEffect(async ()=>{
        await axios.get('http://localhost:5000/api/getMaritalStaus')
            .then(response=>{
                setMaritalStaus(response.data)
            })
    },[])

    useEffect(async ()=>{
        await axios.get('http://localhost:5000/api/getBloodGroup')
            .then(response=>{
                setBloodGroup(response.data)
            })
    },[])

    useEffect(async ()=>{
        await axios.get('http://localhost:5000/api/getProfessionList')
            .then(response=>{
                setProfessionList(response.data)
            })
    },[])
    useEffect(async ()=>{
        let professionId;
        professonList.map(item=>{if(item.name==selectedProfession) professionId=item.id})
        await axios.get('http://localhost:5000/api/getSubProfessionList?professionId='+professionId)
            .then(response=>{
                setSubProfessionList(response.data)
            })
    },[selectedProfession])


    const submitHandler=(event)=>{
        if (selectedReligion.length!=0 && selectedEducation.length!=0 && selectedMaritalStatus.length!=0 && selectedBloodGroup.length!=0 && selectedProfession.length!=0){

            setWarningMsg("YOU MAY PROCEED");

            event.preventDefault();
            let religionId;
            let educationId;
            let maritalStatusId;
            let bloodGroupId;
            let professionId;
            let subProfessionId;

            religion.map(item=>{ if(item.name == selectedReligion) religionId=item.id })
            education.map(item=>{ if(item.name == selectedEducation) educationId=item.id })
            maritalStatus.map(item=>{ if(item.name == selectedMaritalStatus) maritalStatusId=item.id })
            bloodGroup.map(item=>{ if(item.name == selectedBloodGroup) bloodGroupId=item.id })
            professonList.map(item=>{if(item.name ==  selectedProfession) professionId = item.id})
            subProfessonList.map(item=>{if(item.name ==  selectedSubProfession) subProfessionId = item.id})


            let Othersinfo = [
                religionId,
                educationId,
                maritalStatusId,
                bloodGroupId,
                professionId,
                subProfessionId,
                event.target.nationality.value,
                event.target.tinNumber.value,
                event.target.contactNumber.value,
                event.target.annualEarnings.value
            ]
            dispatch(insertOtherInformation(Othersinfo))
            dispatch(increment())
        }
    }


    return (
        <form className="container p-3 mt-4" onSubmit={submitHandler} id = "form_items">
            <div className="h3">Other Information</div>
            <hr/>

            <div className="grid-container mt-3">
                <div className="row">
                    <div className="col-sm-6">
                        <select className="form-control form-control-sm mb-3" name = "religion" onChange={(e)=> setSelectedReligion(e.target.value)} required>
                            <option value="" disabled selected hidden>Select Religion</option>
                            {religion.map(item=>{
                                return <option>{item.name}</option>
                            })}
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <select className="form-control form-control-sm mb-3" name = "education" onChange={(e)=> setSelectedEducation(e.target.value)} required>
                            <option value="" disabled selected hidden>Select Education Level</option>
                            {education.map(item=>{
                                return <option>{item.name}</option>
                            })}
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <select className="form-control form-control-sm mb-3" name = "marriage" onChange={(e)=> setSelectedMaritalStatus(e.target.value)}  required>
                            <option value="" disabled selected hidden>Select Marital Status</option>
                            {maritalStatus.map(item=>{
                                return <option>{item.name}</option>
                            })}
                            <option>Others</option>
                        </select>
                    </div>
                    <div className="col-sm-6">
                        <select className="form-control form-control-sm mb-3" name = "blood_group" onChange={(e)=> setSelectedBloodGroup(e.target.value)}  required>
                            <option value="" disabled selected hidden>Select Blood Group</option>
                            {bloodGroup.map(item=>{
                                return <option>{item.name}</option>
                            })}
                            <option>Others</option>
                        </select>
                        </div>
                    </div>
                <div className={'row'}>
                    <div className={'col-sm-6'}>
                        <select className="form-control form-control-sm mb-3" name = "profession" onChange={(e)=>{setSelectedProfession(e.target.value)}} required>
                            <option value="" disabled selected hidden>Select Profession</option>
                            {professonList.map(item=>{
                                return <option>{item.name} | {item.subname}</option>
                            })}
                            <option>Others</option>
                        </select>
                    </div>

                    <div className={'col-sm-6'}>
                        <select className="form-control form-control-sm mb-3" name = "subProfession" onChange={(e)=>{setSelectedSubProfession(e.target.value)}} required>
                            <option value="" disabled selected hidden>Select Sub Profession</option>
                            {subProfessonList.map(item=>{
                                return <option>{item.name} | {item.subname}</option>
                            })}
                            <option>Others</option>
                        </select>
                    </div>
                </div>
            </div>


            <input className="form-control form-control-sm d-block mb-3" type="text" name = 'nationality' placeholder=" Enter Nationality"  title={'Letters Only'} pattern="[A-Za-z\s]+" required></input>
            <input className="form-control form-control-sm d-block mb-3" type="text" name = 'tinNumber' placeholder=" Enter TIN / Tax Identification Number" title={'Number Only'} pattern="[0-9]+" ></input>
            <input className="form-control form-control-sm d-block mb-3" type="text" name = 'contactNumber' placeholder=" Enter contact number" title={'Number Only'} pattern="[+()0-9\s]+" required></input>
            <input className="form-control form-control-sm d-block mb-3" type="text" name = 'annualEarnings' placeholder=" Enter Your Total earning" title={'Number Only'} pattern="[0-9]+" required></input>

            <div className={'mt-5'} style={style}>{warningMsg}</div>

            <div className={'row'}>
                <div className={'col-sm-6'}>
                    <button type={"button"} className={'btn-dark btn-lg w-100 btn rounded mt-5'} onClick={()=>{dispatch(decrement())}}><BsFillCaretLeftFill /></button>
                </div>
                <div className={'col-sm-6'}>
                    <button className='btn-dark btn-lg w-100 btn rounded mt-5'><BsCheck/></button>
                </div>
            </div>
        </form>
    );
};

export default OtherInformation;