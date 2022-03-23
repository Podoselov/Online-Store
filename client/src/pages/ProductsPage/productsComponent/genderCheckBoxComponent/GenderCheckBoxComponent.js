import React, { useState } from 'react';
import { GenderBox } from './stylesGender';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';

const GenderCheckBoxComponent = () => {
  const [menCheckbox, setMenCheckbox] = useState(false);

  const changeBoxValue = (e) => {
    console.log(e.target.value);
    setMenCheckbox(!menCheckbox);
  };

  return (
    <GenderBox>
      <p>Gender</p>
      <FormGroup>
        <FormControlLabel
          control={
            <Checkbox value='men' onChange={changeBoxValue} color='default' />
          }
          label='Men'
        />
        <FormControlLabel
          control={
            <Checkbox value='women' onChange={changeBoxValue} color='default' />
          }
          label='Women'
        />
        <FormControlLabel
          control={
            <Checkbox value='kids' color='default' onChange={changeBoxValue} />
          }
          label='Kids'
        />
      </FormGroup>
    </GenderBox>
  );
};

export default GenderCheckBoxComponent;
