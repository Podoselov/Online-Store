import React from 'react';
import {
  StyledTypography,
  StyledBox,
  StyledJoinUsLink,
  StyledSignInLink,
  StyledButtonBox,
} from './stylesRegistrationComponent';

const RegistrationComponent = ({ setActiveMenu }) => {
  const setActiveRegistrationMenu = () => {
    setActiveMenu(false);
  };

  return (
    <StyledBox>
      <StyledTypography variant='p'>
        Become a Nike Member for the best products, inspiration and stories in
        sport.
      </StyledTypography>
      <StyledButtonBox>
        <StyledJoinUsLink
          onClick={setActiveRegistrationMenu}
          to='/registration'
        >
          Join Us
        </StyledJoinUsLink>
        <StyledSignInLink onClick={setActiveRegistrationMenu} to='/login'>
          Sign In
        </StyledSignInLink>
      </StyledButtonBox>
    </StyledBox>
  );
};

export default RegistrationComponent;
