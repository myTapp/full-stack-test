import { Col, Row, Button, InputGroup, FormControl } from "react-bootstrap";
import React, { Component } from "react";

import UserService from "../service/UserService";
import history from "../routes/history";
import { withRouter } from 'react-router-dom';
class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: "",
      password: "",

    };

    this.userService = new UserService();
  }

  async onLonginHandler() {
    let resp = {};
    try {
      resp = await this.userService.authenticate({
        name: this.state.userName,
        password: this.state.password
      });
      console.log("propsssssssssssssssssssssssss", this.props);
      
      this.props.history.push('/home')
    } catch (e) {
      console.log(e);
     alert("Invalid Credencials")
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
// }

// const Login = ({ props, auth, singIn }) => (
//   <Row className="justify-content-md-center">
//     <Col xs lg={6}>
//       <h1>Login</h1>
//       <Button variant="primary" onClick={singIn}>Login</Button>
//       <Link to={{pathname:'/home'}}>aaa</Link>
//     </Col>
//   </Row>
// );

// const mapStateToProps = state => ({
//   auth: state.auth
// });
// const mapDispatchToProps = dispatch =>
//   bindActionCreators(AuthActions, dispatch);

// export default connect(mapStateToProps, mapDispatchToProps)(Login)
