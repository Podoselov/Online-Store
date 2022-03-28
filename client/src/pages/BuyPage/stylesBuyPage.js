import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';

export const StyledBox = styled(Box)(({ theme }) => ({
  paddingTop: '40px',
  display: 'flex',
  justifyContent: 'space-around',
  [theme.breakpoints.down('md')]: {
    display: 'block',
  },
}));

export const StyledBagBox = styled(Box)(() => ({
  width: '66,6%',
}));

export const StyledTypographyHeading = styled(Typography)(() => ({
  fontWeight: '500',
  fontSize: '22px',
  lineHeight: '1.5',
}));

export const StyledTypographyText = styled(Typography)(() => ({
  marginBottom: '20px',
}));

export const StyledPriceBox = styled(Box)(() => ({
  width: '33,3%',
  marginBottom: '16px',
}));

export const StyledHeadingPrice = styled(Typography)(() => ({
  fontSize: '22px',
  fontWeight: '500',
  paddingLeft: '10px',
}));

export const StyledPriceContainer = styled(Box)(() => ({
  margin: '12px',
  padding: '16px 0px 12px',
  borderTop: '1px solid rgb(229, 229, 229)',
  borderBottom: '1px solid rgb(229, 229, 229)',
  display: 'flex',
  justifyContent: 'space-between',
}));

export const StyledPriceTotal = styled(Typography)(() => ({
  fontWeight: '500',
  lineHeight: '1.5',
  fontSize: '16px',
  padding: '0px',
}));

export const StyledPriceElement = styled(Typography)(() => ({
  fontWeight: '500',
  lineHeight: '1.5',
  fontSize: '16px',
  textAlign: 'right',
  padding: '0px 0px 0px 150px',
}));
