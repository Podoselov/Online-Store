import React from 'react';
import { Toolbar, Grid, Box } from '@mui/material';
import IconComponent from './iconComponent/IconComponent';
import NavComponent from './navComponent/NavComponent';
import SearchComponent from './serchComponent/SearchComponent';
import RegistrationComponent from './registrationComponent/RegistrationComponent';
import { StyledAppBar, StyledBox } from './stylesHeaderComponent';

const HeaderComponent = () => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <StyledAppBar position='static'>
        <Toolbar>
          <Grid
            container
            direction='row'
            justifyContent='space-between'
            alignItems='center'
            wrap='wrap'
          >
            <Grid item>
              <IconComponent />
            </Grid>
            <Grid item>
              <NavComponent />
            </Grid>
            <StyledBox>
              <Grid item>
                <SearchComponent />
              </Grid>
              <Grid item>
                <RegistrationComponent />
              </Grid>
            </StyledBox>
          </Grid>
        </Toolbar>
      </StyledAppBar>
    </Box>
  );
};

export default HeaderComponent;
