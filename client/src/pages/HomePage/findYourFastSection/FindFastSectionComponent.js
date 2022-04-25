import React from 'react';
import {
  StyledBox,
  StyledTypography,
  StyledSignInLink,
  StyledButtonBox,
  StyledTextTypography,
} from './stylesFindFastComponent';
import { Box } from '@mui/system';
import { useDispatch } from 'react-redux';
import { getAllProductsFromServer } from '../../../store/actions/actions';

const FindFastSectionComponent = () => {
  const dispatch = useDispatch();

  const showAllProducts = () => {
    dispatch(getAllProductsFromServer());
  };

  return (
    <Box>
      <StyledBox>
        <video autoPlay muted loop preload='auto'>
          <source src='./video/videoNikeFormatWeb.webm' type='video/webm' />
          <source src='./video/videoNike.mp4' type='video/mp4' />
        </video>
        <img src='./img/nikeDeluxe.jpeg' alt='фото кроссовок найк' />
      </StyledBox>
      <StyledButtonBox>
        <StyledTypography variant='h4'>
          Essentials for <br /> Spring Break
        </StyledTypography>
        <StyledTextTypography variant='p'>
          Down to explore more? Here's what your family needs for the best break
          ever.
        </StyledTextTypography>
        <StyledSignInLink
          onClick={showAllProducts}
          to='/products?_page=1&_limit=9'
        >
          Shop
        </StyledSignInLink>
      </StyledButtonBox>
    </Box>
  );
};

export default FindFastSectionComponent;
