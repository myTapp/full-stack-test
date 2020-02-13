import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

import { Col, Row, Button } from "react-bootstrap";

import * as AuthActions from "../store/actions/authActions";

const Login = ({ singIn, auth }) => (
  <Row className="justify-content-md-center">
    <Col xs lg={6}>
      <h1>Login</h1>
      <Button variant="primary" onClick={() => {console.log("aq!ui")}}>Login</Button>
    </Col>
  </Row>
);

const mapStateToProps = state => ({
  auth: state.auth
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(AuthActions, dispatch);


export default connect(mapStateToProps, mapDispatchToProps)(Login);