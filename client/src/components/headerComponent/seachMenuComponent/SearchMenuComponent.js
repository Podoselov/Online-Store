import React from 'react';
import CloseIcon from '@mui/icons-material/Close';
import SearchIcon from '@mui/icons-material/Search';
import {
  StyledBoxContainer,
  StyledIconButton,
  StyledBox,
  StyledSearchIconButton,
  StyledBoxContent,
  StyledTypography,
  StyledList,
  StyledListItem,
  StyledLink,
} from './stylesSearchMenuComponent';
import SerchComponent from '../serchComponent/SearchComponent';

const SearchMenuComponent = ({ actionSearchMenu, setActionSearchMenu }) => {
  return (
    <StyledBoxContainer
      style={
        actionSearchMenu
          ? { transform: 'translateX(0)', transition: '0.1s' }
          : { transform: 'translateX(100%)', transition: '0.1s' }
      }
    >
      <StyledBox>
        <StyledSearchIconButton type='submit' aria-label='search'>
          <SearchIcon />
        </StyledSearchIconButton>

        <SerchComponent />

        <StyledIconButton
          onClick={() => {
            setActionSearchMenu(false);
          }}
          aria-label='close'
        >
          <CloseIcon />
        </StyledIconButton>
      </StyledBox>
      <StyledBoxContent>
        <StyledTypography component='h2'>Popular Search Terms</StyledTypography>
        <StyledList>
          <StyledListItem>
            <StyledLink href='/products'>Air Force 1</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href='/products'>Jordan</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href='/products'>Air Max</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink href='/products'>Blazer</StyledLink>
          </StyledListItem>
        </StyledList>
      </StyledBoxContent>
    </StyledBoxContainer>
  );
};

export default SearchMenuComponent;
