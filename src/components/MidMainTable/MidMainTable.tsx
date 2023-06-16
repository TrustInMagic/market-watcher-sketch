import React from 'react';
import { StyledTableRow, StyledTableCell } from '../MainTable/MainTable.config';

const MidMainTable: React.FC = ({
  coins,
  pairTradingData,
  calculateActivePairs,
  average,
  total,
}) => {
  const midTableHeaders = [
    `${coins.firstCoin} Balance`,
    `${coins.secondCoin} Balance`,
    'Active Pairs',
    'Cycle/S',
    'PL',
    'PL%',
    'Duration',
    'Short PL',
    'Long PL',
    'Total PL',
    'Trading Amount',
  ];

  const averageRowData = {
    firstBalance: pairTradingData.firstBalance,
    secondBalance: pairTradingData.secondBalance,
    activePairs: calculateActivePairs(pairTradingData.sessions),
    cycleS: 5.2,
    PL: 755,
    percentPL: 8.24,
    duration: '5:21',
    shortPL: 0.0251,
    longPL: 801.22,
    totalPL: 825.54,
    tradingAmount: 3455,
  };

  const totalRowData = {
    firstBalance: 0.5801,
    secondBalance: 2922,
  };

  return (
    <>
      <StyledTableRow>
        <StyledTableCell
          align='center'
          rowSpan={2}
          colSpan={2}
          className='bg-black'
        >
          {average}
        </StyledTableCell>
        {midTableHeaders.map((header) =>
          header === 'Cycle/S' ? (
            <StyledTableCell align='center' key={header} colSpan={2}>
              {header}
            </StyledTableCell>
          ) : (
            <StyledTableCell align='center' key={header}>
              {header}
            </StyledTableCell>
          )
        )}
        <StyledTableCell align='center' rowSpan={2} className='bg-black'>
          {total}
        </StyledTableCell>
        <StyledTableCell>{coins.firstCoin}</StyledTableCell>
        <StyledTableCell>{coins.secondCoin}</StyledTableCell>
      </StyledTableRow>
      <StyledTableRow>
        <StyledTableCell align='center'>
          {averageRowData.firstBalance}
        </StyledTableCell>
        <StyledTableCell align='center'>
          {averageRowData.secondBalance}
        </StyledTableCell>
        <StyledTableCell align='center'>
          {averageRowData.activePairs}
        </StyledTableCell>
        <StyledTableCell align='center' colSpan={2}>
          {averageRowData.cycleS}
        </StyledTableCell>
        <StyledTableCell align='center'>{averageRowData.PL}</StyledTableCell>
        <StyledTableCell align='center'>
          {averageRowData.percentPL}
        </StyledTableCell>
        <StyledTableCell align='center'>
          {averageRowData.duration}
        </StyledTableCell>
        <StyledTableCell align='center'>
          {averageRowData.shortPL}
        </StyledTableCell>
        <StyledTableCell align='center'>
          {averageRowData.longPL}
        </StyledTableCell>
        <StyledTableCell align='center'>
          {averageRowData.totalPL}
        </StyledTableCell>
        <StyledTableCell align='center'>
          {averageRowData.tradingAmount}
        </StyledTableCell>
        <StyledTableCell align='center'>
          {totalRowData.firstBalance}
        </StyledTableCell>
        <StyledTableCell align='center'>
          {totalRowData.secondBalance}
        </StyledTableCell>
      </StyledTableRow>
    </>
  );
};

export default MidMainTable;
