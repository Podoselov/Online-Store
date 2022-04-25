import React, { useState } from 'react';
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
} from './stylesSearchMenuComponent';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { InputBase } from '@mui/material';
import { getAllProductsFromServer } from '../../../store/actions/actions';

const SearchMenuComponent = ({ actionSearchMenu, setActionSearchMenu }) => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const searchHandle = (e, value) => {
    e.preventDefault();
    dispatch(getAllProductsFromServer(1, value.toLowerCase()));
    navigate(`/products?q=${value.toLowerCase()}&_page=1&_limit=9`);
    setSearchValue('');
    setActionSearchMenu(false);
  };

  return (
    <StyledBoxContainer
      style={
        actionSearchMenu
          ? { transform: 'translateX(0)', transition: '0.1s' }
          : { transform: 'translateX(100%)', transition: '0.1s' }
      }
    >
      <StyledBox>
        <form
          onSubmit={(e) => {
            searchHandle(e, searchValue);
          }}
        >
          <StyledSearchIconButton type='button' aria-label='search'>
            <SearchIcon />
          </StyledSearchIconButton>
          <InputBase
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
          <StyledBoxContent>
            <StyledTypography component='h2'>
              Popular Search Terms
            </StyledTypography>
            <StyledList>
              <StyledListItem>
                <InputBase
                  type='button'
                  onClick={(e) => {
                    searchHandle(e, 'air');
                  }}
                  value='Air'
                />
              </StyledListItem>
              <StyledListItem>
                <InputBase
                  type='button'
                  onClick={(e) => {
                    searchHandle(e, 'jordan');
                  }}
                  value='Jordan'
                />
              </StyledListItem>
              <StyledListItem>
                <InputBase
                  type='button'
                  onClick={(e) => {
                    searchHandle(e, 'air max');
                  }}
                  value='Air Max'
                />
              </StyledListItem>
              <StyledListItem>
                <InputBase
                  type='button'
                  onClick={(e) => {
                    searchHandle(e, 'blazer');
                  }}
                  value='Blazer'
                />
              </StyledListItem>
            </StyledList>
          </StyledBoxContent>
        </form>
        <StyledIconButton
          onClick={() => {
            setActionSearchMenu(false);
          }}
          aria-label='close'
        >
          <CloseIcon />
        </StyledIconButton>
      </StyledBox>
    </StyledBoxContainer>
  );
};

export default SearchMenuComponent;
