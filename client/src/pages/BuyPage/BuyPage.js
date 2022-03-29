import React from 'react';
import {
  StyledBox,
  StyledBagBox,
  StyledTypographyHeading,
  StyledTypographyText,
  StyledPriceBox,
  StyledHeadingPrice,
  StyledPriceContainer,
  StyledPriceTotal,
  StyledPriceElement,
} from './stylesBuyPage';
import { Container } from '@mui/material';
import BagCardComponent from './bagCardComponent/BagCardComponent';
import { useSelector } from 'react-redux';
import { StyledButtonBag } from '../ProductPage/productForm/stylesProductForm';

function BuyPage() {
  const bagProduct = useSelector((state) => state.products.bag);

  const priceProduct = bagProduct.map(({ currentPrice }) => currentPrice);

  const reducer = (previousValue, currentValue) =>
    Number(previousValue) + Number(currentValue);

  const calculationPrice = () => {
    return priceProduct.length === 0 ? 0 : priceProduct.reduce(reducer);
  };

  return (
    <Container>
      <StyledBox>
        <StyledBagBox>
          <StyledTypographyHeading variant='h2'>Bag</StyledTypographyHeading>
          {bagProduct.length === 0 ? (
            <StyledTypographyText>
              There are no items in your bag.
            </StyledTypographyText>
          ) : (
            bagProduct.map((element) => {
              console.log(element);
              return (
                <BagCardComponent
                  idProduct={element.idProduct}
                  img={element.urlImg}
                  name={element.name}
                  size={element.size}
                  brand={element.categories}
                  price={element.currentPrice}
                />
              );
            })
          )}
        </StyledBagBox>
        <StyledPriceBox>
          <StyledHeadingPrice variant='h4'>Summary</StyledHeadingPrice>
          <StyledPriceContainer>
            <StyledPriceTotal variant='p'>Total</StyledPriceTotal>
            <StyledPriceElement variant='p'></StyledPriceElement>$
            {calculationPrice()}
          </StyledPriceContainer>
          <StyledButtonBag type='button'>Checkout</StyledButtonBag>
        </StyledPriceBox>
      </StyledBox>
    </Container>
  );
}

export default BuyPage;
