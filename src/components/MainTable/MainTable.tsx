import {
  Table,
  TableBody,
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
  StopButton,
  StartButton,
} from './MainTable.config';
import { mockSessionData } from '@/mockData/mockData';
import Button from '@mui/material/Button';

interface SessionData {
  cycle: number;
  status?: string;
  duration?: string;
  shortPL?: number;
  longPL?: number;
  tradingAmount?: number;
}

interface MockSessionData {
  pair: string;
  accounts: {
    short: number;
    long: number;
  };
  balanceBTC: number;
  balanceUSDT: number;
  sessions: SessionData[];
}

interface SessionRowData {
  pair: string;
  shortAcc: number;
  longAcc: number;
  balanceBTC: number;
  balanceUSDT: number;
  activePairs: number;
  session: number;
  cycle: number;
  status: string | undefined;
  duration: string | undefined;
  shortPL: number | undefined;
  longPL: number | undefined;
  totalPL: number;
  tradingAmount: number | undefined;
}

const buildDynamicColouredCellMain = (para: number) => {
  return para < 0 ? (
    <StyledTablePLLossCell align='center'>{para || 0}</StyledTablePLLossCell>
  ) : (
    <StyledTablePLProfitCell align='center'>
      {para || 0}
    </StyledTablePLProfitCell>
  );
};

const buildMultipleRowSpanCell = (
  index: number,
  rowSpan: number,
  colSpan: number,
  content: string | number | React.ReactNode
) => {
  return index === 0 ? (
    <StyledTableCell align='center' rowSpan={rowSpan} colSpan={colSpan}>
      {content}
    </StyledTableCell>
  ) : null;
};

const MainTable: React.FC = () => {
  const createData = (
    sessionData: SessionData,
    mockSessionData: MockSessionData
  ): SessionRowData => {
    const activePairs = mockSessionData.sessions.reduce((total, session) => {
      if (session.cycle > 0) total++;
      return total;
    }, 0);

    const totalPL = (sessionData.shortPL || 0) + (sessionData.longPL || 0);
    const sessionNumber = mockSessionData.sessions.indexOf(sessionData) + 1;

    const sessionRowData = {
      pair: mockSessionData.pair,
      shortAcc: mockSessionData.accounts.short,
      longAcc: mockSessionData.accounts.long,
      balanceBTC: mockSessionData.balanceBTC,
      balanceUSDT: mockSessionData.balanceUSDT,
      activePairs: activePairs,
      session: sessionNumber,
      cycle: sessionData.cycle,
      status: sessionData.status,
      duration: sessionData.duration,
      shortPL: sessionData.shortPL,
      longPL: sessionData.longPL,
      totalPL: totalPL,
      tradingAmount: sessionData.tradingAmount,
      totalSessionsNumber: mockSessionData.sessions.length,
    };

    return sessionRowData;
  };

  const sessionRows = mockSessionData.sessions.map((sessionData) =>
    createData(sessionData, mockSessionData)
  );

  // styled with tailwind because for some reason custom mui styles don't work here
  const editPairButton = (
    <Button variant='contained' size='large' className='bg-blue-500 h-full'>
      Edit Pair
    </Button>
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
            <StyledTableCell align='center' colSpan={2}>
              Status
            </StyledTableCell>
            <StyledTableCell align='center'>Duration</StyledTableCell>
            <StyledTableCell align='center'>Short PL</StyledTableCell>
            <StyledTableCell align='center'>Long PL</StyledTableCell>
            <StyledTableCell align='center'>Total PL</StyledTableCell>
            <StyledTableCell align='center'>Trading Amount</StyledTableCell>
            <StyledTableCell align='center' colSpan={3}>
              Actions
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {sessionRows.map((row, index) => (
            <StyledTableRow key={index}>
              {buildMultipleRowSpanCell(
                index,
                sessionRows.length + 8,
                1,
                row.pair
              )}
              {buildMultipleRowSpanCell(
                index,
                sessionRows.length,
                1,
                `Acc ${row.shortAcc}`
              )}
              {buildMultipleRowSpanCell(
                index,
                sessionRows.length,
                1,
                `Acc ${row.longAcc}`
              )}
              {buildMultipleRowSpanCell(
                index,
                sessionRows.length,
                1,
                row.balanceBTC
              )}
              {buildMultipleRowSpanCell(
                index,
                sessionRows.length,
                1,
                row.balanceUSDT
              )}
              {buildMultipleRowSpanCell(
                index,
                sessionRows.length,
                1,
                `${row.activePairs} out of ${row.totalSessionsNumber}`
              )}
              <StyledTableCell align='center'>
                {row.session || 'none'}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {row.cycle || 'none'}
              </StyledTableCell>
              <StyledTableCell align='center' colSpan={2}>
                {row.status || 'none'}
              </StyledTableCell>
              <StyledTableCell align='center'>
                {row.duration || 'none'}
              </StyledTableCell>
              {buildDynamicColouredCellMain(row.shortPL)}
              {buildDynamicColouredCellMain(row.longPL)}
              {buildDynamicColouredCellMain(row.totalPL)}
              <StyledTableCell align='center'>
                {row.tradingAmount || 'none'}
              </StyledTableCell>
              {/* here I applied the bg-color with tailwind because mui custom stylings failed.
              Not sure why this happens.*/}
              <StyledTableCell align='center'>
                {typeof row.duration !== 'string' ? (
                  <StartButton className='bg-green-500'>Start</StartButton>
                ) : (
                  <StopButton className='bg-red-500'>Stop</StopButton>
                )}
              </StyledTableCell>
              {buildMultipleRowSpanCell(
                index,
                sessionRows.length,
                2,
                editPairButton
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
