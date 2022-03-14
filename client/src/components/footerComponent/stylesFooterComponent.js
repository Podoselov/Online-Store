import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { Typography } from '@mui/material';

export const StyledFooter = styled('footer')(() => ({
  background: '#111',
}));

export const StyledBoxWraper = styled(Box)(() => ({
  marginLeft: 'auto',
  marginRight: 'auto',
  maxWidth: '1440px',
  padding: '40px',
  width: '100%',
}));

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
}));

export const StyledBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  [theme.breakpoints.down('sm')]: {
    paddingBottom: '10px',
  },
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: '400',
  background: 'transparent',
  paddingLeft: '0',
  color: '#757575',
  lineHeight: '1',
  display: 'flex',
}));

export const StyledText = styled(Typography)(() => ({
  fontSize: '10px',
  color: '#7e7e7e',
  lineHeight: '1 !important',
}));
