import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import { StyledTableCell, StyledTableRow } from './BalanceTable.config';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Account {
  id: number;
  balances: { [key: string]: number };
}

interface RowData {
  account: string;
  [key: string]: number | string;
}

const BalanceTable = ({ accounts }: { accounts: Account[] }) => {
  const [displayedCurrencies, setDisplayedCurrencies] = React.useState([
    'BTC',
    'USDT',
    'ADA',
  ]);

  const createData = (account: Account): RowData => {
    const rowData: RowData = { account: `Account ${account.id}` };

    for (let currency of displayedCurrencies) {
      rowData[currency] = account.balances[currency] || 0;
    }

    return rowData;
  };

  const rows: RowData[] = accounts.map((account) => createData(account));

  return (
    <TableContainer component={Paper} className='rounded-lg'>
      <Table aria-label='customized table'>
        <TableHead>
          <TableRow>
            <StyledTableCell>Accounts</StyledTableCell>
            {displayedCurrencies.map((currency: string) => (
              <StyledTableCell align='right' key={currency}>
                {currency}
              </StyledTableCell>
            ))}
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <StyledTableRow key={row.account}>
              <StyledTableCell component='th' scope='row'>
                {row.account}
              </StyledTableCell>
              {displayedCurrencies.map((currency) => (
                <StyledTableCell align='right' key={currency}>
                  {row[currency]}
                </StyledTableCell>
              ))}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BalanceTable;
