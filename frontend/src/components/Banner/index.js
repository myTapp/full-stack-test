import React, { useState, useEffect } from 'react';
  
import { 
  ContainerBanner,
  BannerTitle,
  ImgBox,
  BoxProduct,
  TitleProduct,
  WrapperProduct
} from './styled';

import { GET } from '../../services';

const Banner = ({handleClick}) => { 

  const [productRandom, setProductRandom] = useState();  

  const getProducts = async() => {
    const response = await GET(`api/v1/beers/random`);  
    const responseResolved = await response.json();  
    return responseResolved;
  }
 
  const handleGetProducts = async () => {
    try {
      const highlight = []
      while (highlight.length < 2) {
        let _prod = await getProducts()
        if (_prod[0].image_url) {
          highlight.push(_prod[0])
        }
      }  
      if (highlight?.length) {   
        setProductRandom(highlight);
      }
    } catch (error) {
      console.log(error);
    }
  }

  useEffect(() => {
    handleGetProducts()
  }, []) 

  useEffect(() => {
    if(productRandom?.length > 0) {
      setTimeout(() => {
        handleGetProducts()
      }, 5000); 
    }
  }, [productRandom]) 

  const handleClickProduct = (item) => {
    handleClick('read', item)
  }   
  
  return (
    <>
      {productRandom?.length > 0 && (
        <ContainerBanner> 
          <BannerTitle>Produtos em destaque</BannerTitle> 
          <BoxProduct>
            { productRandom.map((item, i) => (
              <WrapperProduct key={i} onClick={() => handleClickProduct(item)}>
                <ImgBox style={{ 
                    backgroundImage: `url(${item.image_url})` 
                  }}></ImgBox>
                <TitleProduct>{item?.name}</TitleProduct>
              </WrapperProduct>
            ))} 
          </BoxProduct>
        </ContainerBanner>
      )} 
    </>
  )
}

export default Banner