import React, { useCallback, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../../store/actions/actions';
import SliderItemComponent from '../../../HomePage/sliderSection/SliderItemComponent';
import { StyledGridContainer } from './stylesProductsList';

const ProductsListComponent = () => {
  const dispatch = useDispatch();
  const allSoes = useSelector((state) => state.products.products);

  const getAllSoes = useCallback(async () => {
    await dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    getAllSoes();
  }, [getAllSoes]);

  return (
    <StyledGridContainer
      container
      direction='row'
      justifyContent='flex-start'
      alignItems='center'
      wrap='wrap'
    >
      {allSoes.map(({ name, currentPrice, brand, imageUrls, idProduct }) => {
        return (
          <Grid xs={12} sm={12} md={4} item key={idProduct}>
            <SliderItemComponent
              idProduct={idProduct}
              img={imageUrls[0]}
              heading={name}
              linkText={brand}
              price={`$${currentPrice}`}
            />
          </Grid>
        );
      })}
    </StyledGridContainer>
  );
};

export default ProductsListComponent;
