import React from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { withRouter } from "react-router-dom";

import Paginator from "../component/paginator/index";
import * as PerrsonsActions from "../store/actions/pagination";

const Home = ({ status, getDataApi, chars, info }) => (
  <div className={"pushCenter"} onLoad={status === "initial" ? getDataApi() : null} >
    <h1>Welcome to the Rick and Morty </h1>
    <h2>chararters photo's </h2>
    <Paginator 
      data={chars}
      manyPages={info}
      getDataApi={getDataApi}
    ></Paginator>
  </div>
);

const mapStateToProps = state => ({
  status: state.pagination.status,
  info: state.pagination.info,
  chars: state.pagination.chars
});
const mapDispatchToProps = dispatch =>
  bindActionCreators(PerrsonsActions, dispatch);
export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Home));
