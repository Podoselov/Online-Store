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
import { useDispatch, useSelector } from 'react-redux';
import {
  setProductBag,
  addFavoritesCard,
  removeFavoritesCard,
} from '../../../store/actions/actions';

const ProductFormComponent = ({ size, product }) => {
  const dispatch = useDispatch();

  const productFavorites = useSelector((state) => state.products.favorites);

  const isProductFavorites = productFavorites.some(
    (element) => element.idProduct === product.idProduct
  );

  const addToFavorites = () => {
    isProductFavorites
      ? dispatch(removeFavoritesCard(product.idProduct))
      : dispatch(addFavoritesCard(product));
  };

  const SignupSchema = Yup.object().shape({
    size: Yup.string().required('Please enter a size.'),
  });

  return (
    <Formik
      initialValues={{
        size: '',
      }}
      validationSchema={SignupSchema}
      onSubmit={(values, action) => {
        const bagProduct = {
          idProduct: Date.now(),
          name: product.name,
          urlImg: product.urlImg,
          currentPrice: product.currentPrice,
          size: values.size,
          categories: product.categories,
        };

        dispatch(setProductBag(bagProduct));
        values.size = '';
        action.resetForm();
      }}
    >
      {({ values }) => (
        <StyledForm>
          <StyledTypography variant='h2'>Select Size</StyledTypography>
          <StyledFieldBox>
            {size[0].map((element) => {
              return (
                <StyledField
                  onClick={(e) => {
                    values.size = e.target.value;
                  }}
                  key={element}
                  name='size'
                  type='button'
                  value={element}
                />
              );
            })}
          </StyledFieldBox>
          <StyledErrorMessage name='size' component='div' />
          <StyledButtonBag type='submit'>Add to Bag</StyledButtonBag>
          <StyledButtonFavorites
            onClick={addToFavorites}
            type='button'
            endIcon={<FavoriteBorderIcon />}
          >
            Favorite
          </StyledButtonFavorites>
        </StyledForm>
      )}
    </Formik>
  );
};

export default ProductFormComponent;
