import { styled, IconButton, List, ListItem, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';

export const StyledBox = styled(Box)(() => ({
  position: 'fixed',
  top: '0',
  right: '0',
  height: '100vh',
  width: '320px',
  backgroundColor: 'rgb(255,255,255)',
  padding: '46px 36px 150px',
}));

export const StyledTypography = styled(Typography)(() => ({
  padding: '7px 0',
  color: '#111',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  textAlign: 'left',
  marginBottom: '16px',
  fontHeight: '500',
  fontSize: '24px',
  lineHeight: '28px',
}));

export const StyledIconButton = styled(IconButton)(() => ({
  color: '#111',
  display: 'flex',
  alignItems: 'center',
  padding: '4px 0',
  fontSize: '16px',
  marginBottom: '28px',
}));

export const StyledLink = styled(Link)(() => ({
  marginRight: '108px',
  padding: '0',
  color: '#757575',
  display: 'flex',
  width: '100%',
  alignItems: 'center',
  cursor: 'pointer',
  textDecoration: 'none',
}));

export const StyledList = styled(List)(() => ({
  paddingTop: '40px',
}));

export const StyledListItem = styled(ListItem)(() => ({
  margin: '0',
  padding: '0',
}));
