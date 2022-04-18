import React from 'react';
import { ListItem } from '@mui/material';
import { StyledLink, StyledList } from './stylesNavComponent';
import { useDispatch, useSelector } from 'react-redux';
import { getAllProductsFromServer } from '../../../store/actions/actions';

const NavComponent = () => {
  const dispatch = useDispatch();

  const path = useSelector(({ products }) => products.path);

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
          <StyledLink onClick={showAllProducts} to={path}>
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
