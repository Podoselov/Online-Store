import React, { useCallback, useEffect } from 'react';
import {
  StyledBoxContainer,
  StyledTypography,
  StyledItemBox,
} from './stylesSliderComponent';
import SliderItemComponent from './SliderItemComponent';
import { useDispatch, useSelector } from 'react-redux';
import {
  getAllProducts,
  getPopularProduct,
} from '../../../store/actions/actions';
import Carousel from 'react-elastic-carousel';

const SliderComponent = () => {
  const dispatch = useDispatch();
  const popularSoes = useSelector((state) => state.products.popular);

  const getPopularSoes = useCallback(async () => {
    dispatch(getAllProducts());
  }, []);

  const clickOnOnePopularProduct = (idProduct) => {
    dispatch(getPopularProduct(idProduct));
  };

  useEffect(() => {
    getPopularSoes();
  }, []);

  const breakPoints = [
    { width: 1, itemsToShow: 1 },
    { width: 500, itemsToShow: 2 },
    { width: 850, itemsToShow: 3 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 1 },
  ];
  return (
    <StyledBoxContainer>
      <StyledItemBox>
        <StyledTypography variant='h4'>Popular Right Now</StyledTypography>
        <Carousel breakPoints={breakPoints}>
          {popularSoes.map(
            ({ name, currentPrice, brand, urlImg, idProduct }) => {
              return (
                <SliderItemComponent
                  clickOnOneProduct={() => {
                    clickOnOnePopularProduct(idProduct);
                  }}
                  idProduct={idProduct}
                  key={idProduct}
                  img={urlImg}
                  heading={name}
                  linkText={brand}
                  price={`$${currentPrice}`}
                />
              );
            }
          )}
        </Carousel>
      </StyledItemBox>
    </StyledBoxContainer>
  );
};

export default SliderComponent;
