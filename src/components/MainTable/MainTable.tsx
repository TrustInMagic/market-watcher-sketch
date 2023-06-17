import {
  Table,
  TableBody,
  TableContainer,
  TableHead,
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
import { mockPairTradingData } from '@/mockData/mockData';
import Button from '@mui/material/Button';
import MidMainTable from '../MidMainTable/MidMainTable';
import StatusBadge from '../StatusBadge';

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
  firstBalance: number;
  secondBalance: number;
  sessions: SessionData[];
}

interface SessionRowData {
  pair: string;
  shortAcc: number;
  longAcc: number;
  firstBalance: number;
  secondBalance: number;
  activePairs: number;
  session: number;
  cycle: number;
  status: string | undefined;
  duration: string | undefined;
  shortPL: number | undefined;
  longPL: number | undefined;
  totalPL: number;
  tradingAmount: number | undefined;
  totalSessionsNumber: number;
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

const calculateActivePairs = (sessionsData) => {
  return sessionsData.reduce((total, session) => {
    if (session.cycle > 0) total++;
    return total;
  }, 0);
};

const createSessionRowData = (
  sessionData: SessionData,
  pairTradingData: MockSessionData
): SessionRowData => {
  const activePairs = calculateActivePairs(pairTradingData.sessions);

  const totalPL = (sessionData.shortPL || 0) + (sessionData.longPL || 0);
  const sessionNumber = pairTradingData.sessions.indexOf(sessionData) + 1;

  return {
    pair: pairTradingData.pair,
    shortAcc: pairTradingData.accounts.short,
    longAcc: pairTradingData.accounts.long,
    firstBalance: pairTradingData.firstBalance,
    secondBalance: pairTradingData.secondBalance,
    activePairs: activePairs,
    session: sessionNumber,
    cycle: sessionData.cycle,
    status: sessionData.status,
    duration: sessionData.duration,
    shortPL: sessionData.shortPL,
    longPL: sessionData.longPL,
    totalPL: totalPL,
    tradingAmount: sessionData.tradingAmount,
    totalSessionsNumber: pairTradingData.sessions.length,
  };
};

const sessionRows = mockPairTradingData.sessions.map((sessionData) =>
  createSessionRowData(sessionData, mockPairTradingData)
);

const coins = {
  firstCoin: mockPairTradingData.pair.split('/')[0],
  secondCoin: mockPairTradingData.pair.split('/')[1],
};

const MainTable: React.FC = () => {
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
          <StyledTableRow>
            <StyledTableCell align='center'>Pair ID</StyledTableCell>
            <StyledTableCell align='center'>Short</StyledTableCell>
            <StyledTableCell align='center'>Long</StyledTableCell>
            <StyledTableCell align='center'>
              {coins.firstCoin} Balance
            </StyledTableCell>
            <StyledTableCell align='center'>
              {coins.secondCoin} Balance
            </StyledTableCell>
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
          </StyledTableRow>
        </TableHead>
        <TableBody>
          {sessionRows.map((row, index) => (
            <StyledTableRow key={index}>
              {buildMultipleRowSpanCell(index, 99, 1, row.pair)}
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
                row.firstBalance
              )}
              {buildMultipleRowSpanCell(
                index,
                sessionRows.length,
                1,
                row.secondBalance
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
                <StatusBadge status='progress'>{row.status || 'none'}</StatusBadge>
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
          <MidMainTable
            coins={coins}
            pairTradingData={mockPairTradingData}
            calculateActivePairs={calculateActivePairs}
            average='Average 24h'
            total='Total 24h'
          />
          <MidMainTable
            coins={coins}
            pairTradingData={mockPairTradingData}
            calculateActivePairs={calculateActivePairs}
            average='Average Previous 24h'
            total='Total PL Previous 24h'
          />
          <MidMainTable
            coins={coins}
            pairTradingData={mockPairTradingData}
            calculateActivePairs={calculateActivePairs}
            average='Average 7 Days'
            total='Total 7 Days'
          />
          <MidMainTable
            coins={coins}
            pairTradingData={mockPairTradingData}
            calculateActivePairs={calculateActivePairs}
            average='Average 30 Days'
            total='Total PL 30 Days'
          />
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default MainTable;
