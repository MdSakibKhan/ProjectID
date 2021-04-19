import React from 'react';
import {useDispatch} from "react-redux";
import {decrement, increment, insertFamilyInformation} from "../../actions";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
const FamilyInformation = () => {
    const dispatch = useDispatch()
    const submitHandler=(event)=>{
        let familyinfo = [
            event.target.total_family_members.value,
            event.target.father_count.value,
            event.target.mother_count.value,
            event.target.son_count.value,
            event.target.daughter_count.value,
            event.target.others_count.value,
        ]
        dispatch(insertFamilyInformation(familyinfo))
        event.preventDefault();
        dispatch(increment())
    }
    return (
        <form className="container p-3 mt-4" id = "form_items" onSubmit={submitHandler}>
            <div className="h3">Family Information</div>
            <hr/>

            <input className="form-control d-block mt-3" type="text" name = 'total_family_members' placeholder="Amount of total family members" required></input>
            <input className="form-control d-block mt-3" type="text" name = 'father_count'   placeholder="Amount of father in family" required></input>
            <input className="form-control d-block mt-3" type="text" name = 'mother_count'   placeholder="Amount of mother in family" required></input>
            <input className="form-control d-block mt-3" type="text" name = 'son_count'      placeholder="Amount of son in family" required></input>
            <input className="form-control d-block mt-3" type="text" name = 'daughter_count' placeholder="Amount of daughter in family" required></input>
            <input className="form-control d-block mt-3" type="text" name = 'others_count' placeholder="Amount of Other members in family" required></input>

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

export default FamilyInformation;