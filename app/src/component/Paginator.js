import { Pagination } from "react-bootstrap";
import React from "react";
import PaginatorItem from "./PaginatorItem";

const Paginator = (props) =>   <div>

<Pagination>
  {props.chars
    ? props.chars.map((elements, index) => {
        return <PaginatorItem key={index} rows={elements}></PaginatorItem>;
      })
    : ""}
</Pagination>
</div>;

export default Paginator;
