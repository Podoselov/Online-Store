import { styled, Grid, Typography, Container } from '@mui/material';
import { Box } from '@mui/system';

export const StyledContainer = styled(Container)(({ theme }) => ({
  display: 'flex',
  [theme.breakpoints.down('md')]: {
    display: 'block',
    padding: '0 10px',
  },
}));

export const StyledContainerImg = styled(Box)(({ theme }) => ({
  width: 'calc(100% - 256px)',
  margin: '44px 0',
  padding: '0 44px',
  [theme.breakpoints.down('md')]: {
    width: '100%',
    padding: '0',
    '& .rec.rec-pagination': {
      display: 'none',
    },
    '& .rec.rec-arrow': {
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
  },
}));

export const StyledGrid = styled(Grid)(({ theme }) => ({
  minHeight: '300px',
  '& img': {
    width: '100%',
    objectFit: 'cover',
  },
  [theme.breakpoints.down('md')]: {
    display: 'none',
  },
}));

export const StyledContainerInfo = styled(Box)(() => ({
  margin: '44px 0',
}));

export const StyledTypography = styled(Typography)(() => ({
  fontWeight: '500',
  lineHeight: '1.2',
  letterSpacing: '0.007em',
  fontSize: '28px',
}));

export const StyledTypographyBrand = styled(Typography)(() => ({
  paddingBottom: '4px',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '1.5',
}));

export const StyledPrice = styled(Typography)(() => ({
  padding: '12px 8px 4px 0',
  fontWeight: '500',
  fontSize: '16px',
  lineHeight: '1.5',
}));

export const StyledCarouselContainer = styled(Box)(({ theme }) => ({
  display: 'none',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));
