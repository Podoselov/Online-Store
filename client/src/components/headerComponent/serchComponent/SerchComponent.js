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

const SerchComponent = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');
  const dispatch = useDispatch();

  const searchHandle = (e) => {
    e.preventDefault();
    dispatch(searchProducts(searchValue));
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
            navigate('/products');
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

export default SerchComponent;
