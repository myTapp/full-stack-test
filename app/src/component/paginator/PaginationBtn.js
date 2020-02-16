import React from "../../../node_modules/react";
import { Button, Col } from "../../../node_modules/react-bootstrap";

function btns(size) {
  let items = [];
  for (let number = 1; number <= size; number++) {
    items.push({ key: number });
    console.log(size)
  }
  return items;
}
function onHandlerActive(btnIndex) {
  actived = btnIndex;
}
var actived = 1;
const PaginationBtn = props => (
  <Col className={"btnView pushCenterRow"} style={{ marginBottom: 10 }}>
    {btns(props.manyPages)
      ? btns(props.manyPages).map((bnt) => {
          return (
            <Button
              variant="outline-dark"
              className={"btnPagination"}
              key={bnt.key.toString()}
              active={bnt.key === actived}
              onClick={() => {
                props.getDataApi(bnt.key);
                onHandlerActive(bnt.key);
              }}
            >
              {bnt.key}
            </Button>
          );
        })
      : "aa"}
  </Col>
);
export default PaginationBtn;
