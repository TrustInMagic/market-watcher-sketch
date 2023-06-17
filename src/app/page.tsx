'use client';
import React from 'react';
import Header from '@/components/Header';
import BalanceTable from '@/components/BalanceTable/BalanceTable';
import CandleChart from '@/components/CandleChart';
import OrderTable from '@/components/OrderTable/OrderTable';
import { Button } from '@mui/material';
import { mockClientId, mockAccounts } from '@/mockData/mockData';
import ButtonNav from '@/components/ButtonNav';
import AccountsInterface from '@/components/AccountsInterface';
import { Card, CardContent } from '@mui/material';
import Nav from '@/components/Nav';

const App = () => {
  const [accounts, setAccounts] = React.useState(mockAccounts);
  const [tradedPair, setTradedPair] = React.useState('BTC/USDT');
  const [openTrades, setOpenTrades] = React.useState(false);

  return (
    <>
      <div className='p-2'>
        <Header clientID={mockClientId} />
        <div className='m-2 mb-4'>
          <Nav pair={tradedPair} location='home' />
          <ButtonNav />
        </div>
        <div className='grid auto-cols-auto grid-cols-2 gap-5'>
          <Card>
            <CardContent>
              <AccountsInterface accounts={accounts} />
            </CardContent>
          </Card>
          <Card className='row-start-2'>
            <CardContent>
              <BalanceTable accounts={accounts} />
            </CardContent>
          </Card>
          {/* adding a Card element here for some reason doesn't work well with the chart.
          Also I was unable to find out the exact BG color of the Card component. 
          I tried checking in DevTools but it shows no BG color or I am blind ... */}
          <div className='col-start-2 col-end-3 row-start-1 row-end-3 p-5 bg-[#202020] rounded'>
            <CandleChart theme='dark' pair={tradedPair} />
          </div>
          <Button
            onClick={() => setOpenTrades(true)}
            variant='contained'
            disableElevation
            className='py-2 px-4 mt-2'
          >
            Start Trades
          </Button>
        </div>
        <div className='flex flex-col mt-10 mb-10 gap-2 text-lg'>
          {openTrades ? (
            <>
              <span className='self-center font-bold'>My Trades</span>
              <OrderTable pair={tradedPair} />
            </>
          ) : null}
        </div>
      </div>
    </>
  );
};

export default App;
