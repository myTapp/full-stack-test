import styled from 'styled-components';

import { Container } from '../../../../components/Container/styled';
import { Button } from '../../../../components/Button/styled';

export const Backdrop = styled.div`
  background-color: #000;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 100;
  height: 100%;
  opacity: .55;
`;

export const ContainerModal = styled.div`
  background-color: #FFF;
  position: fixed;
  width: 90%;
  top: 10%;
  left: 5%;
  z-index: 101;
  max-height: 85%;
  overflow: auto;
`;

export const Modal = styled.div`
  background-color: #FFF;
  position: relative;
  /* width: 90%; */
  /* top: 10%; */
  /* left: 5%; */
  /* z-index: 101; */
  /* height: auto; */
`;

export const ModalContainer = styled(Container)`
  padding: 30px 20px;
`;

export const InputWrapper = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 100%;
  margin: 5px 0;
`;

export const ModalFooter = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 100%;
  flex-direction: row;

  > button:first-child {
    margin-right: 5px;
  }

  > button:last-child {
    margin-left: 5px;
  }
`;

export const ModalHeader = styled.div`
  display: flex;
  width: 100%;
  flex-basis: 100%;
  flex-direction: row;
  justify-content: flex-end;

  > button:first-child {
    margin-right: 5px;
  }

  > button:last-child {
    margin-left: 5px;
  }
`;

export const Error = styled.p`
  color: red;
  width: 100%;
  font-size: 12px;
  padding-right: 50px;
  text-align: right;
`;

export const ButtonEdit = styled(Button)`
  padding: 8px;
  width: 140px;
  align-self: flex-end;
`;

export const ButtonDelete = styled(Button)`
  padding: 8px;
  width: 160px;
  align-self: flex-end;
  background-color: red;
  color: #fff;
  font-weight: bold;
`;
