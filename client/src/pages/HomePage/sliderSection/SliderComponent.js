import React from 'react';
import {
  StyledBox,
  StyledBoxContainer,
  StyledTypography,
  StyledItemBox,
  StyledList,
} from './stylesSliderComponent';
import { ButtonGroup, IconButton } from '@mui/material';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SliderItemComponent from './SliderItemComponent';
import { useDispatch, useSelector } from 'react-redux';
import getAllProducts from '../../../store/actions/actions';

const SliderComponent = () => {
  const dispatch = useDispatch();
  const popularSoes = useSelector((state) => state.products.all);

  const getPopularSoes = useCallback(async () => {
    dispatch(getAllProducts());
  }, []);

  useEffect(() => {
    getPopularSoes();
  }, []);

  return (
    <StyledBoxContainer>
      <StyledBox>
        <StyledTypography variant='h4'>Popular Right Now</StyledTypography>
        <ButtonGroup>
          <IconButton>
            <ArrowBackIosNewIcon sx={{ color: 'black' }} />
          </IconButton>
          <IconButton>
            <ArrowForwardIosIcon sx={{ color: 'black' }} />
          </IconButton>
        </ButtonGroup>
      </StyledBox>
      <StyledItemBox>
        <StyledList>
          {popularSoes.map(({ name, price, collection, urlImg, idProduct }) => {
            return (
              <SliderItemComponent
                key={idProduct}
                img={urlImg}
                heading={name}
                linkText={collection}
                price={price}
              />
            );
          })}
        </StyledList>
      </StyledItemBox>
    </StyledBoxContainer>
  );
};

export default SliderComponent;
