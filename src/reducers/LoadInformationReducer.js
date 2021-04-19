let AllInformation = [];
const LoadInformationReducer = (state=AllInformation, action)=>{
    switch (action.type){
        case 'LOAD_INFORMATION':
            return [...action.payload];
        default:
            return state
    }
}
export default LoadInformationReducer;