import { styled, Typography, Link } from '@mui/material';
import { Box } from '@mui/system';

export const StyledBox = styled(Box)(() => ({
  display: 'flex',
  flexDirection: 'column',
  marginTop: '50px',
  paddingTop: '48px',
  marginRight: '12px',
}));

export const StyledTypography = styled(Typography)(() => ({
  color: '#757575',
  paddingBottom: '16px',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '1.2',
  width: '236px',
}));

export const StyledJoinUsLink = styled(Link)(() => ({
  padding: '4.5px 16px',
  borderRadius: '30px',
  border: '1.5px solid transparent',
  alignItems: 'center',
  background: '#111',
  color: '#fff',
  justifyContent: 'center',
  fontSize: '16px',
  lineHeight: '24px',
  textTransform: 'none',
  textDecoration: 'none',
  marginRight: '10px',
  '&:hover': {
    background: '#999',
  },
}));

export const StyledSignInLink = styled(Link)(() => ({
  padding: '4.5px 18.5px',
  borderRadius: '30px',
  border: '1.5px solid transparent',
  alignItems: 'center',
  borderColor: '#ccc',
  color: '#111',
  justifyContent: 'center',
  fontSize: '16px',
  lineHeight: '24px',
  textTransform: 'none',
  textDecoration: 'none',
  '&:hover': {
    background: '#999',
    color: '#fff',
  },
}));

export const StyledButtonBox = styled(Box)(() => ({
  display: 'flex',
}));
