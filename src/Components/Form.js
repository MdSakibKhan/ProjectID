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

    const registrationHandler= async ()=>{

        await axios.post('http://localhost:5000/api/insert',
        {
            personalInformation : personalInformation,
            familtyInformation : familtyInformation,
            presentAddress : presentAddress,
            permanentAddress : permanentAddress,
            otherInformation : otherInformation
        }
        )
        .then((response)=>{
            if(response === true) setInsertSuccess(true);
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
                {insertSuccess? <h1>Data Inserted</h1>:null}
                <Regbtn clicked={registrationHandler}></Regbtn>
            </div>
        </div>
    );
}

export default Form;