import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { ListItem } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SearchMenuComponent from '../seachMenuComponent/SearchMenuComponent';
import {
  FAVORITES_ROUTE,
  BUY_ROUTE,
  REGISTRATION_ROUTE,
} from '../../../pages/utils/consts';
import {
  StyledList,
  StyledButton,
  StyledListItemButton,
  StyledListItemMenu,
  StyledListItemRegistration,
} from './stylesRegistrationComponent';
import MenuComponent from '../menuComponent/MenuComponent';
import SignInComponent from '../../signInComponent/SignInComponent';

const RegistrationComponent = () => {
  const [menu, setMenu] = useState(false);
  const [search, setSearch] = useState(false);
  const [modal, setModal] = useState(false);

  const openSignInMenu = () => setModal(true);
  const closeSignInMenu = () => setModal(false);
  const handleOpenSearchMenu = () => setSearch(true);
  const openMenu = () => {
    return setMenu(!menu);
  };

  return (
    <>
      <div>
        <StyledList sx={{ paddingTop: '12px' }}>
          <StyledListItemRegistration>
            <Link to={FAVORITES_ROUTE}>
              <FavoriteIcon
                sx={[
                  { color: 'rgb(17,17,17)' },
                  {
                    '&:hover': {
                      color: 'rgb(155,155,155)',
                    },
                  },
                ]}
              />
            </Link>
          </StyledListItemRegistration>
          <StyledListItemRegistration>
            <Link to={REGISTRATION_ROUTE} onClick={openSignInMenu}>
              <HowToRegIcon
                sx={[
                  { color: 'rgb(17,17,17)' },
                  {
                    '&:hover': {
                      color: 'rgb(155,155,155)',
                    },
                  },
                ]}
              />
            </Link>
            <SignInComponent
              handleClose={closeSignInMenu}
              active={modal}
              setActive={setModal}
            />
          </StyledListItemRegistration>
          <StyledListItemButton>
            <StyledButton onClick={handleOpenSearchMenu}>
              <SearchIcon />
            </StyledButton>
          </StyledListItemButton>
          <ListItem>
            <Link to={BUY_ROUTE}>
              <ShoppingCartIcon
                sx={[
                  { color: 'rgb(17,17,17)' },
                  {
                    '&:hover': {
                      color: 'rgb(155,155,155)',
                    },
                  },
                ]}
              />
            </Link>
          </ListItem>
          <StyledListItemMenu>
            <StyledButton onClick={openMenu}>
              <MenuIcon />
            </StyledButton>
          </StyledListItemMenu>
        </StyledList>
      </div>
      <Box>
        <MenuComponent active={menu} setActive={setMenu} />
      </Box>
      <SearchMenuComponent
        actionSearchMenu={search}
        setActionSearchMenu={setSearch}
      />
    </>
  );
};

export default RegistrationComponent;
