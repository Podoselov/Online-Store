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

const ProductMenuComponent = ({ activeProduct, setActiveProduct }) => {
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
            <StyledLink href='/products'>Men</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href='/products'>Women</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href='/products'>Kids</StyledLink>
          </StyledListItem>
        </StyledList>
      </Box>
    </StyledBox>
  );
};

export default ProductMenuComponent;
