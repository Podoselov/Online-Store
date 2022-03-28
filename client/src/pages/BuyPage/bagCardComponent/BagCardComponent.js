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

const BagCardComponent = ({ img, name, brand, size, price }) => {
  const dispatch = useDispatch();

  const removeCard = () => {
    dispatch(removeProductBag(name));
  };

  return (
    <StyledCardBox>
      <StyledImgBox>
        <img src={img} alt='фото кроссовок найк' />
      </StyledImgBox>
      <StyledInfoBox>
        <StyledInfoHeading variant='h2'>{name}</StyledInfoHeading>
        <StyledInfoBrand varinat='p'>{brand}</StyledInfoBrand>
        <StyledInfoBrand varinat='p'>SIZE {size}</StyledInfoBrand>
        <IconButton
          onClick={removeCard}
          sx={{ position: 'absolute', bottom: 0, left: '0' }}
        >
          <DeleteIcon />
        </IconButton>
      </StyledInfoBox>
      <StyledPriceBox>
        <StyledPrice variant='p'>$ {price}</StyledPrice>
      </StyledPriceBox>
    </StyledCardBox>
  );
};

export default BagCardComponent;
