export const increment=()=>{
    return{
        type:'INCREMENT'
    }
}
export const decrement=()=>{
    return{
        type:'DECREMENT'
    }
}
export const insertPersonalInformation=(data)=>{
    return{
        type: 'PERSONAL_INFORMATION_INSERT',
        payload : data
    }
}
export const insertFamilyInformation=(data)=>{
    return{
        type: 'FAMILY_INFORMATION_INSERT',
        payload : data
    }
}
export const insertPresentAddress=(data)=>{
    return{
        type: 'PRESENT_ADDRESS_INSERT',
        payload : data
    }
}
export const insertPermanentAddress=(data)=>{
    return{
        type: 'PERMANENT_ADDRESS_INSERT',
        payload : data
    }
}

export const insertOtherInformation=(data)=>{
    return{
        type: 'OTHER_INFORMATION_INSERT',
        payload : data
    }
}
export const canRegister=()=>{
    return {
        type : 'REGISTER_TRUE'
    }
}
export const canNotRegister= ()=>{
   return {
       type : 'REGISTER_FALSE'
   }
}
export const loadInformation = (data)=>{
    return{
        type : 'LOAD_INFORMATION',
        payload : data
    }
}

export const menuSelect = (data)=>{
    return{
        type: 'MENU_CLICKED',
        payload : data
    }
}
export const loggedIn = ()=>{
    return{
        type: 'LOGGED_IN',
    }
}
export const loggedOut = ()=>{
    return{
        type: 'LOGGED_OUT',
    }
}
export const initialPage=()=>{
    return{
        type: 'INITIAL'
    }
}