import React from 'react';
import * as Yup from 'yup';
import { Formik } from 'formik';
import {
  StyledButton,
  StyledForm,
  StyledErrorMessage,
  StyledPassField,
  StyledMailField,
} from './stylesModalForm';

const ModalFormComponent = () => {
  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required('Please enter a valid email address.'),
    password: Yup.string()
      .required('Please enter a password.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
  });

  return (
    <Formik
      initialValues={{ email: '', password: '' }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        console.log(values);
        action.resetForm();
      }}
    >
      {({ values }) => (
        <StyledForm>
          <StyledMailField
            type='email'
            name='email'
            placeholder='Email address'
          />
          <StyledErrorMessage name='email' component='div' />
          <StyledPassField
            type='password'
            name='password'
            placeholder='Password'
          />
          <StyledErrorMessage name='password' component='div' />
          <StyledButton type='submit'>SIGN IN</StyledButton>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ModalFormComponent;
