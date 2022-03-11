import { List, ListItem, styled, IconButton } from '@mui/material';

export const StyledList = styled(List)(() => ({
  display: 'flex',
  paddingTop: '10px',
}));

export const StyledButton = styled(IconButton)(() => ({
  color: 'rgb(121, 121, 121)',
  padding: '0px',
}));

export const StyledListItemButton = styled(ListItem)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('sm')]: {
    display: 'block',
  },
}));

export const StyledListItemMenu = styled(ListItem)(({ theme }) => ({
  paddingRight: '0px',
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const StyledListItemRegistration = styled(ListItem)(({ theme }) => ({
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));
