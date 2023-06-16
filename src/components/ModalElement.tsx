import React from 'react';
import Backdrop from '@mui/material/Backdrop';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Fade from '@mui/material/Fade';
import Typography from '@mui/material/Typography';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 10,
};

const ModalElement: React.FC = ({
  open,
  handleClose,
  modalData,
}: {
  open: boolean;
  handleClose: object;
  modalData: object;
}) => {
  return (
    <Modal
      aria-labelledby='transition-modal-title'
      aria-describedby='transition-modal-description'
      open={open}
      onClose={handleClose}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={open}>
        <Box sx={style}>
          <Typography
            id='transition-modal-title'
            variant='h6'
            component='h1'
            sx={{ textAlign: 'center', fontWeight: '900', fontSize: '1.6rem' }}
          >
            {modalData.type}
          </Typography>
          <Typography id='transition-modal-description' sx={{ mt: 2 }}>
            <div className='flex justify-between'>
              <h2 className='mb-3'>
                Pair ID: <span>L71S68</span>
              </h2>
              <h2 className='mb-3'>
                Number Of Pairs: <span>5</span>
              </h2>
            </div>
            <TableContainer component={Paper} className='mb-3'>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={2}>Account Long: 71</TableCell>
                  </TableRow>
                </TableHead>
                <TableRow>
                  <TableCell>Key 1</TableCell>
                  <TableCell>Key 2</TableCell>
                </TableRow>
              </Table>
            </TableContainer>
            <TableContainer component={Paper} className='mb-3'>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={2}>Account Short: 68</TableCell>
                  </TableRow>
                </TableHead>
                <TableRow>
                  <TableCell>Key 1</TableCell>
                  <TableCell>Key 2</TableCell>
                </TableRow>
              </Table>
            </TableContainer>
            <TableContainer component={Paper} className='mb-3'>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell colSpan={8}>SetPair Volume</TableCell>
                  </TableRow>
                </TableHead>
                <TableRow>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                  <TableCell align='center'>data</TableCell>
                </TableRow>
              </Table>
            </TableContainer>
          </Typography>
        </Box>
      </Fade>
    </Modal>
  );
};

export default ModalElement;
