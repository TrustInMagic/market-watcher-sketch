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

  const StyledTablePLProfitCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: theme.palette.success.dark,
      fontSize: 14,
    },
  }));

  const StyledTablePLLossCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.body}`]: {
      backgroundColor: theme.palette.error.dark,
      fontSize: 14,
    },
  }));

  const createData = (order: Order, cycle: Cycle): Row => {
    const rowData = {
      time: order.time,
      longOrderType: order.long.orderType,
      longPrice: order.long.price,
      longQuantityTUSD: order.long.quantityTUSD,
      longOrderStatus: order.long.orderStatus,
      longPL: order.long.PL,
      markPrice: cycle.markPrice,
      status: order.status,
      xMark: cycle.xMark,
      shortOrderType: order.short.orderType,
      shortBorRep: order.short.borRep,
      shortPrice: order.short.price,
      shortQtyBTC: order.short.qtyBTC,
      shortOrderStatus: order.short.orderStatus,
      shortPL: order.short.PL,
    };

    return rowData;
  };

  const rows: Row[] = mockOrders.map((order: Order) =>
    createData(order, mockCycle)
  );

  const calculateTotalPL = (longPL: number, shortPL: number) => {
    return longPL + shortPL;
  };

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
              <StyledTableFirstCell></StyledTableFirstCell>
              <TableCell align='center'>{row.time}</TableCell>
              <TableCell align='center'>{row.longOrderType}</TableCell>
              <TableCell align='center'>{row.longPrice}</TableCell>
              <TableCell align='center'>{row.longQuantityTUSD}</TableCell>
              <TableCell align='center'>{row.longOrderStatus}</TableCell>
              <TableCell align='center'>{row.longPL}</TableCell>
              <TableCell align='center'>{row.markPrice}</TableCell>
              <TableCell align='center'>{row.status}</TableCell>
              <TableCell align='center'>{row.xMark}</TableCell>
              <TableCell align='center'>{row.shortOrderType}</TableCell>
              <TableCell align='center'>{row.shortBorRep}</TableCell>
              <TableCell align='center'>{row.shortPrice}</TableCell>
              <TableCell align='center'>{row.shortQtyBTC}</TableCell>
              <TableCell align='center'>{row.shortOrderStatus}</TableCell>
              <TableCell align='center'>{row.shortPL}</TableCell>
              {calculateTotalPL(row.longPL, row.shortPL) > 0 ? (
                <StyledTablePLProfitCell align='center'>
                  {calculateTotalPL(row.longPL, row.shortPL)}
                </StyledTablePLProfitCell>
              ) : (
                <StyledTablePLLossCell align='center'>
                  {calculateTotalPL(row.longPL, row.shortPL)}
                </StyledTablePLLossCell>
              )}
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default OrderTable;
