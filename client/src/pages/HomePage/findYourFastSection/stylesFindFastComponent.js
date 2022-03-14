import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { Typography, Link } from '@mui/material';

export const StyledBox = styled(Box)(({ theme }) => ({
  position: 'relative',
  height: '100%',
  '& video': {
    position: 'relative',
    top: '0',
    left: '0',
    width: '100%',
    height: 'auto',
    objectFit: 'cover',
    [theme.breakpoints.down('sm')]: {
      display: 'none',
    },
  },
  '& img': {
    maxWidth: '100%',
    display: 'none',
    [theme.breakpoints.down('sm')]: {
      display: 'block',
    },
  },
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontSize: '72px',
  lineHeight: '60px',
  fontWeight: '500',
  color: ' #111111',
  padding: '48px 0 30px',
  textTransform: 'uppercase',
  [theme.breakpoints.down('md')]: {
    fontSize: '48px',
    lineHeight: '40px',
  },
}));

export const StyledTextTypography = styled(Typography)(() => ({
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
  color: ' #111111',
}));

export const StyledSignInLink = styled(Link)(() => ({
  padding: '4.5px 18.5px',
  borderRadius: '30px',
  border: '1.5px solid transparent',
  alignItems: 'center',
  borderColor: '#ccc',
  color: '#fff',
  justifyContent: 'center',
  fontSize: '16px',
  lineHeight: '24px',
  textTransform: 'none',
  textDecoration: 'none',
  background: '#111',
  margin: '20px 0',
  '&:hover': {
    background: '#999',
    color: '#fff',
  },
}));

export const StyledButtonBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  [theme.breakpoints.down('md')]: {
    alignItems: 'flex-start',
  },
}));
