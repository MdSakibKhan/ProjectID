let PermanentAddress = [];
const PermanentAddressReducer = (state=PermanentAddress, action)=>{
    switch (action.type){
        case 'PERMANENT_ADDRESS_INSERT':
            return action.payload;
        default:
            return state
    }
}
export default PermanentAddressReducer;