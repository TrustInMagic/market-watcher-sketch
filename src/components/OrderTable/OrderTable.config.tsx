import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import { styled } from '@mui/material/styles';
import TableRow from '@mui/material/TableRow';

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

export {
  StyledTableCell,
  StyledTableRow,
  StyledTableFirstCell,
  StyledTablePLProfitCell,
  StyledTablePLLossCell,
};
