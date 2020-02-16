import React from "../../../node_modules/react";
import { Col, Row } from "../../../node_modules/react-bootstrap";

const PaginatorItem = (props) => (
  <>
        <Row style={{ width: "290"}}>
      {props.rows
        ? props.rows.map((element, index) => {
          return (
            <Col
            sm={10}
            key={index}
            style={{
              backgroundImage: `url(${element.image})`,
              backgroundRepeat: "no-repeat",
              height: "300px",
              margin: 3,
              left: "15%",
              width: "100px"
            }}
          >
            <div className={"divTextImg"}>
            <p>{element.name}</p>
            <p>{element.species} | {element.gender}</p>
            </div>
          </Col>)})

        : ""}
    
    </Row>
  </>
);

export default PaginatorItem;
