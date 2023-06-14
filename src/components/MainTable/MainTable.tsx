import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import {
  StyledTableCell,
  StyledTableRow,
  StyledTablePLProfitCell,
  StyledTablePLLossCell,
} from './MainTable.config';
import { mockSessionData } from '@/mockData/mockData';

const MainTable: React.FC = () => {
  const createData = (sessionData, mockSessionData) => {
    const activePairs = mockSessionData.pair.sessions.reduce(
      (total, session) => {
        if (session.cycle > 0) total++;
        return total;
      },
      0
    );

    const totalPL = sessionData.shortPL + sessionData.longPL || 0;
    const sessionNumber =
      mockSessionData.pair.sessions.indexOf(sessionData) + 1;

    const sessionRowData = {
      pair: mockSessionData.pair.id,
      shortAcc: mockSessionData.pair.accounts.short,
      longAcc: mockSessionData.pair.accounts.long,
      balanceBTC: mockSessionData.pair.balanceBTC,
      balanceUSDT: mockSessionData.pair.balanceUSDT,
      activePairs: activePairs,
      session: sessionNumber,
      cycle: sessionData.cycle,
      status: sessionData.status,
      duration: sessionData.duration,
      shortPL: sessionData.shortPL,
      longPL: sessionData.longPL,
      totalPL: totalPL,
      tradingAmount: sessionData.tradingAmount,
    };

    console.log(totalPL)

    return sessionRowData;
  };

  const sessionRows = mockSessionData.pair.sessions.map((sessionData) =>
    createData(sessionData, mockSessionData)
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label='pair table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center'>Pair ID</StyledTableCell>
            <StyledTableCell align='center'>Short</StyledTableCell>
            <StyledTableCell align='center'>Long</StyledTableCell>
            <StyledTableCell align='center'>BTC Balance</StyledTableCell>
            <StyledTableCell align='center'>TUSD Balance</StyledTableCell>
            <StyledTableCell align='center'>Active Pairs</StyledTableCell>
            <StyledTableCell align='center'>S</StyledTableCell>
            <StyledTableCell align='center'>Cycle</StyledTableCell>
            <StyledTableCell align='center'>Status</StyledTableCell>
            <StyledTableCell align='center'>Duration</StyledTableCell>
            <StyledTableCell align='center'>Short PL</StyledTableCell>
            <StyledTableCell align='center'>Long PL</StyledTableCell>
            <StyledTableCell align='center'>Total PL</StyledTableCell>
            <StyledTableCell align='center'>Trading Amount</StyledTableCell>
            <StyledTableCell align='center'>Actions</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessionRows.map((row, index) => (
            <StyledTableRow key={index}>
              {index === 0 ? (
                <StyledTableCell
                  align='center'
                  rowSpan={sessionRows.length + 8}
                >
                  {row.pair}
                </StyledTableCell>
              ) : null}
              {index === 0 ? (
                <StyledTableCell rowSpan={sessionRows.length} align='center'>
                  Acc {row.shortAcc}
                </StyledTableCell>
              ) : null}
              {index === 0 ? (
                <StyledTableCell rowSpan={sessionRows.length} align='center'>
                  Acc {row.longAcc}
                </StyledTableCell>
              ) : null}
              {index === 0 ? (
                <StyledTableCell rowSpan={sessionRows.length} align='center'>
                  {row.balanceBTC}
                </StyledTableCell>
              ) : null}
              {index === 0 ? (
                <StyledTableCell rowSpan={sessionRows.length} align='center'>
                  {row.balanceUSDT}
                </StyledTableCell>
              ) : null}
              {index === 0 ? (
                <StyledTableCell rowSpan={sessionRows.length} align='center'>
                  {row.activePairs}
                </StyledTableCell>
              ) : null}
              <StyledTableCell align='center'>
                {row.session || 'none'}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {row.cycle || 'none'}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {row.status || 'none'}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {row.duration || 'none'}
              </StyledTableCell>
              {row.shortPL === undefined || 0 ? (
                <StyledTableCell align='center'>
                  {row.shortPL || 0}
                </StyledTableCell>
              ) : row.shortPL < 0 ? (
                <StyledTablePLLossCell align='center'>
                  {row.shortPL || 0}
                </StyledTablePLLossCell>
              ) : (
                <StyledTablePLProfitCell align='center'>
                  {row.shortPL || 0}
                </StyledTablePLProfitCell>
              )}
              {row.longPL === undefined || 0 ? (
                <StyledTableCell align='center'>
                  {row.longPL || 0}
                </StyledTableCell>
              ) : row.longPL < 0 ? (
                <StyledTablePLLossCell align='center'>
                  {row.longPL || 0}
                </StyledTablePLLossCell>
              ) : (
                <StyledTablePLProfitCell align='center'>
                  {row.longPL || 0}
                </StyledTablePLProfitCell>
              )}
              {row.totalPL === 0 ? (
                <StyledTableCell align='center'>
                  {row.totalPL || 0}
                </StyledTableCell>
              ) : row.totalPL < 0 ? (
                <StyledTablePLLossCell align='center'>
                  {row.totalPL || 0}
                </StyledTablePLLossCell>
              ) : (
                <StyledTablePLProfitCell align='center'>
                  {row.totalPL || 0}
                </StyledTablePLProfitCell>
              )}
              <StyledTableCell align='center'>
                {row.tradingAmount || 'none'}
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
