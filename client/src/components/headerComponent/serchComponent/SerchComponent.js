import React from 'react';
import { Box } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import {
  Search,
  SearchIconWrapper,
  StyledInputBase,
} from './stylesSearchComponent';

const SerchComponent = () => {
  return (
    <Box>
      <Search
        onChange={(e) => {
          console.log(e.target.value);
        }}
      >
        <SearchIconWrapper>
          <SearchIcon sx={{ fill: 'black' }} />
        </SearchIconWrapper>
        <form
          action='/products'
          method='get'
          onSubmit={(e) => {
            console.log(e.target.value);
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
