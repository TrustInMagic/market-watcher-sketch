'use client';
import React from 'react';
import Header from '@/components/Header';
import Account from '@/components/Account';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Volume from '@/components/Volume';
import BalanceTable from '@/components/BalanceTable';
import {
  mockClientId,
  mockTotalPL,
  mockCurrency,
  mockAccounts,
} from '@/mockData/mockData';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const App = () => {
  const [accounts, setAccounts] = React.useState(mockAccounts);

  return (
    <ThemeProvider theme={darkTheme}>
      <Header clientID={mockClientId} />
      <div className='grid grid-rows-2 grid-cols-2'>
        <div className='row-span-1 col-span-1 border-b border-slate-500 p-2'>
          {accounts.map((account) => (
            <Account number={account.id} key={account.id} />
          ))}
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
        <div className='row-start-2 p-2'>
          <BalanceTable accounts={accounts}/>
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
