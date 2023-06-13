import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface Account {
  id: number;
  balances: { [key: string]: number };
}

const BalanceTable = ({ accounts }: { accounts: Account[] }) => {
  const [displayedCurrencies, setDisplayedCurrencies] = React.useState([
    'BTC',
    'USDT',
  ]);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  interface RowData {
    account: string;
    [key: string]: number | string;
  }

  const createData = (account: Account): RowData => {
    let rowData: RowData = { account: `Account ${account.id}` };

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
