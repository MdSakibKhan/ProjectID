let PresentAddress = [];
const PresentAddressReducer = (state=PresentAddress, action)=>{
    switch (action.type){
        case 'PRESENT_ADDRESS_INSERT':
            return action.payload;
        default:
            return state
    }
}
export default PresentAddressReducer;