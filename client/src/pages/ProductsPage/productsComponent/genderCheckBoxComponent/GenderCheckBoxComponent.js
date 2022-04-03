import React, { useState } from 'react';
import { GenderBox } from './stylesGender';
import {
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Checkbox,
} from '@mui/material';
import { useDispatch } from 'react-redux';
import { addCategory, removeCategory } from '../../../../store/actions/actions';

const GenderCheckBoxComponent = () => {
  const [statusCheckBoxMen, setStatusCheckBoxMen] = useState(false);
  const [statusCheckBoxWomen, setStatusCheckBoxWomen] = useState(false);
  const [statusCheckBoxKids, setStatusCheckBoxKids] = useState(false);

  const dispatch = useDispatch();

  const changeBoxValue = (state, setState, value) => {
    setState(!state);
    state ? dispatch(removeCategory(value)) : dispatch(addCategory(value));
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
