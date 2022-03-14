import {
  styled,
  IconButton,
  Button,
  List,
  ListItem,
  Link,
} from '@mui/material';
import { Box } from '@mui/system';

export const StyledBox = styled(Box)(() => ({
  position: 'fixed',
  top: '0',
  right: '0',
  height: '100vh',
  width: '320px',
  backgroundColor: 'rgb(255,255,255)',
  padding: '0 36px 150px',
}));

export const StyledIconButton = styled(IconButton)(() => ({
  position: 'absolute',
  display: 'block',
  top: '16px',
  right: '26px',
  margin: '0',
  padding: '0',
  width: '18px',
  height: '18px',
}));

export const StyledButton = styled(Button)(() => ({
  textTransform: 'none',
  fontWeight: '500',
  fontSize: '24px',
  color: '#111',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
  border: 'none',
  cursor: 'pointer',
}));

export const StyledList = styled(List)(() => ({
  paddingTop: '40px',
}));

export const StyledListItem = styled(ListItem)(() => ({
  margin: '0',
  padding: '10px 0',
}));

export const StyledSpan = styled('span')(() => ({
  marginRight: '108px',
}));

export const StyledListCollection = styled(List)(() => ({}));
export const StyledListCollectionItem = styled(ListItem)(() => ({}));
export const StyledListCollectionLink = styled(Link)(() => ({
  width: '100%',
  textTransform: 'none',
  fontWeight: '500',
  fontSize: '16px',
  color: '#111',
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'flex',
  alignItems: 'center',
}));

export const StyledListCollectionSpan = styled('span')(() => ({
  padding: '0 0 0 12px',
  lineHeight: '1',
}));

export const StyledBoxContainer = styled(Box)(({ theme }) => ({
  position: 'fixed',
  zIndex: '1',
  left: '0',
  top: '0',
  width: '100%',
  height: '100%',
  overflow: 'auto',
  backgroundColor: 'rgba(0, 0, 0, 0.4)',
  [theme.breakpoints.up('md')]: {
    display: 'none',
  },
}));
