import styled from 'styled-components';

import { Input } from '../../components/Input/styled';

export const Title = styled.h1``;

export const Header = styled.div`
  /* border: 1px solid red; */
  display: flex;
  flex-direction: row;
  width: 100%;
  height: auto;
  padding: 25px 10px;
  justify-content: space-between;
  background-color: #FFF;
  align-items: flex-start;
`;

export const HeaderColLeft = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  width: 25%;
  flex-basis: 25%;

  @media (min-width: 35em) {
    width: 15%;
    flex-basis: 15%;
  }
`;

export const HeaderColCenter = styled.div`
  /* border: 1px solid blue; */
  position: relative;
  display: flex;
  justify-content: center;
  width: 50%;
  flex-basis: 50%;
  padding: 5px 50px;

  @media (min-width: 35em) {
    width: 100%;
    flex-basis: 100%;
  }
`;

export const HeaderColRight = styled.div`
  /* border: 1px solid blue; */
  display: flex;
  flex-direction: row;
  justify-content: center;
  width: 25%;
  flex-basis: 25%;

  @media (min-width: 35em) {
    width: 15%;
    flex-basis: 15%;
  }
`;

export const Brand = styled.img`
  height: 60px;
  margin-left: 10px;
`;

export const Profile = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (min-width: 35em) {
    flex-direction: row;
  }
`;

export const ProfileAvatar = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 25px;
  margin-right: 8px;
`;

export const ProfileUser = styled.span`
  font-size: 10px;
  text-overflow: ellipsis;
  width: 50px;
  white-space: nowrap;
  overflow: hidden;

  @media (min-width: 35em) {
    font-size: unset;
    width: 80px;
  }
`;

export const SearchBox = styled.div`

`;
export const Search = styled(Input)`
  background: #FFF;
  border: 1px solid #CFCFCF;
  padding: 8px 10px;
  margin: 10px;
  &[type=number]::-webkit-inner-spin-button { 
    -webkit-appearance: none;
  }
  &[type=number] {
    width: 150px;
    -moz-appearance: textfield;
    appearance: textfield;
  }
  &[type=text] {
    width: 250px;
  }
  &[type=month] {
    width: 200px;
    placeholder: red;
  }
`;

export const Body = styled.div`
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 100%;
  height: 100%;
  background-color: #F2F2F2;
  box-sizing: box-content;
`;

export const BodyHeader = styled.div`
  /* border: 2px solid blue; */
  display:flex;
  width: 100%; 
  height: 45px;
  margin: 10px 0;
  padding: 0 30px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const BodyHeaderColLefth = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  width: 50%;
  flex-basis: 50%;
`;

export const BodyHeaderColRight = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  width: 50%;
  flex-basis: 50%;
  align-items: center;
`;

export const BodyHeaderTitle = styled.h1`
  height: 100%;
  display: flex;
  align-items: center;
  margin: 0;
`;

export const ContainerTransacoesList = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: row;
  align-content: start;
  flex-wrap: wrap;
  width: 100%;
  flex-basis: 100%;
  background-color: #FFF;
`;

export const ContainerTransacoesListWrapper = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 100%;
  height: 160px;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
  padding: 10px;

  @media (min-width: 35em) {
    width: 25%;
    flex-basis: 25%;
  }
`;

export const ContentTransacoesListWrapper = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 100%;
  height: 100%;
  -webkit-box-sizing: border-box;
  -moz-box-sizing: border-box;
  box-sizing: border-box;
`;

export const ContainerTransacoesListWrapperHeader = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  flex-basis: 100%;
  height: 100px;
`;

export const ContainerTransacoesListWrapperBody = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  flex-basis: 100%;
  height: 50px;
  align-items: center;
`;

export const ContainerTransacoesListWrapperFoto = styled.img`
  width: 20px;
  flex-basis: 80px;
  height: max-content;
  &.noPhoto {
    width: 45px;
    height: 45px;
    flex-basis: initial;
  }
`;

export const ContainerTransacoesListWrapperTitle = styled.h2`
  width: 80%;
  margin: 0;
  flex-basis: 80%;
  font-size: 16px;
  line-height: 24px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
`;

export const ContainerTransacoesListWrapperSobre = styled.p`
  width: 80%;
  margin: 0;
  flex-basis: 80%;
  font-size: 12px;
  line-height: 20px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-align: center;
`;

export const Message = styled.p` 
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  color: #fff;
  text-align: center;
  font-weight: bold;
  font-size: 17px;
  position: fixed;
  bottom: 20px;
  right: 0;
  z-index: 20;
  height: 80px; 
  background: #ef0f0f;
  padding: 0;
  margin: 0;
  border-radius: 10px 0 0 10px;  
  align-items: center; 
  display: flex;
  width: 0;  
  label {
    min-width: 350px;
  }
  &.active { 
    transition: all 1s ease;
    width: 350px;  
    right: 0;  
    -webkit-transform: translate(-0%, 2%);
  }    
`;

export const Paginate = styled.div`
  /* border: 2px solid red; */
  display: flex;
  flex-direction: row;
  align-content: start;
  flex-wrap: wrap;
  width: 100%;
  flex-basis: 100%;
  margin: 22px 0;
  padding: 0 30px;
`;

export const PaginateItem = styled.div`
  /* border: 1px solid red; */
  display: flex;
  align-content: center;
  width: 35px;
  flex-basis: 35px;
  height: 100%;
  align-items: center;
  justify-content: center;
  margin: 0 5px;
  background-color: #FFF;
  border: 2px solid #000;
  cursor: pointer;
  padding: 5px;

  &.selected {
    background-color: #000;
    color: #FFF;
  }
`;

export const ResultSearch = styled.div`
  position: absolute;
  border: 1px solid #000;
  top: 57px;
  width: 82%;
  max-width: 100%;
  padding: 15px 10px;
  background-color: #F2F2F2;
`;

export const ResultSearchTitle = styled.h4`
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const ResultSearchSobre = styled.p`
  margin: 0;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  width: 100%;
`;

export const MessageLabel = styled.label`
  padding: 50px 0; 
  width: 100%; 
  display: flex;
  justify-content: center;
`;
 

export const LabelInput = styled.label`
  padding: 10px; 
  width: fit-content; 
  color: #6e6e6e;
  font-size: 14px;
  line-height: 22px;
`;

export const BoxSelect = styled.select`
  height: 31px;
  padding: 0 6px;
  border-radius: 5px;
  background: #fff;
`;

export const LabelPerPage = styled.label` 
  font-size: 12px;
  padding: 10px;
`;
