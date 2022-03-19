import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const StyledWraper = styled(Box)(() => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
}));

export const StyledHeadingWraper = styled(Box)(() => ({
  backgroundColor: '#fff',
  color: '#8d8d8d',
  margin: 'auto',
  maxWidth: '400px',
  padding: '28px',
  textAlign: 'left',
}));

export const StyledHeading = styled('header')(() => ({
  fontSize: '14px',
  lineHeight: 'normal',
  outline: '0',
  margin: '0',
}));

export const StyledHeadingImg = styled(Box)(() => ({
  height: '17px',
  margin: '0 auto',
  maxWidth: '573px',
  display: 'flex',
  justifyContent: 'center',
}));

export const StyledHeadingText = styled('h2')(() => ({
  padding: '32px 0 27px',
  color: '#111',
  fontSize: '26px',
  lineHeight: '26px',
  margin: '0 auto',
  maxWidth: '25ch',
  padding: '32px 0 26px',
  textAlign: 'center',
  fontWeight: '700',
}));

export const StyledJoinUsBox = styled(Box)(() => ({
  fontSize: '12px',
  lineHeight: '14px',
  padding: '10px 0 0',
  textAlign: 'center',
  display: 'inline-block',
  margin: '5px 0',
  position: 'relative',
  width: '100%',
  '& a': {
    fontSize: '12px',
    color: '#111',
  },
}));
