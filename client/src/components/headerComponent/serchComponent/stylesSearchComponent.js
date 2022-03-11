import { styled, InputBase } from '@mui/material';

export const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: '100px',
  backgroundColor: 'rgba(255,255,255,0.25)',
  marginLeft: 0,
  width: '100%',
  '&:hover': {
    backgroundColor: 'rgb(121,121,121)',
  },
  [theme.breakpoints.up('sm')]: {
    marginLeft: '2px',
    width: 'auto',
  },
  [theme.breakpoints.down('sm')]: {
    display: 'none',
  },
}));

export const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: '0px 8px',
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  [theme.breakpoints.down('md')]: {},
}));

export const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: '4px 4px 4px 0',
    paddingLeft: '48px',
    transition: '100%',
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
    },
  },
}));
