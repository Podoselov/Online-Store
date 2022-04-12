import React, { useState, useEffect } from 'react';
import { GenderBox } from './stylesGender';
import {
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Checkbox,
} from '@mui/material';
import { removeCategory, addCategory } from '../../../../store/actions/actions';
import { useDispatch, useSelector } from 'react-redux';

const GenderCheckBoxComponent = () => {
  const [statusCheckBoxMen, setStatusCheckBoxMen] = useState(false);
  const [statusCheckBoxWomen, setStatusCheckBoxWomen] = useState(false);
  const [statusCheckBoxKids, setStatusCheckBoxKids] = useState(false);

  const dispatch = useDispatch();

  const genderCategory = useSelector(
    ({ products }) => products.category.gender
  );

  const addActiveCheckBox = () => {
    if (genderCategory.length > 0) {
      return genderCategory.map((element) => {
        if (element === '&category=men') {
          return setStatusCheckBoxMen(true);
        }
        if (element === '&category=women') {
          return setStatusCheckBoxWomen(true);
        }
        if (element === '&category=kids') {
          return setStatusCheckBoxKids(true);
        }
      });
    }
    return (
      setStatusCheckBoxMen(false),
      setStatusCheckBoxWomen(false),
      setStatusCheckBoxKids(false)
    );
  };

  useEffect(() => {
    addActiveCheckBox();
  }, [genderCategory]);

  const changeBoxValue = async (state, setState, value) => {
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
                checked={statusCheckBoxMen}
                value='&category=men'
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
                checked={statusCheckBoxWomen}
                value='&category=women'
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
                checked={statusCheckBoxKids}
                value='&category=kids'
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
