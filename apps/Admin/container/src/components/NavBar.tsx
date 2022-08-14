import React, { FC } from 'react';
import { useHistory, useLocation } from 'react-router-dom';

const NAV_BARS = [
  { id: 'app', text: 'App', href: '/app' },
  { id: 'app1', text: 'App1', href: '/app1' },
];

const NavBar: FC = () => {
  const { pathname } = useLocation();
  const history = useHistory();
  return (
    <div className={pathname.startsWith('/app') ? 'isBigNav' : ''}>
      <div className="logo" onClick={() => history.push('/')}>
        VBI
      </div>
      <div className='space-4'>
        {NAV_BARS.map((nav) => (
          <button
            key={nav.id}
            onClick={() => (window.location.href = nav.href)}
            className="border px-6 py-2"
          >{nav.text}</button>
        ))}
      </div>
    </div>
  );
};

export default NavBar;