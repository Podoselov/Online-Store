import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const StyledCardBox = styled(Box)(() => ({
  width: '100%',
  margin: '20px 0',
  padding: '0',
  display: 'flex',
  justifyContent: 'flex-start',
  position: 'relative',
}));

export const StyledImgBox = styled(Box)(({ theme }) => ({
  width: '180px',
  '& img': {
    width: '100%',
  },
  [theme.breakpoints.down('sm')]: {
    width: '96px',
  },
}));

export const StyledInfoBox = styled(Box)(() => ({
  minHeight: '123px',
  width: '66,6%',
  fontSize: '16px',
  lineHeight: '1.75',
  paddingLeft: '8px',
  paddingRight: '8px',
  position: 'relative',
}));

export const StyledInfoHeading = styled(Typography)(({ theme }) => ({
  color: '#111',
  fontWeight: '500',
  fontSize: '16px',
  [theme.breakpoints.down('sm')]: {
    fontSize: '12px',
  },
}));

export const StyledInfoBrand = styled(Typography)(() => ({
  color: 'rgb(117, 117, 117)',
}));

export const StyledPrice = styled(Typography)(() => ({
  color: 'rgb(17, 17, 17)',
  fontWeight: '400',
  fontSize: '16px',
  marginLeft: '50px',
  position: 'absolute',
  right: '0',
  bottom: '5px',
}));

export const StyledPriceBox = styled(Box)(() => ({}));
