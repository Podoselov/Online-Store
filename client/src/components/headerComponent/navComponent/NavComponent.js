import React from 'react';
import { ListItem } from '@mui/material';
import { StyledLink, StyledList } from './stylesNavComponent';
import { useDispatch } from 'react-redux';
import {
  getAllProductsFromServer,
  getAllMenProducts,
  getAllWomenProducts,
} from '../../../store/actions/actions';

const NavComponent = () => {
  const dispatch = useDispatch();

  const showAllProducts = () => {
    dispatch(getAllProductsFromServer());
  };

  const showMenProducts = () => {
    dispatch(getAllMenProducts());
  };

  const showWomenProducts = () => {
    dispatch(getAllWomenProducts());
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
          <StyledLink
            onClick={showMenProducts}
            to='/products?_limit=9&category=men&_page=1'
          >
            Men
          </StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink
            onClick={showWomenProducts}
            to='/products?_limit=9&category=women&_page=1'
          >
            Women
          </StyledLink>
        </ListItem>
      </StyledList>
    </nav>
  );
};

export default NavComponent;
