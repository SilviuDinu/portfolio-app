import Menu from '@components/Menu/Menu';
import classNames from 'classnames';
import React, { useState } from 'react';
import './style.scss';

function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav
      className={classNames('navbar flex-row center', {
        open: isOpen,
      })}>
      <div className='hamburger-menu mobile'>
        <button onClick={() => setIsOpen(!isOpen)}>menu</button>
      </div>
      <Menu />
    </nav>
  );
}

export default React.memo(Header);
