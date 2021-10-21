import styled from 'styled-components';

export const Input = styled.input`
  width: 100%;
  max-width: 100%;
  padding: 15px 10px;
  background-color: #F2F2F2;
  border-radius: 5px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;

  &.error {
    border: 2px solid red;
  }
`;