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
} from './stylesProductsComponent';
import MenuCategoriesComponent from './MenuCategoriesComponent';
import { Button } from '@mui/material';
import { categories } from './MenuCategoriesComponent';
import RadioButtonUncheckedIcon from '@mui/icons-material/RadioButtonUnchecked';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
import GenderCheckBoxComponent from './genderCheckBoxComponent/GenderCheckBoxComponent';
import PriceCheckBoxComponent from './priceCheckBox/PriceCheckBoxComponent';
import BrandCheckBoxComponent from './brandCheckBox/BrandCheckBoxComponent';
import ShoeHeightCheckBoxComponent from './shoeHeightCheckBox/ShoeHeightCheckBoxComponent';
import ProductsListComponent from './productsListComponent/ProductsListComponent';

const ProductsComponent = () => {
  const [sortMenu, setSort] = useState(false);
  const [leftMenu, setLeftMenu] = useState(true);

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
            Hide Filters
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
              <Button onClick={openSortMenu}>Price: High-Low</Button>
              <Button onClick={openSortMenu}>Price: Low-High</Button>
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
            {categories.map((element) => {
              return <MenuCategoriesComponent linkName={element} />;
            })}
          </StyledLeftMenuContainer>
          <GenderCheckBoxComponent />
          <PriceCheckBoxComponent />
          <BrandCheckBoxComponent />
          <ShoeHeightCheckBoxComponent />
        </StyledLeftMenuWraper>
        <ProductsListComponent />
      </StyledLeftMenuBox>
    </StyledContainer>
  );
};

export default ProductsComponent;
