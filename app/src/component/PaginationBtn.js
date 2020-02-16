import React from 'react';
import { Button, Col } from 'react-bootstrap';

 function btns(size){
   let items = [];
    for (let number = 1; number <= size; number++) {
      items.push({key: number});
   
    }
    return items;
  }
    
const PaginationBtn = (props) => 
      <Col>
        {btns(props.manyPages) ? btns(props.manyPages).map((bnt, index) => {
          return <Button key={index.toString()} active={false} onClick={() => props.getDataApi(bnt.key)}>{bnt.key}</Button>
        }): "aa"}
      </Col>
      ;

export default PaginationBtn;
