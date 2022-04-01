import React, { useState } from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './stylesSearchComponent';
import { useNavigate } from 'react-router-dom';

const SerchComponent = () => {
  const navigate = useNavigate();
  const [searchValue, setSearchValue] = useState('');

  const addValueInState = (value) => {
    console.log(searchValue);
    setSearchValue(value);
  };

  return (
    <Box>
      <Search
        onChange={(e) => {
          addValueInState(e.target.value);
        }}
      >
        <SearchIconWrapper>
          <SearchIcon sx={{ fill: 'black' }} />
        </SearchIconWrapper>
        <form
          onSubmit={(e) => {
            navigate('/products');
          }}
        >
          <StyledInputBase
            placeholder='Search…'
            inputProps={{ 'aria-label': 'search' }}
          />
        </form>
      </Search>
    </Box>
  );
};

export default SerchComponent;
