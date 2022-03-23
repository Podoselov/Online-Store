import React, { useState } from 'react';
import {
  StyledBox,
  StyledTypography,
  StyledStatusButton,
  StyledButtonBox,
} from './stylesRegistrationForm';
import { Formik } from 'formik';
import * as Yup from 'yup';
import {
  StyledMailField,
  StyledForm,
  StyledErrorMessage,
  StyledButton,
} from '../../../components/signInComponent/modalForm/stylesModalForm';

const RegistrationFormComponent = () => {
  const [typeDateField, setTypeDateField] = useState(false);

  const SignupSchema = Yup.object().shape({
    email: Yup.string().email().required('Please enter a valid email address.'),
    password: Yup.string()
      .required('Please enter a password.')
      .min(8, 'Password is too short - should be 8 chars minimum.')
      .matches(/[a-zA-Z]/, 'Password can only contain Latin letters.'),
    name: Yup.string().max(40).required('Please enter a correct name.'),
    lastName: Yup.string()
      .max(40)
      .required('Please enter a correct last name.'),
    dateOfBirth: Yup.date()
      .nullable()
      .transform((curr, orig) => (orig === '' ? null : curr))
      .required('Please enter a correct date'),
  });

  return (
    <StyledBox>
      <Formik
        initialValues={{
          email: '',
          password: '',
          name: '',
          lastName: '',
          dateOfBirth: '',
          maritalStatus: '',
        }}
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
            <StyledMailField
              type='password'
              name='password'
              placeholder='Password'
            />
            <StyledErrorMessage name='password' component='div' />
            <StyledMailField type='text' name='name' placeholder='First Name' />
            <StyledErrorMessage name='name' component='div' />
            <StyledMailField
              type='text'
              name='lastName'
              placeholder='Last Name'
            />
            <StyledErrorMessage name='lastName' component='div' />
            <StyledMailField
              name='dateOfBirth'
              type={typeDateField ? 'date' : 'text'}
              placeholder='Date of Birth'
              onFocus={() => setTypeDateField(true)}
            />
            <StyledErrorMessage
              className='error'
              name='dateOfBirth'
              component='div'
            />
            <StyledTypography variant='p'>
              Get a Nike Member Reward every year on your Birthday.
            </StyledTypography>
            <StyledButtonBox>
              <StyledStatusButton
                name='maritalStatus'
                type='button'
                value='Male'
              />
              <StyledStatusButton
                name='maritalStatus'
                type='button'
                value='Female'
              />
            </StyledButtonBox>

            <StyledButton type='submit'>JOIN US</StyledButton>
          </StyledForm>
        )}
      </Formik>
    </StyledBox>
  );
};

export default RegistrationFormComponent;
