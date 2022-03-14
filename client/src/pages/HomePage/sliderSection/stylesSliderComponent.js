import { styled } from '@mui/styles';
import { Box } from '@mui/system';
import { Typography, List, ListItem, Link } from '@mui/material';

export const StyledBoxContainer = styled(Box)(() => ({}));
export const StyledBox = styled(Box)(() => ({
  margin: '11px 0',
  width: '100%',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: '500',
  fontSize: '24px',
  lineHeight: '28px',
}));

export const StyledItemBox = styled(Box)(() => ({}));

export const StyledList = styled(List)(() => ({
  display: 'flex',
  flexWrap: 'nowrap',
}));

export const StyledListItem = styled(ListItem)(() => ({
  flex: '0 0 calc(33% - 5px)',
}));

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
