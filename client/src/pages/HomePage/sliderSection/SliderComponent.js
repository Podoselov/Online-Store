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

const SliderComponent = () => {
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
          <SliderItemComponent
            img='./img/NikeAirMax90SE.jpg'
            heading='Nike Air Max 90 SE'
            linkText='Women`s Shoes'
            price='$140'
          />
          <SliderItemComponent
            img='./img/NikeSBZoomBlazer.jpg'
            heading='Nike SB Zoom Blazer Low Pro GT'
            linkText='Skate Shoes'
            price='$80'
          />
          <SliderItemComponent
            img='./img/NikeAirMax97SE.jpg'
            heading='Nike Air Max 97 SE'
            linkText='Men`s Shoes'
            price='$221'
          />
          <SliderItemComponent
            img='./img/NikeAirMax90.jpg'
            heading='Nike Air Max 90'
            linkText='Men`s Shoes'
            price='$140'
          />
          <SliderItemComponent
            img='./img/NikeBlazerMid77.jpg'
            heading='Nike Blazer Mid 77'
            linkText='Men`s Shoes'
            price='$110'
          />
          <SliderItemComponent
            img='./img/AirMax270.jpg'
            heading='Air Max 270'
            linkText='Big kid`s Shoes'
            price='120'
          />
          <SliderItemComponent
            img='./img/NikeAirMax90LTR.jpg'
            heading='Nike Air Max 90 LTR'
            linkText='Big kid`s Shoes'
            price='100'
          />
        </StyledList>
      </StyledItemBox>
    </StyledBoxContainer>
  );
};

export default SliderComponent;
