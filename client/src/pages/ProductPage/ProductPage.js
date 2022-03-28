import React from 'react';
import {
  StyledContainerImg,
  StyledGrid,
  StyledContainerInfo,
  StyledTypography,
  StyledTypographyBrand,
  StyledPrice,
  StyledContainer,
  StyledCarouselContainer,
} from './stylesProductPage';
import { useSelector } from 'react-redux';
import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import ProductFormComponent from './productForm/ProductFormComponent';
import Carousel from 'react-elastic-carousel';

function ProductPage() {
  const product = useSelector((state) => state.products.product);

  const sizeProduct = product.map(({ size }) => size);

  const breakPoints = [{ width: 1, itemsToShow: 1, itemsToScroll: 1 }];
  return (
    <StyledContainer>
      <StyledContainerImg>
        <Grid
          container
          direction='row'
          justifyContent='flex-start'
          alignItems='center'
          wrap='wrap'
          spacing={2}
        >
          {product.map(({ imageUrls }) => {
            return imageUrls.map((item) => {
              return (
                <StyledGrid xs={6} item>
                  <img src={item} alt='фото кроссовок найк' />
                </StyledGrid>
              );
            });
          })}
        </Grid>
        <StyledCarouselContainer>
          <Carousel breakPoints={breakPoints}>
            {product.map(({ imageUrls }) => {
              return imageUrls.map((item) => {
                return (
                  <img width='100%' src={item} alt='фото кроссовок найк' />
                );
              });
            })}
          </Carousel>
        </StyledCarouselContainer>
      </StyledContainerImg>
      <StyledContainerInfo>
        {product.map((element) => {
          return (
            <Box>
              <StyledTypography variant='h1'>{element.name}</StyledTypography>
              <StyledTypographyBrand variant='h2'>
                {element.brand}
              </StyledTypographyBrand>
              <StyledPrice variant='p'>${element.currentPrice}</StyledPrice>
            </Box>
          );
        })}
        <ProductFormComponent product={product[0]} size={sizeProduct} />
      </StyledContainerInfo>
    </StyledContainer>
  );
}

export default ProductPage;
