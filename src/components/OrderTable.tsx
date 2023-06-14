import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';
import { mockOrders, mockCycle } from '@/mockData/mockData';

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
  long_orderType: string;
  long_price: number;
  long_quantityTUSD: number;
  long_orderStatus: string;
  long_PL: number;
  markPrice: string;
  status: string;
  xMark: number;
  short_orderType: string;
  short_borRep: string;
  short_price: number;
  short_qtyBTC: number;
  short_orderStatus: string;
  short_PL: number;
}

const OrderTable = () => {
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

  const StyledTableFirstCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.grey[900],
      color: theme.palette.common.white,
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 14,
    },
  }));

  const createData = (order: Order, cycle: Cycle): Row => {
    const rowData = {
      time: order.time,
      long_orderType: order.long.orderType,
      long_price: order.long.price,
      long_quantityTUSD: order.long.quantityTUSD,
      long_orderStatus: order.long.orderStatus,
      long_PL: order.long.PL,
      markPrice: cycle.markPrice,
      status: order.status,
      xMark: cycle.xMark,
      short_orderType: order.short.orderType,
      short_borRep: order.short.borRep,
      short_price: order.short.price,
      short_qtyBTC: order.short.qtyBTC,
      short_orderStatus: order.short.orderStatus,
      short_PL: order.short.PL,
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
            <StyledTableFirstCell align='center' rowSpan={rows.length + 1}>
              Pair ID
            </StyledTableFirstCell>
            <StyledTableCell align='center' colSpan={6}>
              Account 9 Long S8
            </StyledTableCell>
            <StyledTableCell align='center' colSpan={3}>
              Cicle 5
            </StyledTableCell>
            <StyledTableCell align='center' colSpan={6}>
              Account 22 Short S8
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
              <StyledTableFirstCell></StyledTableFirstCell>
              <TableCell align='center'>{row.time}</TableCell>
              <TableCell align='center'>{row.long_orderType}</TableCell>
              <TableCell align='center'>{row.long_price}</TableCell>
              <TableCell align='center'>{row.long_quantityTUSD}</TableCell>
              <TableCell align='center'>{row.long_orderStatus}</TableCell>
              <TableCell align='center'>{row.long_PL}</TableCell>
              <TableCell align='center'>{row.markPrice}</TableCell>
              <TableCell align='center'>{row.status}</TableCell>
              <TableCell align='center'>{row.xMark}</TableCell>
              <TableCell align='center'>{row.short_orderType}</TableCell>
              <TableCell align='center'>{row.short_borRep}</TableCell>
              <TableCell align='center'>{row.short_price}</TableCell>
              <TableCell align='center'>{row.short_qtyBTC}</TableCell>
              <TableCell align='center'>{row.short_orderStatus}</TableCell>
              <TableCell align='center'>{row.short_PL}</TableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
