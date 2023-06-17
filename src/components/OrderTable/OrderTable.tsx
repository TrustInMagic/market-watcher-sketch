import React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { mockOrders, mockCycle } from '@/mockData/mockData';
import {
  StyledTableCell,
  StyledTableRow,
  StyledTablePLProfitCell,
  StyledTablePLLossCell,
} from './OrderTable.config';
import StatusBadge from '../StatusBadge';

interface Order {
  time: string;
  status: string;
  long: {
    orderType: string;
    price: number;
    quantityTUSD: number;
    orderStatus: string;
    PL: number;
  };
  short: {
    orderType: string;
    borRep: string;
    price: number;
    qtyBTC: number;
    orderStatus: string;
    PL: number;
  };
}

interface Cycle {
  markPrice: string;
  xMark: number;
}

interface Row {
  time: string;
  longOrderType: string;
  longPrice: number;
  longQuantityTUSD: number;
  longOrderStatus: string;
  longPL: number;
  markPrice: string;
  status: string;
  xMark: number;
  shortOrderType: string;
  shortBorRep: string;
  shortPrice: number;
  shortQtyBTC: number;
  shortOrderStatus: string;
  shortPL: number;
}

const calculateTotalPL = (longPL: number, shortPL: number) => {
  const localLongPL = longPL || 0;
  const localShortPL = shortPL || 0;
  return localLongPL + localShortPL;
};

const buildDynamicColouredCellOrder = (para: number) => {
  return para < 0 ? (
    <StyledTablePLLossCell align='center'>{para || 0}</StyledTablePLLossCell>
  ) : (
    <StyledTablePLProfitCell align='center'>
      {para || 0}
    </StyledTablePLProfitCell>
  );
};

const OrderTable: React.FC = ({ pair }: { pair: string }) => {
  const createData = (order: Order, cycle: Cycle): Row => {
    const rowData = {
      time: order.time,
      longOrderType: order?.long?.orderType,
      longPrice: order?.long?.price,
      longQuantityTUSD: order?.long?.quantityTUSD,
      longOrderStatus: order?.long?.orderStatus,
      longPL: order?.long?.PL,
      markPrice: cycle.markPrice,
      status: order.status,
      xMark: cycle.xMark,
      shortOrderType: order?.short?.orderType,
      shortBorRep: order?.short?.borRep,
      shortPrice: order?.short?.price,
      shortQtyBTC: order?.short?.qtyBTC,
      shortOrderStatus: order?.short?.orderStatus,
      shortPL: order?.short?.PL,
    };

    return rowData;
  };

  const rows: Row[] = mockOrders.map((order: Order) =>
    createData(order, mockCycle)
  );

  return (
    <TableContainer component={Paper}>
      <Table aria-label='spanning table'>
        <TableHead>
          <TableRow>
            <StyledTableCell align='center' rowSpan={rows.length + 1}>
              Pair ID
            </StyledTableCell>
            <StyledTableCell align='center' colSpan={6}>
              Account 9 Long S8
            </StyledTableCell>
            <StyledTableCell align='center' colSpan={3}>
              Cycle 5
            </StyledTableCell>
            <StyledTableCell align='center' colSpan={6}>
              Account 22 Short S8
            </StyledTableCell>
            <StyledTableCell align='center' rowSpan={2}>
              Total P&L
            </StyledTableCell>
          </TableRow>
          <TableRow>
            <StyledTableCell align='center'>Time</StyledTableCell>
            <StyledTableCell align='center'>Order Type</StyledTableCell>
            <StyledTableCell align='center'>Price</StyledTableCell>
            <StyledTableCell align='center'>Quantity TUSD</StyledTableCell>
            <StyledTableCell align='center'>Order Status</StyledTableCell>
            <StyledTableCell align='center'>PL</StyledTableCell>
            <StyledTableCell align='center'>Mark Price</StyledTableCell>
            <StyledTableCell align='center'>Status</StyledTableCell>
            <StyledTableCell align='center'>Xmark</StyledTableCell>
            <StyledTableCell align='center'>Order Type</StyledTableCell>
            <StyledTableCell align='center'>Borrow/Repay</StyledTableCell>
            <StyledTableCell align='center'>Price</StyledTableCell>
            <StyledTableCell align='center'>Quantity BTC</StyledTableCell>
            <StyledTableCell align='center'>Order Status</StyledTableCell>
            <StyledTableCell align='center'>PL</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row, index) => (
            <StyledTableRow key={index}>
              {index === 0 ? <TableCell rowSpan={99}>{pair}</TableCell> : null}
              <TableCell align='center'>{row.time || 'none'}</TableCell>
              <TableCell align='center'>
                {row.longOrderType || 'none'}
              </TableCell>
              <TableCell align='center'>{row?.longPrice || 'none'}</TableCell>
              <TableCell align='center'>
                {row.longQuantityTUSD || 'none'}
              </TableCell>
              <TableCell align='center'>
                {row.longOrderStatus || 'none'}
              </TableCell>
              <TableCell align='center'>{row.longPL || 'none'}</TableCell>
              <TableCell align='center'>{row.markPrice || 'none'}</TableCell>
              <TableCell align='center'>
                <StatusBadge status='completed'>{row.status || 'none'}</StatusBadge>
              </TableCell>
              <TableCell align='center'>{row.xMark || 'none'}</TableCell>
              <TableCell align='center'>
                {row.shortOrderType || 'none'}
              </TableCell>
              <TableCell align='center'>{row.shortBorRep || 'none'}</TableCell>
              <TableCell align='center'>{row.shortPrice || 'none'}</TableCell>
              <TableCell align='center'>{row.shortQtyBTC || 'none'}</TableCell>
              <TableCell align='center'>
                {row.shortOrderStatus || 'none'}
              </TableCell>
              <TableCell align='center'>{row.shortPL || 'none'}</TableCell>
              {buildDynamicColouredCellOrder(
                calculateTotalPL(row.longPL, row.shortPL)
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
