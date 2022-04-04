import React, { useState } from 'react';
import { GenderBox } from './stylesGender';
import {
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Checkbox,
} from '@mui/material';

const GenderCheckBoxComponent = () => {
  const [statusCheckBoxMen, setStatusCheckBoxMen] = useState(false);
  const [statusCheckBoxWomen, setStatusCheckBoxWomen] = useState(false);
  const [statusCheckBoxKids, setStatusCheckBoxKids] = useState(false);
  const [valuesElement, setValuesElement] = useState([]);

  const changeBoxValue = async (state, setState, value) => {
    setState(!state);
    state
      ? setValuesElement(valuesElement.filter((element) => element !== value))
      : setValuesElement([...valuesElement, value]);
  };

  return (
    <GenderBox>
      <p>Gender</p>
      <FormGroup>
        <RadioGroup>
          <FormControlLabel
            control={
              <Checkbox
                value='men'
                onChange={(e) => {
                  changeBoxValue(
                    statusCheckBoxMen,
                    setStatusCheckBoxMen,
                    e.target.value
                  );
                }}
                color='default'
              />
            }
            label='Men'
          />
          <FormControlLabel
            control={
              <Checkbox
                value='women'
                onChange={(e) => {
                  changeBoxValue(
                    statusCheckBoxWomen,
                    setStatusCheckBoxWomen,
                    e.target.value
                  );
                }}
                color='default'
              />
            }
            label='Women'
          />
          <FormControlLabel
            control={
              <Checkbox
                value='kids'
                color='default'
                onChange={(e) => {
                  changeBoxValue(
                    statusCheckBoxKids,
                    setStatusCheckBoxKids,
                    e.target.value
                  );
                }}
              />
            }
            label='Kids'
          />
        </RadioGroup>
      </FormGroup>
    </GenderBox>
  );
};

export default GenderCheckBoxComponent;
