import React from 'react';
import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  StyledIconButton,
  StyledList,
  StyledListItem,
  StyledLink,
  StyledBox,
  StyledTypography,
} from './stylesProductMenuComponent';
import { useDispatch } from 'react-redux';
import {
  getAllProductsFromServer,
  removeCategory,
  addCategory,
  getAllMenProducts,
  getAllKidsProducts,
  getAllWomenProducts,
} from '../../../../store/actions/actions';

const ProductMenuComponent = ({
  activeProduct,
  setActiveProduct,
  setActiveMenu,
}) => {
  const dispatch = useDispatch();

  const showAllProducts = () => {
    dispatch(getAllProductsFromServer());
    setActiveProduct(false);
    setActiveMenu(false);
  };

  const showMenProducts = () => {
    dispatch(getAllMenProducts());
    setActiveProduct(false);
    setActiveMenu(false);
  };

  const showWomenProducts = () => {
    dispatch(getAllWomenProducts());
    setActiveProduct(false);
    setActiveMenu(false);
  };

  const showKidsProducts = () => {
    dispatch(getAllKidsProducts());
    setActiveProduct(false);
    setActiveMenu(false);
  };

  return (
    <StyledBox
      onClick={(event) => {
        event.stopPropagation();
      }}
      style={
        activeProduct
          ? { transform: 'translateX(0)', transition: '0.1s' }
          : { transform: 'translateX(100%)', transition: '0.1s' }
      }
    >
      <Box>
        <StyledIconButton
          onClick={() => {
            setActiveProduct(false);
          }}
          aria-label='all'
        >
          <ArrowBackIosIcon /> All
        </StyledIconButton>
        <StyledTypography>Product</StyledTypography>
        <StyledList>
          <StyledListItem>
            <StyledLink
              onClick={showAllProducts}
              to='/products?_page=1&_limit=9'
            >
              All
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              onClick={showMenProducts}
              to='/products?_limit=9&category=men&_page=1'
            >
              Men
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              onClick={showWomenProducts}
              to='/products?_limit=9&category=women&_page=1'
            >
              Women
            </StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink
              onClick={showKidsProducts}
              to='/products?_limit=9&category=kids&_page=1'
            >
              Kids
            </StyledLink>
          </StyledListItem>
        </StyledList>
      </Box>
    </StyledBox>
  );
};

export default ProductMenuComponent;
