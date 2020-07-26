import React from "react";
import { HashRouter as Router, Route, Redirect, Switch } from "react-router-dom";
import ProtectedRoute from "./components/auth/ProtectedRoute";
import ListBeers from "./pages/ListBeers";
import Login from "./pages/Login";

export default () => (
    <Router>
        <Switch>
            <ProtectedRoute path="/beers" component={ListBeers} />
            <Route path="/login" component={Login} />
            <Route component={Login} />
        </Switch>
    </Router>
);