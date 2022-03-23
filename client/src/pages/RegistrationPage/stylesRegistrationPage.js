import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const StyledWraper = styled(Box)(() => ({
  padding: '50px',
}));

export const StyledContainer = styled(Box)(() => ({
  margin: '50px auto 0',
  padding: '0',
  border: '0',
  minHeight: '720px',
}));

export const StyledBox = styled(Box)(() => ({
  backgroundColor: '#fff',
  color: '#8d8d8d',
  fontSize: '14px',
  margin: 'auto',
  maxWidth: '380px',
  padding: '28px',
  textAlign: 'left',
}));

export const StyledHeader = styled('header')(() => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

export const StyledTypography = styled(Typography)(() => ({
  color: '#111',
  fontSize: '26px',
  lineHeight: '26px',
  maxWidth: '25ch',
  padding: '32px 0 26px',
  textAlign: 'center',
  fontWeight: '700',
}));

export const StyledText = styled(Typography)(() => ({
  paddingBottom: '15px',
  lineHeight: '22px',
  fontWeight: '400px',
  fontSize: '14px',
  textAlign: 'center',
}));
