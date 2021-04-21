let pagestate = 1;
const PageCountReducer = (state= pagestate, action)=>{
        switch (action.type){
            case 'INCREMENT':
                if (state<=4){
                    return state+1;
                }
                else return state
            case 'DECREMENT':
                if (state>1){
                    return state-1;
                }
                else return state
            case 'INITIAL':
                return 1;
            default:
                return state
        }
}
export default PageCountReducer;