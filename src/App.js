import logo from './logo.svg';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import LoginPage from "./Pages/LoginPage";
import {useSelector} from "react-redux";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link, Redirect
} from "react-router-dom";
import TopView from "./Components/Header/TopView";
import Homepage from "./Pages/Homepage";
import Footer from "./Components/Footer/Footer";

const App=()=>{
    let isLogged = useSelector(state => state.isLogged)
    return (
    <div className="App">
        <TopView></TopView>
            <Switch>
                <Route path = "/" exact>
                    {!isLogged?<LoginPage></LoginPage>:<Homepage></Homepage>}
                </Route>
                <Route path = "/home" exact>
                    {isLogged? <Homepage></Homepage> : <LoginPage></LoginPage>}
                </Route>
                <Redirect to="/"></Redirect>
            </Switch>
        <Footer></Footer>
    </div>
  );
}

export default App;
