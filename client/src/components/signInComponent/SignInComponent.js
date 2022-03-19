import React from 'react';
import {
  StyledWraper,
  StyledHeadingWraper,
  StyledHeading,
  StyledHeadingText,
  StyledHeadingImg,
  StyledJoinUsBox,
} from './stylesSignInComponent';
import { Modal, Link, IconButton } from '@mui/material';
import ModalFormComponent from './modalForm/ModalFormComponent';
import CloseIcon from '@mui/icons-material/Close';

const SignInComponent = ({ active, setActive, handleClose }) => {
  return (
    <Modal open={active} onClose={handleClose}>
      <StyledWraper>
        <StyledHeadingWraper>
          <IconButton
            sx={{
              color: 'black',
              position: 'absolute',
              top: '5px',
              right: '5px',
            }}
            onClick={handleClose}
            component='span'
          >
            <CloseIcon />
          </IconButton>
          <StyledHeading>
            <StyledHeadingImg>
              <img src='./img/swooshBlack.png' alt='логотип найк' />
            </StyledHeadingImg>
            <StyledHeadingText>
              YOUR ACCOUNT FOR EVERYTHING NIKE
            </StyledHeadingText>
          </StyledHeading>
          <ModalFormComponent />
          <StyledJoinUsBox>
            Not a member?
            <Link href='/registration'>Join Us.</Link>
          </StyledJoinUsBox>
        </StyledHeadingWraper>
      </StyledWraper>
    </Modal>
  );
};

export default SignInComponent;
