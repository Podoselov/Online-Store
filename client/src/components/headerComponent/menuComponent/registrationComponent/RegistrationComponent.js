import React from 'react';
import {
  StyledTypography,
  StyledBox,
  StyledJoinUsLink,
  StyledSignInLink,
  StyledButtonBox,
} from './stylesRegistrationComponent';

const RegistrationComponent = () => {
  return (
    <StyledBox>
      <StyledTypography variant='p'>
        Become a Nike Member for the best products, inspiration and stories in
        sport.
      </StyledTypography>
      <StyledButtonBox>
        <StyledJoinUsLink>Join Us</StyledJoinUsLink>
        <StyledSignInLink href='/registration'>Sign In</StyledSignInLink>
      </StyledButtonBox>
    </StyledBox>
  );
};

export default RegistrationComponent;
