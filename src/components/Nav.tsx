import React from 'react';
import Link from 'next/link';

const Nav: React.FC = ({pair}) => {
  return (
    <Link href={`/main-view?pair=${pair}`}>Main View</Link>
  );
};

export default Nav;
