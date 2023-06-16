import React from 'react';
import Account from './Account';
import Volume from './Volume';
import { mockTotalPL, mockCurrency } from '@/mockData/mockData';

const AccountsInterface: React.FC = ({ accounts }) => {
  return (
    <div className='row-span-1 col-span-1 border-b border-slate-500 p-2'>
      {accounts.map((account) => (
        <Account number={account.id} key={account.id} />
      ))}
      <div className='flex gap-4 mt-5'>
        <Volume />
        <span>
          Total P&L:{' '}
          <span className={mockTotalPL > 0 ? 'text-green-500' : 'text-red-500'}>
            {mockTotalPL}
            {mockCurrency}
          </span>
        </span>
      </div>
    </div>
  );
};

export default AccountsInterface;
