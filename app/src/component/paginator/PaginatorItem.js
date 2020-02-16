import React from "../../../node_modules/react";
import { Col, Row } from "../../../node_modules/react-bootstrap";

const PaginatorItem = (props) => (
  <>
        <Row style={{ width: "300px"}}>
      {props.rows
        ? props.rows.map((element, index) => {
          return (
            <Col
            sm={12}
            key={index}
            style={{
              backgroundImage: `url(${element.image})`,
              backgroundRepeat: "no-repeat",
              height: "300px",
              maxWidth: "300px",
      
              border:"3px solid white"
            }}
          >
            {element.name + index}
          </Col>)})

        : ""}
    
    </Row>
  </>
);

export default PaginatorItem;
