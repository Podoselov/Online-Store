import React from 'react';
import { ListItem } from '@mui/material';
import { StyledLink, StyledList } from './stylesNavComponent';

const NavComponent = () => {
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
          <StyledLink to='/products'>Sale</StyledLink>
        </ListItem>
      </StyledList>
    </nav>
  );
};

export default NavComponent;
