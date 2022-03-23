import { styled, Typography } from '@mui/material';
import { Box } from '@mui/system';
import { Field } from 'formik';

export const StyledBox = styled(Box)(() => ({}));
export const StyledTypography = styled(Typography)(() => ({
  textAlign: 'center',
  marginLeft: '10px',
  padding: '7px 0 8px',
  fontSize: '12px',
}));

export const StyledStatusButton = styled(Field)(() => ({
  backgroundColor: '#fff',
  border: '1px solid #e5e5e5',
  borderRadius: '3px',
  color: '#8d8d8d',
  font: '14px Helvetica',
  height: '40px',
  lineHeight: '17px',
  padding: '0 16px',
  width: '100%',
  cursor: 'pointer',
  '&:focus': {
    border: '1px solid #111',
    color: '#111',
  },
}));

export const StyledButtonBox = styled(Box)(() => ({
  paddingTop: '40px',
  display: 'flex',
  justifyContent: 'space-between',
}));
