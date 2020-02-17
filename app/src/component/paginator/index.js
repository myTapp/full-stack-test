import { Pagination } from "react-bootstrap";
import React from "react";

import PaginationBtn from "./PaginationBtn";
import PaginatorItem from "./PaginatorItem";

const Paginator = props => (
  <>
    <PaginationBtn
      manyPages={props.manyPages}
      getDataApi={props.getDataApi}
    ></PaginationBtn>
    <Pagination>
      {props.data
        ? props.data.map((elements, index) => {
            return <PaginatorItem key={index} rows={elements}></PaginatorItem>;
          })
        : ""}
    </Pagination>
  </>
);

export default Paginator;
