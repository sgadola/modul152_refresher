import React from 'react';

import './App.css';
import Users from "./users/pages/Users"
import NewPlace from "./places/pages/NewPlace"
import {BrowserRouter as Router, Route, Redirect, Switch} from "react-router-dom";

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/places/new" exact>
                    <NewPlace/>
                </Route>
                <Route path="/" exact>
                    <Users/>
                </Route>
                <Redirect to="/"/>
            </Switch>
        </Router>
    );
}

export default App;
