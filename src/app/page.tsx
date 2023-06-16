'use client';
import React from 'react';
import Header from '@/components/Header';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import BalanceTable from '@/components/BalanceTable/BalanceTable';
import CandleChart from '@/components/CandleChart';
import OrderTable from '@/components/OrderTable/OrderTable';
import { Button } from '@mui/material';
import { mockClientId, mockAccounts } from '@/mockData/mockData';
import Nav from '@/components/Nav';
import AccountsInterface from '@/components/AccountsInterface';

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
      <div className='p-2'>
        <Header clientID={mockClientId} />
        <div className='m-2'>
          <Nav pair={tradedPair} location='home' />
        </div>
        <div className='grid auto-cols-auto grid-cols-2'>
          <AccountsInterface accounts={accounts} />
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
          {openTrades ? (
            <>
              <span className='self-center font-bold'>My Trades</span>
              <OrderTable pair={tradedPair} />
            </>
          ) : null}
        </div>
      </div>
    </ThemeProvider>
  );
};

export default App;
