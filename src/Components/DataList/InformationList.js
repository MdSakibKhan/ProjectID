import React, {useEffect, useState} from 'react';
import axios from "axios";
import InformationItem from "./InformationItem";

const InformationList = () => {
    const [Information, setInformation] = useState([]);
    useEffect(async ()=>{
       await axios.get("http://localhost:5000/api/getInformation")
            .then(response=>{
                setInformation([...response.data])
            })
    },[])
    return (
        <div>
            {Information.map(item =>{
                return <InformationItem
                    firstName = {item.first_name}
                    lastName = {item.last_name}
                ></InformationItem>
            })}
        </div>
    );
};

export default InformationList;