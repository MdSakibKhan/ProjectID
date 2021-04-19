let FamilyInformation = [];
const FamilyInformationReducer = (state=FamilyInformation, action)=>{
    switch (action.type){
        case 'FAMILY_INFORMATION_INSERT':
            return action.payload;
        default:
            return state
    }
}
export default FamilyInformationReducer;