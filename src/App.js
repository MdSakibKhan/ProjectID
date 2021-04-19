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
    Link
} from "react-router-dom";

const App=()=>{
    let isLogged = useSelector(state => state.isLogged)
    return (
    <div className="App">
        <Router>
            <Switch>
                <Route path = "/" exact>
                    <LoginPage></LoginPage>
                </Route>
                <Route path = "/home" exact>
                    <LoggedInPage></LoggedInPage>
                </Route>
            </Switch>
        </Router>
    </div>
  );
}

export default App;
