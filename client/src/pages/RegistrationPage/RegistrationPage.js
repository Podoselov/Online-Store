import React from 'react';
import {
  StyledWraper,
  StyledContainer,
  StyledBox,
  StyledHeader,
  StyledTypography,
  StyledText,
} from './stylesRegistrationPage';
import RegistrationFormComponent from './registrationForm/RegistrationFormComponent';
import { StyledJoinUsBox } from '../../components/signInComponent/stylesSignInComponent';
import { Link } from '@mui/material';

function RegistrationPage() {
  return (
    <StyledWraper>
      <StyledContainer>
        <StyledBox>
          <StyledHeader>
            <img src='./img/swooshBlack.png' alt='логотип найк' />
            <StyledTypography variant='h3'>
              BECOME A NIKE MEMBER
            </StyledTypography>
            <StyledText variant='p'>
              Create your Nike Member profile and get first access to the very
              best of Nike products, inspiration and community.
            </StyledText>
          </StyledHeader>
          <RegistrationFormComponent />
          <StyledJoinUsBox>
            Already a member?
            <Link href='/login'>Join Us.</Link>
          </StyledJoinUsBox>
        </StyledBox>
      </StyledContainer>
    </StyledWraper>
  );
}

export default RegistrationPage;
