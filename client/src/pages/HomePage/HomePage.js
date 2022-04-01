import React from 'react';
import FindFastSectionComponent from './findYourFastSection/FindFastSectionComponent';
import { Container } from '@mui/material';
import SliderComponent from './sliderSection/SliderComponent';

function HomePage() {
  return (
    <Container minwidth='sm' maxWidth='1800px'>
      <FindFastSectionComponent />
      <SliderComponent />
    </Container>
  );
}

export default HomePage;
