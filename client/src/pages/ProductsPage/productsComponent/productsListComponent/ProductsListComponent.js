import React, { useCallback, useEffect } from 'react';
import { Grid } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../../store/actions/actions';
import SliderItemComponent from '../../../HomePage/sliderSection/SliderItemComponent';
import { StyledGridContainer } from './stylesProductsList';

const ProductsListComponent = () => {
  const dispatch = useDispatch();
  const allSoes = useSelector((state) => state.sneakers.all);

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
      {allSoes.map(({ name, price, collection, urlImg, idProduct }) => {
        return (
          <Grid xs={4} item key={idProduct}>
            <SliderItemComponent
              img={urlImg}
              heading={name}
              linkText={collection}
              price={`$${price}`}
            />
          </Grid>
        );
      })}
    </StyledGridContainer>
  );
};

export default ProductsListComponent;
