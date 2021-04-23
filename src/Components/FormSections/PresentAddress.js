import React,{useState,useEffect} from 'react';
import {useDispatch} from "react-redux";
import axios from "axios";
import {decrement, increment, insertPersonalInformation, insertPresentAddress} from "../../actions";
import { BsFillCaretRightFill, BsFillCaretLeftFill } from "react-icons/bs";
const PresentAddress = () => {

    const dispatch = useDispatch()

    const [selectedCountry, setSelectedCountry] = useState('')
    const [selectedState, setSelectedState] = useState('')
    const [selectedCity, setSelectedCity] = useState('')
    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);

    useEffect(async () => {
      await axios.get('http://localhost:5000/api/getCountries')
            .then(response=>{
                let gotCountries = [...response.data]
                setCountries(gotCountries)
            })
    },[]);

    useEffect(async () => {
        let country_id;
        countries.map(item=>{if(item.name==selectedCountry) country_id=item.id})
        console.log(country_id)
        await axios.get( "http://localhost:5000/api/getStates?selectedCountryId="+country_id)
            .then(response=>{
                let gotStates = [...response.data];
                setStates(gotStates);
            })
    },[selectedCountry])


    useEffect(async () => {
        let state_id;
        states.map(item=>{ if(item.name==selectedState) state_id=item.id })
        await axios.get("http://localhost:5000/api/getCities?selectedStateId="+state_id)
            .then(response=>{
                let gotCities = [...response.data];
                setCities(gotCities);
            })
    },[selectedState])


    const submitHandler=(event)=>{

        event.preventDefault();
        let country_id;
        let state_id;
        let city_id;
        countries.map(item => {
            if (item.name == selectedCountry) country_id = item.id
        })
        states.map(item => {
            if (item.name == selectedState) state_id = item.id;
        })
        cities.map(item => {
            if (item.name == selectedCity) city_id = item.id
        })

        let presentaddressinfo = [
            country_id,
            state_id,
            city_id,
            event.target.present_postal_code.value,
        ]
        dispatch(insertPresentAddress(presentaddressinfo))
        dispatch(increment())
        
    }

    return (
        <form className=" container p-3 mt-4" id = "form_items" onSubmit={submitHandler}>
            <div className="h3">Present Address</div>
            <hr/>
            {selectedCountry.substring(0,  selectedCountry.indexOf(".") )}
            <select className="form-control form-control-sm mb-3" name = 'present_country' onChange={(e)=>{setSelectedCountry(e.target.value)}} required>
                <option value="" disabled selected hidden>Select Country</option>
                {countries.map(country=>{
                    return <option>{country.name}</option>
                })}
                <option>Others</option>
            </select>

            <select className="form-control form-control-sm mb-3" name = 'present_state' onChange={(e)=>{setSelectedState(e.target.value)}} id='cn' required>
                <option value="" disabled selected hidden>Select State</option>
                {states.map(stateItem=>{
                    return <option>{stateItem.name}</option>
                })}
                <option>Others</option>
            </select>

            <select className="form-control form-control-sm mb-3" name = 'present_city'  onChange={(e)=>{setSelectedCity(e.target.value)}} id='cn' required>
                <option value="" disabled selected hidden>Select City</option>
                {cities.map(cityItem=>{
                    return <option>{cityItem.name}</option>
                })}
                <option>Others</option>
            </select>

            <input className="form-control form-control-sm d-block mt-3" type="text" name = 'present_postal_code' placeholder="Postal code" title={'Number Only'} pattern="[0-9]+" required></input>

            <div className={'row'}>
                <div className={'col-sm-6'}>
                    <button type={"button"} className={'btn-dark btn-lg w-100 btn rounded mt-5'} onClick={()=>{dispatch(decrement())}}><BsFillCaretLeftFill /></button>
                </div>
                <div className={'col-sm-6'}>
                    <button className='btn-dark btn-lg w-100 btn rounded mt-5'><BsFillCaretRightFill /> </button>
                </div>
            </div>
        </form>
    );
};

export default PresentAddress;