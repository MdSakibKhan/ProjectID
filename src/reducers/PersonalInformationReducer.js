let PersonalInformation = [];
const PersonalInformationReducer = (state=PersonalInformation, action)=>{
    switch (action.type){
        case 'PERSONAL_INFORMATION_INSERT':
            return action.payload;
        default:
            return state
    }
}
export default PersonalInformationReducer;