import Icon from '@components/Icon/Icon';
import Menu from '@components/Menu/Menu';
import Sidenav from '@components/Sidenav/Sidenav';
import useClickOutside from '@hooks/useClickOutside';
import useDimensions from '@hooks/useDimensions';
import React, { useCallback, useRef, useState } from 'react';
const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile] = useDimensions();
  const navRef = useRef<HTMLDivElement>();

  const openSidenav = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSidenav = useCallback((event?: React.MouseEvent<SVGSVGElement> | MouseEvent) => {
    if (event) {
      event.stopPropagation();
    }

    setIsOpen(false);
  }, []);

  useClickOutside(navRef, closeSidenav);

  return (
    <>
      {isOpen && <div className='overlay'></div>}
      <nav
        ref={navRef}
        className='navbar flex-row center'>
        {!isMobile ? (
          <Menu className='flex-row center' />
        ) : (
          <div className='mobile-header'>
            {isOpen ? (
              <Icon
                className='trigger'
                onClick={closeSidenav}
                name='close'
              />
            ) : (
              <Icon
                className='trigger'
                onClick={openSidenav}
                name='hamburger-menu'
              />
            )}
            <Sidenav
              isOpen={isOpen}
              onClick={closeSidenav}
            />
          </div>
        )}
      </nav>
    </>
  );
};

export default React.memo(Header);
