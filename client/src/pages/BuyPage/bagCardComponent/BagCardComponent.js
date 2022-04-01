import React from 'react';
import {
  StyledCardBox,
  StyledImgBox,
  StyledInfoBox,
  StyledInfoHeading,
  StyledInfoBrand,
  StyledPrice,
} from './stylesBagCard';
import { StyledPriceBox } from '../stylesBuyPage';
import { IconButton } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import { useDispatch } from 'react-redux';
import { removeProductBag } from '../../../store/actions/actions';

const BagCardComponent = ({ product }) => {
  const dispatch = useDispatch();

  const removeCard = () => {
    dispatch(removeProductBag(product));
  };

  return (
    <StyledCardBox>
      <StyledImgBox>
        <img src={product.urlImg} alt='фото кроссовок найк' />
      </StyledImgBox>
      <StyledInfoBox>
        <StyledInfoHeading variant='h2'>{product.name}</StyledInfoHeading>
        <StyledInfoBrand varinat='p'>{product.categories}</StyledInfoBrand>
        <StyledInfoBrand varinat='p'>SIZE {product.size}</StyledInfoBrand>
        <IconButton
          onClick={removeCard}
          sx={{ position: 'absolute', bottom: 0, left: '0' }}
        >
          <DeleteIcon />
        </IconButton>
      </StyledInfoBox>
      <StyledPriceBox>
        <StyledPrice variant='p'>$ {product.currentPrice}</StyledPrice>
      </StyledPriceBox>
    </StyledCardBox>
  );
};

export default BagCardComponent;
