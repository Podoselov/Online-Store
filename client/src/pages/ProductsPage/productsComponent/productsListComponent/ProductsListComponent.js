import React, { useCallback, useEffect } from 'react';
import { Grid, Pagination, PaginationItem } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getProduct,
  searchProducts,
} from '../../../../store/actions/actions';
import SliderItemComponent from '../../../HomePage/sliderSection/SliderItemComponent';
import { StyledGridContainer, StyledPaginationBox } from './stylesProductsList';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const ProductsListComponent = () => {
  const location = useLocation();

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const allSoes = useSelector((state) => state.products.products);

  const genderCategory = useSelector(
    ({ products }) => products.category.gender
  );

  const priceCategory = useSelector(({ products }) => products.category.price);

  const brandCategory = useSelector(({ products }) => products.category.brand);

  const paginationCount = useSelector(({ products }) => {
    return Math.ceil(products.totalCount / 9);
  });

  const query = new URLSearchParams(location.search);

  const page = Number(query.get('page') || '1', paginationCount);

  const productsQuery = query.get('q') || false;

  const clickOnOneProduct = (idProduct) => {
    dispatch(getProduct(idProduct));
  };

  const getAllSoes = useCallback(async () => {
    await dispatch(getAllProducts(productsQuery, page));
  }, []);

  const getSearchProducts = useCallback(
    async (
      productsQuery,
      genderCategory,
      priceCategory,
      brandCategory,
      page
    ) => {
      await dispatch(
        searchProducts(
          productsQuery,
          genderCategory,
          priceCategory,
          brandCategory,
          page
        )
      );
    },
    []
  );

  const handleChangePage = async (event, value) => {
    await dispatch(
      searchProducts(
        productsQuery,
        genderCategory,
        priceCategory,
        brandCategory,
        value
      )
    );
  };

  useEffect(() => {
    getSearchProducts(
      productsQuery,
      genderCategory,
      priceCategory,
      brandCategory,
      page
    );
  }, [productsQuery, genderCategory, priceCategory, brandCategory]);

  useEffect(() => {
    getAllSoes();
  }, []);

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
                clickOnOneProduct={() => {
                  clickOnOneProduct(idProduct);
                }}
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
      {paginationCount > 1 ? (
        <StyledPaginationBox>
          <Pagination
            defaultPage={1}
            page={page}
            onChange={handleChangePage}
            count={paginationCount}
            renderItem={(item) => (
              <PaginationItem
                component={Link}
                to={
                  productsQuery
                    ? `/products?q=${productsQuery}&page=${item.page}`
                    : `/products?page=${item.page}`
                }
                {...item}
              />
            )}
          />
        </StyledPaginationBox>
      ) : null}
    </StyledGridContainer>
  );
};

export default ProductsListComponent;
