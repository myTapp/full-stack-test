import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import { Container } from "react-bootstrap";

import PaginationBtn from "../component/PaginationBtn";
import Paginator from "../component/Paginator";
import * as PerrsonsActions from "../store/actions/persons";

const Home = ({ status, getDataApi, chars, info }) => (
  <Container onLoad={status === "initial" ? getDataApi() : null}>
    <h1>Home</h1>
    <PaginationBtn manyPages={info} getDataApi={getDataApi}></PaginationBtn>
    <Paginator chars={chars}></Paginator>
  </Container>
);

const mapStateToProps = state => ({
  status: state.persons.status,
  info: state.persons.info,
  chars: state.persons.chars
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PerrsonsActions, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
