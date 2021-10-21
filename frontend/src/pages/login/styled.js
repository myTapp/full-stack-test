import styled from 'styled-components';

export const ContainerLogin = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #fff;
  max-width: 100%;
  padding: 30px 25px;
  width: 80%;
  margin-top: 180px;
  border-radius: 15px;

  @media (min-width: 35em) {
    width: 40%;
  }
`;

export const RowLogin = styled.div`
  display: flex;
  flex-direction: column;
  padding: 8px 0;
  width: 100%;
  max-width: 100%;
`;