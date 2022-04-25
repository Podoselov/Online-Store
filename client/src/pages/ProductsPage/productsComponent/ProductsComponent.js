import React, { useState } from 'react';
import {
  StyledLeftMenuWraper,
  StyledLeftMenuContainer,
  StyledLeftMenuBox,
  StyledContainer,
  StyledHeadingBox,
  StyledHeading,
  StyledNavBox,
  StyledSortByMenu,
  StyledLink,
} from './stylesProductsComponent';
import { Button } from '@mui/material';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import GenderCheckBoxComponent from './genderCheckBoxComponent/GenderCheckBoxComponent';
import PriceCheckBoxComponent from './priceCheckBox/PriceCheckBoxComponent';
import BrandCheckBoxComponent from './brandCheckBox/BrandCheckBoxComponent';
import ProductsListComponent from './productsListComponent/ProductsListComponent';
import { useDispatch } from 'react-redux';
import {
  addPriceCategory,
  getAllProductsFromServer,
} from '../../../store/actions/actions';

const ProductsComponent = () => {
  const [sortMenu, setSort] = useState(false);
  const [leftMenu, setLeftMenu] = useState(true);

  const dispatch = useDispatch();

  const showAllProducts = () => {
    dispatch(getAllProductsFromServer());
  };

  const addHighLowPrice = () => {
    setSort(!sortMenu);
    return dispatch(addPriceCategory('_sort=currentPrice&_order=desc'));
  };

  const addLowHighPrice = () => {
    setSort(!sortMenu);
    return dispatch(addPriceCategory('_sort=currentPrice'));
  };

  const openSortMenu = () => {
    return setSort(!sortMenu);
  };

  const toggleLeftMenu = () => {
    return setLeftMenu(!leftMenu);
  };

  return (
    <StyledContainer>
      <StyledHeadingBox>
        <StyledHeading variant='h1'>Products</StyledHeading>
        <StyledNavBox>
          <Button
            onClick={toggleLeftMenu}
            endIcon={
              leftMenu ? (
                <RadioButtonUncheckedIcon />
              ) : (
                <RadioButtonCheckedIcon />
              )
            }
            aria-label='check'
          >
            Filters
          </Button>
          <Button
            onClick={openSortMenu}
            aria-label='drop-down'
            endIcon={sortMenu ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
          >
            Sort by
          </Button>
          {sortMenu ? (
            <StyledSortByMenu>
              <Button onClick={addHighLowPrice}>Price: High-Low</Button>
              <Button onClick={addLowHighPrice}>Price: Low-High</Button>
            </StyledSortByMenu>
          ) : null}
        </StyledNavBox>
      </StyledHeadingBox>
      <StyledLeftMenuBox>
        <StyledLeftMenuWraper
          style={
            leftMenu
              ? {
                  transform: 'translateX(0)',
                  transition: '0.1s',
                  display: 'block',
                  width: '240px',
                }
              : {
                  transform: 'translateX(-100%)',
                  transition: '0.1s',
                  display: 'none',
                  width: '0px',
                }
          }
        >
          <StyledLeftMenuContainer>
            <StyledLink
              onClick={showAllProducts}
              to='/products?_page=1&_limit=9'
            >
              All
            </StyledLink>
            <GenderCheckBoxComponent />
            <PriceCheckBoxComponent />
            <BrandCheckBoxComponent />
          </StyledLeftMenuContainer>
        </StyledLeftMenuWraper>
        <ProductsListComponent />
      </StyledLeftMenuBox>
    </StyledContainer>
  );
};

export default ProductsComponent;
