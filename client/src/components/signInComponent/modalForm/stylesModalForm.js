import { styled, Button } from '@mui/material';
import { Field, Form, ErrorMessage } from 'formik';

export const StyledForm = styled(Form)(() => ({
  backgroundColor: '#fff',
  color: '#8d8d8d',
  margin: 'auto',
  maxWidth: '400px',
}));

export const StyledButton = styled(Button)(() => ({
  backgroundColor: '#000',
  border: '1px solid #000',
  borderRadius: '3px',
  color: '#fff',
  cursor: 'pointer',
  display: 'block',
  fontSize: '15px',
  margin: 'auto',
  marginTop: '20px',
  height: '40px',
  width: '100%',
  '&:hover': {
    background: '#000',
  },
}));

export const StyledPassField = styled(Field)(() => ({
  border: '1px solid #e5e5e5',
  borderRadius: '3px',
  color: '#8d8d8d',
  fontSize: '14px',
  height: '40px',
  lineHeight: '17px',
  padding: '0 16px',
  width: '100%',
}));

export const StyledMailField = styled(Field)(() => ({
  border: '1px solid #e5e5e5',
  borderRadius: '3px',
  boxSizing: 'border-box',
  color: '#8d8d8d',
  fontSize: '14px',
  height: '40px',
  lineHeight: '17px',
  padding: '0 16px',
  width: '100%',
  marginBottom: '10px',
}));

export const StyledErrorMessage = styled(ErrorMessage)(() => ({}));
