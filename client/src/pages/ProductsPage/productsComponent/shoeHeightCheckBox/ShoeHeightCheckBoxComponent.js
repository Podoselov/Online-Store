import React from 'react';
import { ShoeBox } from './stylesShoeComponent';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const ShoeHeightCheckBoxComponent = () => {
  return (
    <ShoeBox>
      <p>Shoe Height</p>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Low Top'
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Mid Top'
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='High Top'
        />
      </FormGroup>
    </ShoeBox>
  );
};

export default ShoeHeightCheckBoxComponent;
