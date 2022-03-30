import { styled, Link, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const StyledLeftMenuWraper = styled(Box)(() => ({
  width: '240px',
  display: 'inline-block',
}));

export const StyledContainer = styled(Box)(() => ({
  margin: '0',
  padding: '0',
  width: '100%',
}));

export const StyledLeftMenuContainer = styled(Box)(() => ({
  position: 'relative',
  background: 'rgb(255, 255, 255)',
  fontSize: '16px',
  lineHeight: '1.5',
  fontWeight: '400',
  padding: '0px 0px 40px 4px',
}));

export const StyledLeftMenuBox = styled(Box)(() => ({
  direction: 'inherit',
  boxSizing: 'border-box !important',
  position: 'relative',
  display: 'flex',
  height: '100%',
  width: 'auto',
  maxWidth: '100%',
  maxHeight: '100%',
  scrollbarWidth: 'none',
  transform: 'translateX(0px)',
  transition: 'all 0.1s ease 0s',
}));

export const StyledLeftMenuCategories = styled(Box)(() => ({}));

export const StyledLeftMenuCategoriesLink = styled(Link)(() => ({
  color: 'rgb(17, 17, 17)',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '1.35em',
  paddingBottom: '10px',
  paddingRight: '1.1em',
  cursor: 'pointer',
  display: 'block',
  textDecoration: 'none',
}));

export const StyledHeadingBox = styled(Box)(({ theme }) => ({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: '20px 0',
  position: 'relative',
  '& button': {
    marginRight: '18px',
    fontSize: '16px',
    color: 'rgb(17, 17, 17)',
    textTransform: 'none',
    '&:hover': {
      background: '#fff',
    },
    '&:active': {
      background: '#fff',
    },
  },
  [theme.breakpoints.down('sm')]: {
    flexDirection: 'column',
  },
}));

export const StyledSortByMenu = styled(Box)(() => ({
  position: 'absolute',
  zIndex: '999',
  top: '80px',
  right: '0',
  display: 'flex',
  flexDirection: 'column',
  '& button': {
    cursor: 'pointer',
    display: 'block',
    marginBottom: '5px',
    textAlign: 'right',
    '&:hover': {
      color: 'rgb(155,155,155)',
    },
  },
}));

export const StyledHeading = styled(Typography)(() => ({
  fontWeight: '500',
  fontSize: '24px',
}));
export const StyledNavBox = styled(Box)(() => ({}));
