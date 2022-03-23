import React from 'react';
import {
  StyledListItem,
  StyledLink,
  StyledLinkItem,
  StyledHeadingItem,
  StyledLinkText,
  StyledText,
  StyledLinkBox,
} from './stylesSliderComponent';
import { useDispatch } from 'react-redux';
import { getProduct } from '../../../store/actions/actions';

const SliderItemComponent = ({ img, heading, linkText, price, idProduct }) => {
  const dispatch = useDispatch();

  const clickOnOneProduct = () => {
    dispatch(getProduct(idProduct));
  };

  return (
    <StyledListItem key={idProduct}>
      <StyledLink to={`/products/:${idProduct}`} onClick={clickOnOneProduct}>
        <img src={img} alt='фото кроссовок найк' />
        <StyledLinkBox>
          <StyledLinkItem>
            <StyledHeadingItem>{heading}</StyledHeadingItem>
            <StyledLinkText>{linkText}</StyledLinkText>
          </StyledLinkItem>
          <StyledText>{price}</StyledText>
        </StyledLinkBox>
      </StyledLink>
    </StyledListItem>
  );
};

export default SliderItemComponent;
