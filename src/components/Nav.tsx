import React from 'react';
import NavSectionHorizontal from './nav-section/horizontal/nav-section-horizontal';

const Nav = ({ pair, location}) => {
  const redirect = location === 'home' ? `/main-view/?pair=${pair}` : '/';
  const title = location === 'home' ? 'Main View ↣' : '↢ S View';

  return (
    <NavSectionHorizontal
      data={[
        {
          subheader: 'Main View',
          items: [
            {
              path: redirect,
              title: title,
            },
          ],
        },
      ]}
    />
  );
}

export default Nav