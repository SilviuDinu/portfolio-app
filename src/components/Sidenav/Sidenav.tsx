import Menu from '@components/Menu/Menu';
import classNames from 'classnames';
import React, { RefObject } from 'react';
export interface SidenavProps {
  isOpen: boolean;
  onClick?: () => void;
}

const Sidenav = React.forwardRef(({ isOpen = false, onClick = null }: SidenavProps, ref: RefObject<HTMLDivElement>) => {
  return (
    <div
      ref={ref}
      className={classNames('sidenav', { open: isOpen })}>
      <Menu
        className='flex-column center'
        onClick={onClick}
      />
    </div>
  );
});

export default Sidenav;
