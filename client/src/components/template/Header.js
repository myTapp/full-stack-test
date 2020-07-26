import React, { Component } from "react";
import AuthService from "../../services/AuthService";

export default class Header extends Component {

    constructor(props) {
        super(props);
        this._authService = new AuthService();
        this.logout = this.logout.bind(this);
    }

    logout() {
        this._authService.logout();
        location.reload();
    }

    render() {
        return (
            <nav className="navbar navbar-dark sticky-top bg-dark flex-md-nowrap p-0">
                <a className="navbar-brand col-sm-3 col-md-2 mr-0" href="#">MyTapp Challenge</a>
                <ul className="navbar-nav px-3">
                    <li className="nav-item text-nowrap">
                        <a className="nav-link" onClick={this.logout}>Logout</a>
                    </li>
                </ul>
            </nav>
        )
    }
}