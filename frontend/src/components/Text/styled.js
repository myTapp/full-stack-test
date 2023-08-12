import styled from 'styled-components';

export const Text = styled.textarea`
  width: 100%;
  min-height: 200px;
  padding: 15px 10px;
  height: auto;
  border: 2px solid black;
  border-radius: 5px;
  background-color: #F2F2F2;

  &.error {
    border: 2px solid red;
  }
`;