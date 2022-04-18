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
import { Link, useNavigate, useSearchParams } from 'react-router-dom';

const ProductsListComponent = () => {
  const dispatch = useDispatch();
  const [searchParams, setSearchParams] = useSearchParams();

  const allSoes = useSelector((state) => state.products.products);

  const genderCategory = useSelector(
    ({ products }) => products.category.gender
  );

  const priceCategory = useSelector(({ products }) => products.category.price);

  const brandCategory = useSelector(({ products }) => products.category.brand);

  const statusPrice = useSelector(
    ({ products }) => products.category.statusPrice
  );

  const paginationCount = useSelector(({ products }) => {
    return Math.ceil(products.totalCount / 9);
  });

  const page = Number(searchParams.get('_page') || '1', paginationCount);
  const productsQuery = searchParams.get('q') || false;

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
      statusPrice,
      page
    ) => {
      await dispatch(
        searchProducts(
          productsQuery,
          genderCategory,
          priceCategory,
          brandCategory,
          statusPrice,
          page
        )
      );
    },
    []
  );

  const handleChangePage = async (event, value) => {
    await getSearchProducts(
      productsQuery,
      genderCategory,
      priceCategory,
      brandCategory,
      statusPrice,
      value
    );
  };

  useEffect(() => {
    getSearchProducts(
      productsQuery,
      genderCategory,
      priceCategory,
      brandCategory,
      statusPrice,
      page
    );
  }, [
    productsQuery,
    genderCategory,
    priceCategory,
    brandCategory,
    statusPrice,
  ]);

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
                    ? `/products?q=${productsQuery}&_page=${item.page}&_limit=9`
                    : `/products?_page=${item.page}&_limit=9`
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
