import React from 'react';
import ModalFormComponent from '../../components/signInComponent/modalForm/ModalFormComponent';
import {
  StyledWraper,
  StyledContainer,
  StyledTypography,
  StyledHeader,
} from '../RegistrationPage/stylesRegistrationPage';
import { StyledBox } from '../RegistrationPage/registrationForm/stylesRegistrationForm';
import { StyledJoinUsBox } from '../../components/signInComponent/stylesSignInComponent';
import { Link } from 'react-router-dom';

const LoginPage = () => {
  return (
    <StyledWraper>
      <StyledContainer>
        <StyledBox>
          <StyledHeader>
            <img src='./img/swooshBlack.png' alt='логотип найк' />
            <StyledTypography variant='h3'>
              YOUR ACCOUNT FOR EVERYTHING NIKE
            </StyledTypography>
          </StyledHeader>
          <ModalFormComponent />
          <StyledJoinUsBox>
            Not a member?
            <Link to='/registration'>Join Us.</Link>
          </StyledJoinUsBox>
        </StyledBox>
      </StyledContainer>
    </StyledWraper>
  );
};

export default LoginPage;
