import { Box } from '@mui/system';
import {
  styled,
  IconButton,
  InputBase,
  Typography,
  List,
  ListItem,
  Button,
} from '@mui/material';

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  zIndex: '5',
  height: '100vh',
  position: 'fixed',
  top: '0',
  left: '0',
  textAlign: 'right',
  width: '100vw',
  background: '#fff',
  overflowY: 'scroll',
  padding: '8px 0',
  margin: '0',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));

export const StyledBox = styled(Box)(() => ({
  margin: '0 74px 0 24px',
  display: 'flex',
  justifyContent: 'left',
}));

export const StyledSearchIconButton = styled(IconButton)(() => ({
  padding: '6px 8px',
  outline: 'none',
  background: '#e5e5e5',
}));

export const StyledInputBase = styled(InputBase)(() => ({
  background: '#f5f5f5',
  width: '100%',
  cursor: 'text',
  margin: '0 70px 0 0',
  transition: 'background .15s,color .35s .5s',
  height: '40px',
  borderRadius: '100px',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '1.5',
}));

export const StyledIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  top: '6px',
  right: '24px',
  borderRadius: '100px',
  animation: 'b .25s ease .45s forwards',
  cursor: 'pointer',
}));

export const StyledBoxContent = styled(Box)(() => ({
  paddingTop: '48px',
}));

export const StyledList = styled(List)(() => ({
  listStyle: 'none',
  listStyleType: 'none',
  margin: '0',
}));

export const StyledLink = styled(Button)(() => ({
  cursor: 'pointer',
  fontWeight: '500',
  fontSize: '20px',
  lineHeight: '1.2',
  color: '#111',
  textDecoration: 'none',
}));

export const StyledListItem = styled(ListItem)(() => ({}));

export const StyledTypography = styled(Typography)(() => ({
  color: '#757575',
  margin: '0',
  padding: '0',
  textAlign: 'left',
  paddingLeft: '18px',
}));
