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

const SliderItemComponent = ({ img, heading, linkText, price, className }) => {
  return (
    <StyledListItem className={className}>
      <StyledLink>
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
