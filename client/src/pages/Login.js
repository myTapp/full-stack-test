import React, { Fragment, Component } from "react";
import "./../assets/css/signin.css";
import AuthService from "../services/AuthService";
import HttpClient from "../utils/HttpClient";

export default class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: "",
            error: null
        };
        this._authService = new AuthService();
        this.changeValueInput = this.changeValueInput.bind(this);
        this.authenticate = this.authenticate.bind(this);
    }

    changeValueInput(key, value) {
        this.setState({ [key]: value });
    }

    redirect() {
        this.props.history.push("/beers");
    }

    authenticate() {
        this._authService
            .authenticate(this.state)
            .then(datas => {
                localStorage.setItem(CONSTANTS.APP_LOCALSTORAGE_PARAM_TOKEN, datas.accessToken);
                this.redirect();
            })
            .catch(error => {
                error = HttpClient.extractError(error);
                this.setState({ error: error.message })
            });
    }

    componentWillMount() {
        if (this._authService.isAuthenticated()) {
            this.redirect();
        }
    }

    render() {
        return (
            <form className="form-signin mt-5" onSubmit={this.authenticate}>
                <h1 className="text-center h3 mb-3 font-weight-normal">Login</h1>
                {this.state.error != null && 
                     <div className="alert alert-danger">
                     {this.state.error}
                     </div>
                }
               
                <label htmlFor="inputEmail" className="sr-only">Email address</label>
                <input type="email" id="inputEmail"
                   value={this.state.email}
                   onChange={(event) => this.changeValueInput("email", event.target.value)} 
                className="form-control" placeholder="Email address" required />

                <label htmlFor="inputPassword" className="sr-only">Password</label>
                <input type="password"
                     value={this.state.password}
                     onChange={(event) => this.changeValueInput("password", event.target.value)} 
                id="inputPassword" className="form-control" placeholder="Password" required />

                <div className="checkbox mb-3">
                    <button className="btn btn-lg btn-primary btn-block"
                        type="submit">Logar</button>
                </div>
            </form>
        )
    }
}