import { styled, Typography, Button } from '@mui/material';
import { Box } from '@mui/system';
import { Form, Field } from 'formik';

export const StyledForm = styled(Form)(() => ({
  margin: '20px 0 12px',
  fontSize: '16px',
  lineHeight: '24px',
  fontWeight: '400',
}));

export const StyledTypography = styled(Typography)(() => ({
  fontSize: '16px',
  lineHeight: '1,5',
  fontWeight: '500',
}));

export const StyledField = styled(Field)(() => ({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  backgroundColor: '#fff',
  color: '#111',
  padding: '14px 0',
  borderRadius: '4px',
  cursor: 'pointer',
  border: '1px solid rgb(227,227,227)',
  '&:focus': {
    border: '1px solid #111',
  },
  '&:hover': {
    border: '1px solid #111',
  },
}));

export const StyledButtonBag = styled(Button)(() => ({
  backgroundColor: '#111',
  borderRadius: '30px',
  color: '#fff',
  font: '14px',
  height: '50px',
  lineHeight: '17px',
  padding: '17px 23px',
  width: '100%',
  cursor: 'pointer',
  marginBottom: '10px',
  '&:hover': {
    backgroundColor: '#757575',
  },
}));

export const StyledButtonFavorites = styled(Button)(() => ({
  backgroundColor: '#fff',
  border: '1px solid #757575',
  borderRadius: '30px',
  color: '#111',
  font: '14px ',
  height: '50px',
  lineHeight: '17px',
  padding: '17px 23px',
  width: '100%',
  cursor: 'pointer',
  '&:hover': {
    border: '1px solid #111',
  },
}));

export const StyledFieldBox = styled(Box)(() => ({
  display: 'grid',
  gridTemplateColumns: 'repeat(5, 1fr)',
  gap: '7px',
  margin: '8px 0',
}));
