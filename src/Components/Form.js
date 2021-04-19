import React, {useState} from 'react';
import PersonalInformation from "./FormSections/PersonalInformation";
import FamilyInformation from "./FormSections/FamilyInformation";
import PermanentAddress from "./FormSections/PermanentAddress";
import PresentAddress from "./FormSections/PresentAddress";
import OtherInformation from "./FormSections/OtherInformation";
import {useDispatch, useSelector} from "react-redux";
import axios from "axios";
import Regbtn from "./Buttons/Regbtn";



const Form = () => {
    const dispatch = useDispatch()
    const pagenumber = useSelector(state => state.pagecount)
    const personalInformation = useSelector(state => state.personalInformation)
    const familtyInformation = useSelector(state => state.familyInformation)
    const presentAddress = useSelector(state => state.presentAddress)
    const permanentAddress = useSelector(state => state.permanentAddress)
    const otherInformation = useSelector(state=> state.otherInformation)

    const [insertSuccess,setInsertSuccess] = useState(false)

    const registrationHandler=()=>{
        console.log(otherInformation[3]);
        axios.post('http://localhost:5000/api/insert', {
            //Personal Information
            firstName : personalInformation[0],
            lastName : personalInformation[1],
            dob : personalInformation[2],
            fathersName : personalInformation[3],
            mothersName : personalInformation[4],
            nationalId : personalInformation[5],
            identificationMark : personalInformation[6],

            //family Information
            totalFamilyMember : familtyInformation[0],
            fatherCount : familtyInformation[1],
            motherCount : familtyInformation[2],
            sonCount : familtyInformation[3],
            daughterCount : familtyInformation[4],
            otherscount : familtyInformation[5],

            //Present Address
            presentCountry_id : presentAddress[0],
            presentState_id : presentAddress[1],
            presentCity_id : presentAddress[2],
            presentPostalCode : presentAddress[3],

            //Permanent Address
            permanentCountry_id : permanentAddress[0],
            permanentState_id : permanentAddress[1],
            permanentCity_id : permanentAddress[2],
            permanentPostalCode : permanentAddress[3],

            //Others information
            religion_id : otherInformation[0],
            education_id : otherInformation[1],
            maritalStatus_id : otherInformation[2],
            bloodGroup_id : otherInformation[3],
            profession_id: otherInformation[4],
            nationality  : otherInformation[5],
            tinNumber : otherInformation[6],
            contactNumber : otherInformation[7],
            annualEarnings : otherInformation[8]

        }).then((response)=>{
            setInsertSuccess(true);
            alert('Data Inserted')
        })
    }

    return (
        <div>
            <div className={"grid-container"}>
                <div className={'row mb-5'}>
                    <div className={'col-sm-12'}>
                        {pagenumber==1? <PersonalInformation />:null}
                        {pagenumber==2? <FamilyInformation />:null}
                        {pagenumber==3? <PresentAddress />:null}
                        {pagenumber==4? <PermanentAddress />:null}
                        {pagenumber==5? <OtherInformation />:null}
                    </div>
                </div>
                <Regbtn clicked={registrationHandler}></Regbtn>
            </div>
        </div>
    );
}

export default Form;