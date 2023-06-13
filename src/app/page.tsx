'use client';
import React from 'react';
import Header from '@/components/Header';
import Account from '@/components/Account';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Volume from '@/components/Volume';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const mockClientId = '285890a0-e705-45ba-a9ea-a4a0d3abab19';
  const mockAccountNumberOne = 1;
  const mockAccountNumberTwo = 2;
  const mockTotalPL = -1000;
  const mockCurrency = '$';

  return (
    <ThemeProvider theme={darkTheme}>
      <Header clientID={mockClientId} />
      <div className='grid'>
        <Account number={mockAccountNumberOne} />
        <Account number={mockAccountNumberTwo} />
        <div className='flex gap-4 mt-5'>
          <Volume />
          <span>
            Total P&L:{' '}
            <span
              className={mockTotalPL > 0 ? 'text-green-500' : 'text-red-500'}
            >
              {mockTotalPL}
              {mockCurrency}
            </span>
          </span>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
