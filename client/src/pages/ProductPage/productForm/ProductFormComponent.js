import React from 'react';
import { Formik } from 'formik';
import {
  StyledForm,
  StyledTypography,
  StyledButtonBag,
  StyledButtonFavorites,
  StyledFieldBox,
  StyledField,
} from './stylesProductForm';
import * as Yup from 'yup';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { StyledErrorMessage } from '../../../components/signInComponent/modalForm/stylesModalForm';

const ProductFormComponent = ({ product }) => {
  const SignupSchema = Yup.object().shape({
    size: Yup.number().required('Please enter a size.'),
  });

  return (
    <Formik
      initialValues={{
        size: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        console.log(values);
        action.resetForm();
      }}
    >
      {({ values }) => (
        <StyledForm>
          <StyledTypography variant='h2'>Select Size</StyledTypography>
          <StyledFieldBox>
            {product[0].map((element) => {
              return <StyledField name='size' type='button' value={element} />;
            })}
          </StyledFieldBox>
          <StyledErrorMessage name='size' component='div' />
          <StyledButtonBag type='submit'>Add to Bag</StyledButtonBag>
          <StyledButtonFavorites type='submit' endIcon={<FavoriteBorderIcon />}>
            Favorite
          </StyledButtonFavorites>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ProductFormComponent;
