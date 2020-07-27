
import React from "react";
import AuthService from "../../services/AuthService";
import { Redirect, Route } from "react-router-dom";

const authService = new AuthService();

export default ({ component: Component, hasPermissions, ...rest }) => {
    if (!authService.isAuthenticated()) {
        return <Redirect to="/login"/>
    }
     
    return (
        <Route {...rest} render={(props) => (
            (
                authService.isAuthenticated() == true
            )
                ? <Component {...props} />
                : <Redirect to="/login"/>
        )} />
    )
}