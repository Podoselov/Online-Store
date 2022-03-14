import { styled, AppBar } from '@mui/material';
import { Box } from '@mui/system';

export const StyledAppBar = styled(AppBar)(() => ({
  background: '#fff',
  width: '100%',
  padding: '0 10px',
}));

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
}));
