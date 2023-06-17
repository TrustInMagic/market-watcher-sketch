'use client';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CandleChart from '@/components/CandleChart';
import { useSearchParams } from 'next/navigation';
import ButtonNav from '@/components/ButtonNav';
import Nav from '@/components/Nav';
import MainTable from '@/components/MainTable/MainTable';

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

const MainView = () => {
  const searchParams = useSearchParams();
  const pair = searchParams.get('pair');

  return (
    <ThemeProvider theme={darkTheme}>
      <div className='p-2'>
        <div className='m-2'>
          <Nav/>
          <ButtonNav location='main-view' />
        </div>
        <div className='h-96'>
          <CandleChart theme='dark' pair={pair} />
        </div>
        <div className='mt-10 mb-10'>
          <MainTable />
        </div>
      </div>
    </ThemeProvider>
  );
};

export default MainView;
