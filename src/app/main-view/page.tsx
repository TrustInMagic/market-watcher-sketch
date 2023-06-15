'use client';
import React from 'react';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import CandleChart from '@/components/CandleChart';
import { useSearchParams } from 'next/navigation';

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
      <CandleChart theme='dark' pair={pair} />
    </ThemeProvider>
  );
};

export default MainView;
