import { styled } from '@mui/material';
import { Box } from '@mui/system';

export const ShoeBox = styled(Box)(() => ({
  width: '100%',
  textAlign: 'left',
  padding: '0px 0px 20px ',
  borderBottom: '1px solid rgb(229, 229, 229)',
  lineHeight: '28px',
  '& p': {
    color: '#111',
    fontWeight: '700',
  },
}));
