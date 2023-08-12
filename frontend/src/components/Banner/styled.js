import styled from 'styled-components' 

export const ContainerBanner = styled.div`
  background-color: #fff;
  position: relative;
  width: 100%; 
  display: flex;
  justify-content: center; 
  flex-direction: column;
  align-items: center;
  padding: 20px 0; 
`;

export const BannerTitle = styled.h2`
  color: #000;
  font-size: 16px;
  line-height: 18px;
`;

export const ImgProduct = styled.img`
  width: auto;
  height: auto;
  box-sizing: border-box;
  flex-basis: 20px;
  max-width: 4%;
  max-height: 20%; 
`;

export const BoxProduct = styled.div`
  display: flex;
  align-items: center;
`;

export const WrapperProduct = styled.div`
  display: flex;
  align-items: center;
  width: 50%;
`;

export const ImgBox = styled.div`
  border: none;
  width: 80px;
  height: 80px; 
  background-position: center; 
  background-size: 24%;
  background-repeat: no-repeat; 
`;


export const TitleProduct = styled.label` 
`;