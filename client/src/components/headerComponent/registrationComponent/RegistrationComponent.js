import React from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { ListItem, Badge, IconButton } from '@mui/material';
import FavoriteIcon from '@mui/icons-material/Favorite';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import SearchMenuComponent from '../seachMenuComponent/SearchMenuComponent';
import { FAVORITES_ROUTE, BUY_ROUTE } from '../../../pages/utils/consts';
import {
  StyledList,
  StyledButton,
  StyledListItemButton,
  StyledListItemMenu,
  StyledListItemRegistration,
} from './stylesRegistrationComponent';
import MenuComponent from '../menuComponent/MenuComponent';
import SignInComponent from '../../signInComponent/SignInComponent';
import { useSelector } from 'react-redux';

const RegistrationComponent = () => {
  const [menu, setMenu] = useState(false);

  const [search, setSearch] = useState(false);

  const [modal, setModal] = useState(false);

  const bagProduct = useSelector((state) => state.products.bag);

  const favoritesProduct = useSelector((state) => state.products.favorites);

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
              <Badge badgeContent={favoritesProduct.length}>
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
              </Badge>
            </Link>
          </StyledListItemRegistration>
          <StyledListItemRegistration>
            <IconButton onClick={openSignInMenu}>
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
            </IconButton>
            <SignInComponent
              handleClose={closeSignInMenu}
              active={modal}
              setActive={setModal}
            />
          </StyledListItemRegistration>
          <StyledListItemButton>
            <StyledButton onClick={handleOpenSearchMenu}>
              <SearchIcon
                sx={[
                  { color: 'rgb(17,17,17)' },
                  {
                    '&:hover': {
                      color: 'rgb(155,155,155)',
                    },
                  },
                ]}
              />
            </StyledButton>
          </StyledListItemButton>
          <ListItem>
            <Link to={BUY_ROUTE}>
              <Badge badgeContent={bagProduct.length}>
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
              </Badge>
            </Link>
          </ListItem>
          <StyledListItemMenu>
            <StyledButton onClick={openMenu}>
              <MenuIcon
                sx={[
                  { color: 'rgb(17,17,17)' },
                  {
                    '&:hover': {
                      color: 'rgb(155,155,155)',
                    },
                  },
                ]}
              />
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
