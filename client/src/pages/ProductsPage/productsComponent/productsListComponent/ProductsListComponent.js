import React, { useCallback, useEffect, useState } from 'react';
import { Grid, Pagination } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProducts } from '../../../../store/actions/actions';
import SliderItemComponent from '../../../HomePage/sliderSection/SliderItemComponent';
import { StyledGridContainer, StyledPaginationBox } from './stylesProductsList';

const ProductsListComponent = () => {
  const [page, setPage] = useState(1);
  const allSoes = useSelector((state) => state.products.products);
  const paginationCount = useSelector(({ products }) =>
    Math.ceil(products.totalCount / 9)
  );

  const dispatch = useDispatch();

  const getAllSoes = useCallback(async () => {
    await dispatch(getAllProducts(page));
  }, []);

  const handleChangePage = async (event, value) => {
    setPage(value);
    await dispatch(getAllProducts(value));
  };

  useEffect(() => {
    getAllSoes();
  }, [getAllSoes]);

  return (
    <StyledGridContainer
      container
      direction='row'
      justifyContent='flex-start'
      wrap='wrap'
    >
      {allSoes.length > 0 ? (
        allSoes.map(({ name, currentPrice, brand, imageUrls, idProduct }) => {
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
        })
      ) : (
        <Grid
          sx={{ textAlign: 'center', padding: '20px', fontSize: '18px' }}
          item
          lg={12}
        >
          We could not find anything
        </Grid>
      )}

      <StyledPaginationBox>
        <Pagination onChange={handleChangePage} count={paginationCount} />
      </StyledPaginationBox>
    </StyledGridContainer>
  );
};

export default ProductsListComponent;
