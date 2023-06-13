'use client';
import React from 'react';
import Header from '@/components/Header';
import Account from '@/components/Account';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const mockClientId = '285890a0-e705-45ba-a9ea-a4a0d3abab19';
  const mockAccountNumberOne = 1;
  const mockAccountNumberTwo = 2;

  return (
    <ThemeProvider theme={darkTheme}>
      <Header clientID={mockClientId} />
      <div className='grid'>
        <Account number={mockAccountNumberOne} />
        <Account number={mockAccountNumberTwo} />
      </div>
    </ThemeProvider>
  );
};

export default App;
