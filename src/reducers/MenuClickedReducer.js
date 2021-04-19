const MenuClickedReducer = (state='home', action)=>{
    switch (action.type){
        case 'MENU_CLICKED':
            return action.payload;
        default:
            return state
    }
}
export default MenuClickedReducer;