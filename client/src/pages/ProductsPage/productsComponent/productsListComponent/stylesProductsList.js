import { styled, Grid } from '@mui/material';
import { Box } from '@mui/system';

export const StyledGridContainer = styled(Grid)(() => ({
  position: 'relative',
  paddingBottom: '150px',
}));

export const StyledPaginationBox = styled(Box)(() => ({
  left: '46%',
  bottom: '0',
  padding: '30px 0',
  position: 'fixed',
}));
