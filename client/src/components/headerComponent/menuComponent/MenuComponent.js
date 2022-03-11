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
import MenComponent from './menMenuComponent/MenComponent';
import WomenComponent from './womenMenuComponent/WomenComponent';
import SaleComponent from './saleMenuComponent/SaleComponent';

const MenuComponent = ({
  active,
  setActive,
  activeMen,
  setActiveMen,
  activeSale,
  setActiveSale,
  activeWomen,
  setActiveWomen,
}) => {
  const [product, setProductState] = useState(false);
  const [men, setMenState] = useState(false);
  const [women, setWomenState] = useState(false);
  const [sale, setSaleState] = useState(false);

  const handleOpenProductMenu = () => setProductState(true);
  const handleOpenMenMenu = () => setMenState(true);
  const handleOpenWomenMenu = () => setWomenState(true);
  const handleOpenSaleMenu = () => setSaleState(true);

  const handleClose = () => setActive(false);

  return (
    <StyledBoxContainer
      onClick={() => {
        setActive(false);
        setProductState(false);
        setWomenState(false);
        setMenState(false);
        setSaleState(false);
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
              <StyledListItem>
                <StyledButton
                  onClick={handleOpenMenMenu}
                  variant='text'
                  endIcon={<NavigateNextIcon />}
                >
                  <StyledSpan>Men</StyledSpan>
                </StyledButton>
              </StyledListItem>
              <StyledListItem>
                <StyledButton
                  onClick={handleOpenWomenMenu}
                  variant='text'
                  endIcon={<NavigateNextIcon />}
                >
                  <StyledSpan>Women</StyledSpan>
                </StyledButton>
              </StyledListItem>
              <StyledListItem>
                <StyledButton
                  onClick={handleOpenSaleMenu}
                  variant='text'
                  endIcon={<NavigateNextIcon />}
                >
                  <StyledSpan>Sale</StyledSpan>
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
                <StyledListCollectionLink href='/'>
                  <HomeIcon fontSize='large' />
                  <StyledListCollectionSpan sx={{ paddingLeft: '6px' }}>
                    Home
                  </StyledListCollectionSpan>
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
      <MenComponent activeMen={men} setActiveMen={setMenState} />
      <WomenComponent activeWomen={women} setActiveWomen={setWomenState} />
      <SaleComponent activeSale={sale} setActiveSale={setSaleState} />
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
