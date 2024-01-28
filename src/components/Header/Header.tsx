import { ReactComponent as CloseIcon } from '@assets/icons/close.svg';
import { ReactComponent as HamburgerMenuIcon } from '@assets/icons/hamburger-menu.svg';
import Menu from '@components/Menu/Menu';
import Sidenav from '@components/Sidenav/Sidenav';
import useClickOutside from '@hooks/useClickOutside';
import useDimensions from '@hooks/useDimensions';
import React, { useCallback, useRef, useState } from 'react';
import './style.scss';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile] = useDimensions();
  const sidenavRef = useRef<HTMLDivElement>();

  const openSidenav = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSidenav = useCallback(() => {
    setIsOpen(false);
  }, []);

  useClickOutside(sidenavRef, closeSidenav);

  return (
    <nav className='navbar flex-row center'>
      {!isMobile ? (
        <Menu className='flex-row center' />
      ) : (
        <div className='mobile-header'>
          {isOpen ? (
            <CloseIcon
              className='trigger'
              onClick={closeSidenav}
            />
          ) : (
            <HamburgerMenuIcon
              className='trigger'
              onClick={openSidenav}
            />
          )}
          <Sidenav
            ref={sidenavRef}
            isOpen={isOpen}
            onClick={closeSidenav}
          />
        </div>
      )}
    </nav>
  );
};

export default React.memo(Header);
