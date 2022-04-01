import React from 'react';
import { useState } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/material';
import NavigateNextIcon from '@mui/icons-material/NavigateNext';
import CloseIcon from '@mui/icons-material/Close';
import HomeIcon from '@mui/icons-material/Home';
import {
  StyledIconButton,
  StyledBox,
  StyledButton,
  StyledList,
  StyledListItem,
  StyledSpan,
  StyledListCollection,
  StyledListCollectionItem,
  StyledListCollectionLink,
  StyledListCollectionSpan,
  StyledBoxContainer,
} from './stylesMenuComponent';
import ConverseIcon from './iconComponent/ConverseIcon';
import JordanIcon from './iconComponent/JordanIcon';
import RegistrationComponent from './registrationComponent/RegistrationComponent';
import ProductMenuComponent from './productMenuComponent/ProductMenuComponent';
import FavoriteIcon from '@mui/icons-material/Favorite';

const MenuComponent = ({ active, setActive }) => {
  const [product, setProductState] = useState(false);

  const handleOpenProductMenu = () => setProductState(true);

  const handleClose = () => setActive(false);

  return (
    <StyledBoxContainer
      onClick={() => {
        setActive(false);
        setProductState(false);
      }}
      style={
        active
          ? { transform: 'translateX(0)', transition: '0.1s' }
          : { transform: 'translateX(100%)', transition: '0.1s' }
      }
    >
      {!product ? (
        <StyledBox
          onClick={(event) => {
            event.stopPropagation();
          }}
        >
          <Box>
            <StyledIconButton onClick={handleClose} aria-label='close'>
              <CloseIcon />
            </StyledIconButton>
            <StyledList>
              <StyledListItem>
                <StyledButton
                  onClick={handleOpenProductMenu}
                  variant='text'
                  endIcon={<NavigateNextIcon />}
                >
                  <StyledSpan>Products</StyledSpan>
                </StyledButton>
              </StyledListItem>
            </StyledList>
            <StyledListCollection>
              <StyledListCollectionItem>
                <StyledListCollectionLink href='/products'>
                  <JordanIcon />
                  <StyledListCollectionSpan>Jordan</StyledListCollectionSpan>
                </StyledListCollectionLink>
              </StyledListCollectionItem>
              <StyledListCollectionItem>
                <StyledListCollectionLink href='/products'>
                  <ConverseIcon />
                  <StyledListCollectionSpan>Converse</StyledListCollectionSpan>
                </StyledListCollectionLink>
              </StyledListCollectionItem>
              <StyledListCollectionItem>
                <StyledListCollectionLink href='/favorites'>
                  <FavoriteIcon sx={{ fontSize: '30px' }} />
                  <StyledListCollectionSpan>Favorites</StyledListCollectionSpan>
                </StyledListCollectionLink>
              </StyledListCollectionItem>
              <StyledListCollectionItem>
                <StyledListCollectionLink href='/'>
                  <HomeIcon fontSize='large' />
                  <StyledListCollectionSpan>Home</StyledListCollectionSpan>
                </StyledListCollectionLink>
              </StyledListCollectionItem>
            </StyledListCollection>
            <RegistrationComponent />
          </Box>
        </StyledBox>
      ) : null}
      <ProductMenuComponent
        activeProduct={product}
        setActiveProduct={setProductState}
      />
    </StyledBoxContainer>
  );
};

MenuComponent.defaultProps = {
  active: false,
};

MenuComponent.propTypes = {
  active: PropTypes.bool,
  setActive: PropTypes.func,
};

export default MenuComponent;
