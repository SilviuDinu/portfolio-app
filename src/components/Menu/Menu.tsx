import routes from '@constants/routes';
import classNames from 'classnames';
import React from 'react';
import { Link } from 'react-router-dom';
const Menu = ({ className = '', onClick = null }: { className?: string; onClick?: () => void }) => {
  return (
    <div className={classNames('menu-items', className)}>
      {routes.map(({ label, path, classNames: classes }, idx) => (
        <Link
          key={idx}
          to={path}
          onClick={onClick}
          className={classNames('menu-item', classes)}>
          {label}
        </Link>
      ))}
    </div>
  );
};

export default React.memo(Menu);
