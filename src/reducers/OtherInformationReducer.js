let OtherInformation = [];
const OtherInformationReducer = (state=OtherInformation, action)=>{
    switch (action.type){
        case 'OTHER_INFORMATION_INSERT':
            return action.payload;
        default:
            return state
    }
}
export default OtherInformationReducer;