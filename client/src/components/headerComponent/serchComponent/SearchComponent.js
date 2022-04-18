import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './stylesSearchComponent';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchProducts } from '../../../store/actions/actions';

const SearchComponent = () => {
  const [searchValue, setSearchValue] = useState('');

  const navigate = useNavigate();

  const dispatch = useDispatch();

  const searchHandle = (e) => {
    e.preventDefault();
    dispatch(searchProducts(searchValue));
    navigate(`/products?q=${searchValue}&_page=1&_limit=9`);
    setSearchValue('');
  };

  return (
    <Box>
      <Search>
        <SearchIconWrapper>
          <SearchIcon sx={{ fill: 'black' }} />
        </SearchIconWrapper>
        <form
          onSubmit={(e) => {
            searchHandle(e);
          }}
        >
          <StyledInputBase
            onChange={(e) => {
              setSearchValue(e.target.value);
            }}
            value={searchValue}
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </form>
      </Search>
    </Box>
  );
};

export default SearchComponent;
