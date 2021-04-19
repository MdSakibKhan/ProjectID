import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoggedInPage from "./Pages/LoggedInPage";
import LoginPage from "./Pages/LoginPage";
import {useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import TopView from "./Components/Top/TopView";

const App=()=>{
    let isLogged = useSelector(state => state.isLogged)
    return (
    <div className="App">
        <TopView></TopView>
            <Switch>
                <Route path = "/" exact>
                    {!isLogged?<LoginPage></LoginPage>:<LoggedInPage></LoggedInPage>}
                </Route>
                <Route path = "/home" exact>
                    {isLogged? <LoggedInPage></LoggedInPage>: <LoginPage></LoginPage>}
                </Route>
                <Redirect to="/"></Redirect>
            </Switch>
    </div>
  );
}

export default App;
