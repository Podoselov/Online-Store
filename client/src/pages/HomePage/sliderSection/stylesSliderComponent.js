import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { Typography, ListItem, Link } from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  position: 'relative',
  '& .rec.rec-pagination': {
    display: ' none',
  },
  '& .rec.rec-arrow': {
    position: 'absolute',
    top: '0',
    right: '20px',
    background: '#e5e5e5',
    width: '48px',
    height: '48px',
    borderRadius: '24px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',

    '&:hover': {
      background: '#ccc',
    },
    '&:focus': {
      background: '#ccc',
    },
  },
  '& .rec.rec-arrow-left': {
    right: '100px',
    [theme.breakpoints.down('sm')]: {
      right: '80px',
    },
  },
}));

export const StyledBox = styled(Box)(() => ({
  margin: '11px 0',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledTypography = styled(Typography)(({ theme }) => ({
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '28px',
  padding: '10px 0',
  [theme.breakpoints.down('sm')]: {
    fontSize: '18px',
  },
}));

export const StyledItemBox = styled(Box)(() => ({}));

export const StyledListItem = styled(ListItem)(() => ({}));

export const StyledLink = styled(Link)(() => ({
  display: 'block',
  minHeight: '300px',
  color: '#111',
  cursor: 'pointer',
  textDecoration: 'none',
  fontWeight: '500',
  backgroundColor: 'transparent',
  '& img': {
    width: '100%',
    height: '100',
    objectFit: 'cover',
  },
}));

export const StyledLinkItem = styled(Box)(() => ({}));

export const StyledHeadingItem = styled(Typography)(() => ({
  color: '#111',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '24px',
}));

export const StyledLinkText = styled(Typography)(() => ({
  color: '#757575',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
}));

export const StyledText = styled(Typography)(() => ({
  color: '#111',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '500',
}));

export const StyledLinkBox = styled(Box)(() => ({
  display: 'flex',
  justifyContent: 'space-between',
}));
