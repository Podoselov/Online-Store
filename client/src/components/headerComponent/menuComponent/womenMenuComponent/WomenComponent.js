import React from 'react';
import { Box } from '@mui/system';
import ArrowBackIosIcon from '@mui/icons-material/ArrowBackIos';
import {
  StyledIconButton,
  StyledList,
  StyledListItem,
  StyledLink,
  StyledBox,
  StyledTypography,
} from './stylesWomenMenuComponent';

const MenComponent = ({ activeWomen, setActiveWomen }) => {
  return (
    <StyledBox
      onClick={(event) => {
        event.stopPropagation();
      }}
      style={
        activeWomen
          ? { transform: 'translateX(0)', transition: '0.1s' }
          : { transform: 'translateX(100%)', transition: '0.1s' }
      }
    >
      <Box>
        <StyledIconButton
          onClick={() => {
            setActiveWomen(false);
          }}
          aria-label='all'
        >
          <ArrowBackIosIcon /> All
        </StyledIconButton>
        <StyledTypography>Women</StyledTypography>
        <StyledList>
          <StyledListItem>
            <StyledLink>Settings</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>Settings</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>Settings</StyledLink>
          </StyledListItem>
          <StyledListItem>
            <StyledLink>Settings</StyledLink>
          </StyledListItem>
        </StyledList>
      </Box>
    </StyledBox>
  );
};

export default MenComponent;
