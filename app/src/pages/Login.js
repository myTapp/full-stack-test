import { Col, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import React, { Component } from "react";

import UserService from "../service/UserService";
import { withRouter } from "react-router-dom";
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: ""
    };

    this.userService = new UserService();
  }

  async onLonginHandler() {
    try {
      await this.userService.login({
        name: this.state.userName,
        password: this.state.password
      });

      this.props.history.push("/home");
    } catch (e) {
      console.log(e);
      alert("Invalid Credencials");
    }
  }
  onChangeHander(e) {
    console.log(e.target.value, e.target.name);
    this.setState({ [e.target.name]: e.target.value });
  }
  render() {
    return (
      <Row className="justify-content-md-center">
        <Col xs lg={6}>
          <h1>Login</h1>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">User Name</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={e => this.onChangeHander(e)}
              value={this.state.userName}
              name={"userName"}
            />
          </InputGroup>

          <InputGroup className="mb-3">
            <InputGroup.Prepend>
              <InputGroup.Text id="basic-addon3">Password</InputGroup.Text>
            </InputGroup.Prepend>
            <FormControl
              id="basic-url"
              aria-describedby="basic-addon3"
              onChange={e => this.onChangeHander(e)}
              value={this.state.password}
              name={"password"}
              type={"password"}
            />
          </InputGroup>

          <Button variant="primary" onClick={() => this.onLonginHandler()}>
            Login
          </Button>
        </Col>
      </Row>
    );
  }
}

export default withRouter(Login);
