import React from 'react';
import { ListItem } from '@mui/material';
import { StyledLink, StyledList } from './stylesNavComponent';
import { useDispatch } from 'react-redux';
import { getAllProductsFromServer } from '../../../store/actions/actions';

const NavComponent = () => {
  const dispatch = useDispatch();

  const showAllProducts = () => {
    dispatch(getAllProductsFromServer());
  };

  return (
    <nav>
      <StyledList>
        <ListItem>
          <StyledLink to='/'>Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink onClick={showAllProducts} to='/products?_page=1&_limit=9'>
            Products
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/products'>Men</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/products'>Women</StyledLink>
        </ListItem>
      </StyledList>
    </nav>
  );
};

export default NavComponent;
