let can = false
const CanRegisterReducer = (state = can, action)=>{
    switch (action.type){
        case 'REGISTER_TRUE':
            return true;
        case 'REGISTER_FALSE':
            return false;
        default :
            return state
    }
}
export default CanRegisterReducer;