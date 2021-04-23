import React from 'react';
import {useDispatch, useSelector} from "react-redux";
import {canNotRegister, canRegister} from "../../actions";

const DataList = () => {
    const personalInformation = useSelector(state => state.personalInformation)
    const familtyInformation = useSelector(state => state.familyInformation)
    const presentAddress = useSelector(state => state.presentAddress)
    const permanentAddress = useSelector(state => state.permanentAddress)
    const otherInformation = useSelector(state=> state.otherInformation)

    let dispatch = useDispatch()

    if (personalInformation.length===7 && familtyInformation.length===6 && presentAddress.length===4 && permanentAddress.length===4 && otherInformation.length===9){
        dispatch(canRegister())
    }
    else dispatch(canNotRegister())



    return (
        <div>
            <hr/>
            <div className={'font-weight-bold text-info'}>First Name :</div> {personalInformation[0]}<hr/>
            <div className={'font-weight-bold text-info'}>Last Name :</div> {personalInformation[1]}<hr/>
            <div className={'font-weight-bold text-info'}>Gender :</div> {personalInformation[2]}<hr/>
            <div className={'font-weight-bold text-info'}>Date Of Birth :</div> {personalInformation[3]}<hr/>
            <div className={'font-weight-bold text-info'}>Father's First Name :</div> {personalInformation[4]}<hr/>
            <div className={'font-weight-bold text-info'}>Father's Last Name :</div> {personalInformation[5]}<hr/>
            <div className={'font-weight-bold text-info'}>Mother's First Name :</div> {personalInformation[6]}<hr/>
            <div className={'font-weight-bold text-info'}>Mother's Last Name :</div> {personalInformation[7]}<hr/>
            <div className={'font-weight-bold text-info'}>Spouse First Name :</div> {personalInformation[8]}<hr/>
            <div className={'font-weight-bold text-info'}>Spouse Last Name :</div> {personalInformation[9]}<hr/>
            <div className={'font-weight-bold text-info'}>National ID :</div> {personalInformation[10]}<hr/>
            <div className={'font-weight-bold text-info'}>Identification Mark :</div> {personalInformation[11]}<hr/>
            <div className={'font-weight-bold text-info'}>Total Family Members :</div> {familtyInformation[0]}<hr/>
            <div className={'font-weight-bold text-info'}>Total Father Amount :</div> {familtyInformation[1]}<hr/>
            <div className={'font-weight-bold text-info'}>Total Mother Amount :</div> {familtyInformation[2]}<hr/>
            <div className={'font-weight-bold text-info'}>Total Son Amount :</div> {familtyInformation[3]}<hr/>
            <div className={'font-weight-bold text-info'}>Total Daughter Amount :</div> {familtyInformation[4]}<hr/>
            <div className={'font-weight-bold text-info'}>Total Other Members Amount :</div> {familtyInformation[5]}<hr/>
            <div className={'font-weight-bold text-info'}>Present Country Code :</div> {presentAddress[0]}<hr/>
            <div className={'font-weight-bold text-info'}>Present State Code :</div> {presentAddress[1]}<hr/>
            <div className={'font-weight-bold text-info'}>Present City Code :</div> {presentAddress[2]}<hr/>
            <div className={'font-weight-bold text-info'}>Present Postal Code :</div> {presentAddress[3]}<hr/>
            <div className={'font-weight-bold text-info'}>Permanent Country Code :</div> {permanentAddress[0]}<hr/>
            <div className={'font-weight-bold text-info'}>Permanent State Code :</div> {permanentAddress[1]}<hr/>
            <div className={'font-weight-bold text-info '}>Permanent City Code :</div> {permanentAddress[2]}<hr/>
            <div className={'font-weight-bold text-info'}>Permanent Postal Code :</div> {permanentAddress[3]}<hr/>
            <div className={'font-weight-bold text-info'}>Religion Code:</div> {otherInformation[0]}<hr/>
            <div className={'font-weight-bold text-info'}>Education Code :</div> {otherInformation[1]}<hr/>
            <div className={'font-weight-bold text-info'}>Marital Status Code :</div> {otherInformation[2]}<hr/>
            <div className={'font-weight-bold text-info'}>Blood Group Code :</div> {otherInformation[3]}<hr/>
            <div className={'font-weight-bold text-info'}>Profession Code :</div> {otherInformation[4]}<hr/>
            <div className={'font-weight-bold text-info'}>Nationality :</div> {otherInformation[5]}<hr/>
            <div className={'font-weight-bold text-info'}>TIN Number :</div> {otherInformation[6]}<hr/>
            <div className={'font-weight-bold text-info'}>Contact Number :</div> {otherInformation[7]}<hr/>
            <div className={'font-weight-bold text-info'}>Annul Earning :</div> {otherInformation[8]}<hr/>
        </div>
    );
};

export default DataList;