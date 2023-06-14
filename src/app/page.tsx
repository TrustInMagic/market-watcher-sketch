'use client';
import React from 'react';
import Header from '@/components/Header';
import Account from '@/components/Account';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import Volume from '@/components/Volume';
import BalanceTable from '@/components/BalanceTable';
import CandleChart from '@/components/CandleChart';
import OrderTable from '@/components/OrderTable';
import { Button } from '@mui/material';
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
  const [tradedPair, setTradedPair] = React.useState('BTC/USDT');
  const [openTrades, setOpenTrades] = React.useState(false);

  return (
    <ThemeProvider theme={darkTheme}>
      <Header clientID={mockClientId} />
      <div className='grid auto-cols-auto grid-cols-2'>
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
        <div className='row-start-2 p-2 border-b border-slate-500'>
          <BalanceTable accounts={accounts} />
        </div>
        <div className='col-start-2 col-end-3 row-start-1 row-end-3'>
          <CandleChart theme='dark' pair={tradedPair} />
        </div>
        <Button
          onClick={() => setOpenTrades(true)}
          variant='contained'
          disableElevation
          className='bg-purple-700 hover:bg-purple-900 text-white font-bold py-2 px-4 rounded mt-2'
        >
          Start Trades
        </Button>
      </div>
      <div className='flex flex-col mt-10 gap-2 text-lg'>
        <span className='self-center font-bold'>My Trades</span>
        {openTrades ? <OrderTable /> : null}
      </div>
    </ThemeProvider>
  );
};

export default App;
