import React from 'react';
import { TextField } from '@mui/material';
import { Button } from '@mui/material';

const Account = ({ number }: { number: number }) => {
  return (
    <div className='pt-5'>
      <div>Account {number}:</div>
      <div className='flex gap-4 mt-2'>
        <TextField
          id='outlined-basic'
          label='API Key'
          variant='outlined'
          size='small'
        />
        <TextField
          id='outlined-basic'
          label='API Secret Key'
          variant='outlined'
          size='small'
        />
        <Button
          variant='contained'
          className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded'
        >
          Save Keys
        </Button>
      </div>
    </div>
  );
};

export default Account;
