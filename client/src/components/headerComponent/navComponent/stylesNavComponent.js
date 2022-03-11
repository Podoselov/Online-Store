import { List, styled } from '@mui/material';
import { Link } from 'react-router-dom';

export const StyledList = styled(List)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  margin: '0',
  padding: '0',
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StyledLink = styled(Link)(() => ({
  display: 'block',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '1.5',
  color: '#111',
  cursor: 'pointer',
  textDecoration: 'none',
}));
