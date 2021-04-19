import {combineReducers} from "redux";
import PageCountReducer from "./PageCountReducer";
import PersonalInformationReducer from "./PersonalInformationReducer";
import FamilyInformationReducer from "./FamilyInformationReducer";
import PermanentAddressReducer from "./PermanentAddressReducer";
import PresentAddressReducer from "./PresentAddressReducer";
import OtherInformationReducer from "./OtherInformationReducer";
import CanRegisterReducer from "./CanRegisterReducer";
import LoadInformationReducer from "./LoadInformationReducer";
import MenuClickedReducer from "./MenuClickedReducer";
import LogReducer from "./LogReducer";


const allReducers = combineReducers({
    isLogged : LogReducer,
    pagecount: PageCountReducer,
    menuClicked : MenuClickedReducer,
    personalInformation : PersonalInformationReducer,
    familyInformation : FamilyInformationReducer,
    permanentAddress : PermanentAddressReducer,
    presentAddress : PresentAddressReducer,
    otherInformation : OtherInformationReducer,
    canRegister : CanRegisterReducer,
    allInformation : LoadInformationReducer
})
export default allReducers;