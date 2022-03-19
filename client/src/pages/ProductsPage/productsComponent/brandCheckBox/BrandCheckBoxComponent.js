import React from 'react';
import { BrandBox } from './stylesBrandCheckBox';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const BrandCheckBoxComponent = () => {
  return (
    <BrandBox>
      <p>Shop by Price</p>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Nike Sportswear'
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Jordan'
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Nike By You'
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Converse'
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='NikeLab'
        />
        <FormControlLabel control={<Checkbox color='default' />} label='ACG' />
      </FormGroup>
    </BrandBox>
  );
};

export default BrandCheckBoxComponent;
