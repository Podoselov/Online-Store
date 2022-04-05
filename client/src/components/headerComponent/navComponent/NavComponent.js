import React from 'react';
import { ListItem, Link } from '@mui/material';
import { StyledLink, StyledList } from './stylesNavComponent';
import { useDispatch } from 'react-redux';
import { getAllProductsFromServer } from '../../../store/actions/actions';
import { useNavigate } from 'react-router-dom';

const NavComponent = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const showAllProducts = (e) => {
    e.preventDefault();
    dispatch(getAllProductsFromServer());
    navigate('/products');
  };

  return (
    <nav>
      <StyledList>
        <ListItem>
          <StyledLink to='/'>Home</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/products'>Products</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/products'>Men</StyledLink>
        </ListItem>
        <ListItem>
          <StyledLink to='/products'>Women</StyledLink>
        </ListItem>
        <ListItem>
          <Link
            sx={{
              display: 'block',
              fontWeight: '500',
              fontSize: '16px',
              lineHeight: '1.5',
              color: '#111',
              cursor: 'pointer',
              textDecoration: 'none',
            }}
            onClick={(e) => {
              showAllProducts(e);
            }}
          >
            All
          </Link>
        </ListItem>
      </StyledList>
    </nav>
  );
};

export default NavComponent;
