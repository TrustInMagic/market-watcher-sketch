import React from 'react';
import Link from 'next/link';
import { Button } from '@mui/material';

const Nav: React.FC = ({ pair, location }) => {
  const redirect = location === 'home' ? 'main-view' : '/';

  return (
    <div className='flex items-center justify-between'>
      <Link
        href={`/${redirect}?pair=${pair}`}
        className='text-blue-500 font-extrabold'
      >
        {location === 'home' ? 'Main View ⮕' : '⬅ S View'}
      </Link>
      <div>
        <Button variant='contained' className='bg-green-500 mr-5 hover:bg-green-700'>
          Add Pair
        </Button>
        <Button variant='contained' className='bg-yellow-500 hover:bg-yellow-700'>
          Edit Pair
        </Button>
      </div>
    </div>
  );
};

export default Nav;
