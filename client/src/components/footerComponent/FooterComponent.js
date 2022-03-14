import React from 'react';
import {
  StyledBoxContainer,
  StyledBox,
  StyledTypography,
  StyledText,
  StyledFooter,
  StyledBoxWraper,
} from './stylesFooterComponent';
import LocationOnIcon from '@mui/icons-material/LocationOn';

const FooterComponent = () => {
  return (
    <StyledFooter>
      <StyledBoxWraper>
        <StyledBoxContainer>
          <StyledBox>
            <LocationOnIcon sx={{ color: '#757575' }} />
            <StyledTypography>Ukraine</StyledTypography>
          </StyledBox>
          <StyledText>© 2022 Nike, Inc. All Rights Reserved</StyledText>
        </StyledBoxContainer>
      </StyledBoxWraper>
    </StyledFooter>
  );
};

export default FooterComponent;
