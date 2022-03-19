import React from 'react';
import { PriceBox } from './stylesPriseCheckBox';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const PriceCheckBoxComponent = () => {
  return (
    <PriceBox>
      <p>Shop by Price</p>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='$0 - $25'
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='$25 - $50'
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='$50 - $100'
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='$100 - $150'
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Over $150'
        />
      </FormGroup>
    </PriceBox>
  );
};

export default PriceCheckBoxComponent;
