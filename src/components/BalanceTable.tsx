import React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

interface BalanceTableProps {
  accounts: object[];
}

const BalanceTable: React.FC<BalanceTableProps> = ({ accounts }) => {
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
    '&': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td, &:last-child th': {
      border: 0,
    },
  }));

  interface RowData {
    account: number;
    firstCurrency: number;
    secondCurrency: number;
  }

  const createData = (
    account: number,
    balances: { [key: string]: number }
  ): RowData => {
    let rowData: RowData = { account, firstCurrency: 0, secondCurrency: 0 };

    for (let currency of displayedCurrencies) {
      rowData[currency] = balances[currency] || 0;
    }

    return rowData;
  };

  const rows: RowData[] = accounts.map((account) =>
    createData(`Account ${account.id}`, account.balances)
  );

  return (
    <TableContainer component={Paper}>
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
