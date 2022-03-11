import React from 'react';
import { ThemeProvider } from '@mui/styles';
import { theme } from './components/utils/breakpoints';
import AppRoutes from './pages/AppRoutes/AppRoutes';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <AppRoutes />
    </ThemeProvider>
  );
}

export default App;
