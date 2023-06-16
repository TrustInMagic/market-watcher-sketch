import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';
import ModalElement from './ModalElement';

const Nav: React.FC = ({ pair, location }) => {
  const redirect = location === 'home' ? 'main-view' : '/';

  const [open, setOpen] = React.useState(false);
  const [modalData, setModalData] = React.useState({});
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <div className='flex items-center justify-between'>
      <Link
        href={`/${redirect}?pair=${pair}`}
        className='text-blue-500 font-extrabold'
      >
        {location === 'home' ? 'Main View ⮕' : '⬅ S View'}
      </Link>
      <div>
        <Button
          onClick={() => {
            handleOpen();
            setModalData({type: 'Add Pair'});
          }}
          variant='contained'
          className='bg-green-500 mr-5 hover:bg-green-700'
        >
          Add Pair
        </Button>
        <Button
          onClick={() => {
            handleOpen();
            setModalData({type: 'Edit Pair'});
          }}
          variant='contained'
          className='bg-yellow-500 hover:bg-yellow-700'
        >
          Edit Pair
        </Button>
      </div>
      <ModalElement open={open} handleClose={handleClose} modalData={ modalData} />
    </div>
  );
};

export default Nav;
