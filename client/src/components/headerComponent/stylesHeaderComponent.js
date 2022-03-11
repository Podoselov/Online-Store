import { styled, AppBar } from '@mui/material';
import { Box } from '@mui/system';

export const StyledAppBar = styled(AppBar)(() => ({
  background: 'linear-gradient(45deg, #fff 30%, #000 90%)',
  width: '100%',
  padding: '0 10px',
}));

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
