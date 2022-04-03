import React, { useState } from 'react';
import { BrandBox } from './stylesBrandCheckBox';
import { FormGroup, FormControlLabel, Checkbox } from '@mui/material';
import { useDispatch } from 'react-redux';
import { removeCategory, addCategory } from '../../../../store/actions/actions';

const BrandCheckBoxComponent = () => {
  const [statusCheckBoxSportswear, setStatusCheckBoxSportswear] =
    useState(false);
  const [statusCheckBoxJordan, setStatusCheckBoxJordan] = useState(false);
  const [statusCheckBoxByYou, setStatusCheckBoxByYou] = useState(false);
  const [statusCheckBoxConverse, setStatusCheckBoxConverse] = useState(false);
  const [statusCheckBoxLab, setStatusCheckBoxLab] = useState(false);
  const [statusCheckBoxACG, setStatusCheckBoxACG] = useState(false);

  const dispatch = useDispatch();

  const changeBoxValue = (state, setState, value) => {
    setState(!state);
    state ? dispatch(removeCategory(value)) : dispatch(addCategory(value));
  };

  return (
    <BrandBox>
      <p>Shop by Brand</p>
      <FormGroup>
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Nike Sportswear'
          value='sportswear'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxSportswear,
              setStatusCheckBoxSportswear,
              e.target.value
            );
          }}
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Jordan'
          value='jordan'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxJordan,
              setStatusCheckBoxJordan,
              e.target.value
            );
          }}
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Nike By You'
          value='you'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxByYou,
              setStatusCheckBoxByYou,
              e.target.value
            );
          }}
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='Converse'
          value='converse'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxConverse,
              setStatusCheckBoxConverse,
              e.target.value
            );
          }}
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='NikeLab'
          value='lab'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxLab,
              setStatusCheckBoxLab,
              e.target.value
            );
          }}
        />
        <FormControlLabel
          control={<Checkbox color='default' />}
          label='ACG'
          value='acg'
          onChange={(e) => {
            changeBoxValue(
              statusCheckBoxACG,
              setStatusCheckBoxACG,
              e.target.value
            );
          }}
        />
      </FormGroup>
    </BrandBox>
  );
};

export default BrandCheckBoxComponent;
