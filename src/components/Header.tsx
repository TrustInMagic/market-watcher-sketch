import React from 'react';

const Header = ({ clientID }: { clientID: string }) => {
  return (
    <div className='border-t border-b p-1 border-slate-500'>
      <span>Client ID = {clientID}</span>
    </div>
  );
};

export default Header;
